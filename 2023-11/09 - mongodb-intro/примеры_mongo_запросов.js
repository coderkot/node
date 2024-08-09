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
		firstName: 'Alexander',
		lastName: 'Блок'
	}
});


db.books.insertMany([{
	title: 'Евгений Онегин',
	isbn: '3',
	author: {
		firstName: 'Alexander',
		lastName: 'Pushkin'
	}
},
{
	title: 'Отцы и дети',
	isbn: '4',
	author: {
		firstName: 'Иван',

	}
}]);

db.books.insertMany([{ title: 'Капитанская дочка',
	isbn: '33', author: {
		firstName: 'Alexander',
		lastName: 'Pushkin'}
},{ title: 'Медный всадник',
	isbn: '334',
	author: {
		firstName: 'Alexander', lastName: 'Pushkin'}
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
			$concat: ["ISBN_", {"$toString":"$_id"}]
		}
	}
}]);



db.books.deleteOne({"_id":ObjectId('659d85d870e5149ceecd1871')})


db.books.insert(
	{
		"title": "Война и мир222222",
		"isbn": "ISBN_659d8435bb3d644740aa21a2",
		"author": {
		  "firstName": "Лев",
		  "lastName": "Толстой"
		},
		"century": {
		  "date": 19
		}
	  }
)
// 
db.books.find({
	$or: [
		{ "title": { $regex: 'ир' } },
	
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

// title  like '%Ир%' or (published > "1820-01-01" and  published < "1880-01-01")



db.books.bulkWrite([
	{insertOne: {
			document: {isbn: "01414",
				title: 'Снеговик'}}},
	{ updateOne: {	filter: {  },update: { $set: { fancy: 4000 } }}
	}, {
		deleteOne: {filter: {'_id':ObjectId('659d8d21bb3d644740aa21a7')}}
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
			'author.firstName': 'Alexander'
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
			'author.firstName': 'Alexander'
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