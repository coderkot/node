/**
 * Рассчитаем заказ и общее количество по среднему количеству на единицу товара
 */
db.orders.aggregate( [
    // Фильтр документов по полю "ord_date", которое больше или равно "2020-03-01"
    { $match: { ord_date: { $gte: new Date("2020-03-01") } } },

    // Разворачивание массива "items" для каждого документа
    { $unwind: "$items" },

    // Группировка по полю "items.sku" и вычисление суммы количества и уникальных идентификаторов заказов
    { $group: { _id: "$items.sku", qty: { $sum: "$items.qty" }, orders_ids: { $addToSet: "$_id" } }  },
    
    // Проекция с созданием объекта "value", содержащего общее количество заказов, сумму количества и среднее значение
    { $project: { value: { count: { $size: "$orders_ids" }, qty: "$qty", avg: { $divide: [ "$qty", { $size: "$orders_ids" } ] } } } },
    // 
    // Объединение результатов агрегации с коллекцией "agg_alternative_3", заменяя существующие документы или вставляя новые
    { $merge: { into: "agg_alternative_3", on: "_id", whenMatched: "replace",  whenNotMatched: "insert" } }
 ] )

