// Создаем базу
use otus-js-demo;

// Удаляем базу
db.dropDatabase();


// Создаем коллекцию (таблицу) 
db.createCollection('books')

// Удаляем ее
db.books.drop();


db.books.insertOne({
	title: 'Война и мир',
	isbn: '1',
	author: {
		firstName: 'Лев',
		lastName: 'Толстой'
	}
});



db.books.insertOne({
	title: 'Мир и война',
	isbn: '2',
	author: {
		firstName: 'Лев',
		lastName: 'Толстой'
	}
});


db.books.insertOne({
	title: 'Ночь улица фонарь',
	isbn: '10424',
	author: {
		firstName: 'Александр',
		lastName: 'Блок'
	}
});


db.books.insertMany([{
	title: 'Евгений Онегин',
	isbn: '3',
	author: {
		firstName: 'Александр',
		lastName: 'Пушкин'
	}
},


{
	title: 'Отцы и дети',
	isbn: '4',
	author: {
		firstName: 'Иван',
		lastName: 'Тургенев'
	}
}]);

db.books.insertMany([{
	title: 'Капитанская дочка',
	isbn: '33',
	author: {
		firstName: 'Александр',
		lastName: 'Пушкин'
	}
},
{
	title: 'Медный всадник',
	isbn: '334',
	author: {
		firstName: 'Александр',
		lastName: 'Пушкин'
	}
}])

// У отцов и детей ставим дату публикации 1 января 1861 года
db.books.updateOne(
	{ isbn: '3' },
	{ $set: { published: new Date('1861-01-01') } });

// У всех записей проставляем 19 век
db.books.updateMany({}, { $set: { century: { date: 19 } } });

db.books.updateMany({}, [{
	$set: {
		isbn: {
			$concat: ['$title', '1']
		}
	}
}]);


db.books.updateMany({},
	[{
		$set: {
			isbn: { $convert: { input: '$_id', to: 'string' } }
		}
	}]
);

db.books.deleteOne({"_id":ObjectID('63dd47be204a2145eae32f6a')})


// 
db.books.find({
	$or: [
		{ "title": { $regex: 'Мир' } },
		{
			"published": {
				$gt: new Date("1820-01-01"),
				$lt: new Date("1880-01-01")
			}
		}
	]
},
	{
		title: 1,
		published: 1,
		isbn: 1
	}).sort({ isbn: 1 })





db.books.bulkWrite([
	{
		insertOne: {
			document: {
				isbn: "01414",
				title: 'Снеговик'
			}
		}
	},
	{
		updateOne: {
			filter: { _id: ObjectId('649f1461a26d3d3400547a41') },
			update: { $set: { fancy: 4000 } }
		}
	}, {
		deleteOne: {
			filter: {
				'_id':ObjectId('649f149da26d3d3400547a42')
			}
		}
	}
])


db.books.bulkWrite([
	{
		insertOne: {
			document: {
				'author.firstName':
					'Леванов'
			}
		}
	}
])

db.books.bulkWrite([
	{
		deleteOne: {
			'author.firstName': 'Леванов'
		}
	}
])


db.books.aggregate([
	{
		$match: {
			'author.firstName': 'Александр'
		}
	}, {
		$limit: 3
	}
])


// Найден все записи у которых имя автора - результата
// и сгруппируем
db.books.aggregate([
	{
		$match: {
			'author.firstName': 'Александр'
		}
	},
	{
		$group: {
			_id: "$author.lastName",
			count222:{ $count:{} }
		}
	}
])

db.books.distinct("author.firstName")
db.books.countDocuments()