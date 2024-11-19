const EventEmitter = require('events')
class WithLog extends EventEmitter {
  execute(taskFunc) {
    console.log('Before executing') // 1
    this.emit('begin')
    taskFunc()
    this.emit('end')
    console.log('After executing') // 5
  }
}
const withLog = new WithLog()

withLog.on('begin', () => console.log('About to execute')) // 2
withLog.on('end', () => console.log('Done with execute')) // 3

withLog.execute(() => console.log('*** Executing task ***')) // 4





















// 1 - 5 - 2 - 3 - 4

// 1 - 2 - 4 - 3 - 5

// Бизнес кейсы применения:
// 1. Система нотификации, алертинга и т.д. EventEmitter
// 2. Системы обмена данными P2P. Шина событий.
// 3. Любое клиент-серверное взаимодейтсвие.

// Концепция Event Loop в Javascript.

// Почему когда идет HTTP запрос к серверу наша страница не подвисает и
// не ждёт, когда она завершится?

// Синхронные и асинхронные операции.

// 1. Javascript получил задание выполнить HTTP запрос.
// 2. Он его сделегировал его кому-то на выполнение.
// 3. Он ждёт других задач которые ему поступают и ждёт выполнения HTTP запроса(или других задач)

// Очередь выполнения задач.

// while - loop
// while(true) {
//   runEvent(); // runEvent - выполнение событий
//   // Пришла долгая задача на 1 минуту.
// }

// Первый нюанс
// Если код асинхронный, то JS(Node.JS) он не выполняет его в event loop 
// Если код синхронный, то выполняет его на event loop

// Второй нюанс
// Это очередность выполнения. В JS используется микро и макро таски.
// Способ управления очередностью.

// микро таски докидываются в тот же проход цикла. Макро таски в следующий.
