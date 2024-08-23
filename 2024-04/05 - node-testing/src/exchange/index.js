const fetch = require("node-fetch-commonjs")

module.exports = class Exchange {
  async fetchData() {
    const res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    const data = await res.json()

    return Object.values(data.Valute)
  }

  async getData() {
    const list = await this.fetchData()

    return list.map(item => {
      item.Diff = +(item.Value - item.Previous).toFixed(4)

      return item
    })
  }
}


// Конфигурация проекта для тестирования утилиты tree из предыдущих заданий.
// Добиться code coverage 95%.
// Можно использовать пакет для моков файловой системы.
