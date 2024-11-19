// Event Driven Development

// Паттерн Observer
// Паттерн Publisher-Subscriber.

// Есть какой-то набор событий в нашем приложении.
// С одной сторны эти события публиковать.
// С другой стороны какие-то действия выполнять.

// Будут подключены зависимости модулей, которым важно изменения пользователя.

const user = {
  name: 'nik'
};

user.name = 'new nik'; // есть другие части приложения, которым важно следить за изменения.

// Подключи к модулю изменения имени все необходимые необходимые функии и метод.

// Подход без event driver
/*
email.sendNotification();
microservice1.sendUpdateUser(user);
*/

event.emit('user-update', user);
event.on('user-user', (event, payload) => {
  console.log(event, payload);
});

// Event Drivent
// document.addEventListener('click', )

// rxjs - Angular 2+.

// Пишем веб-сервер

app.get('/', (req, res) => {

})

WebSocket.on('data', (payload) => {

});















// Кто понимает паттерн Наблюдатель Observer. Publisher - subscriber.
// Event driven development.

// const user = {
//   name: 'nik'
// };

// user.name = 'new name';
// user.name = 'new new name'; // и т.д.


// // Как нам следить за изменениями?

// // proxy, декотораторы и прочее.


// function setUser(name) {
//   user.name = name;

//   // своя функция emit
//   emit('username-change', name); // emit функция, которая публикует событие.
// }

// on('username-change', (newUser) => {
//   console.log(newUser);
// });

// Веб-сервер как работает?


// GET /users - HTTP послал на веб сервер.





























// const events = new EventEmitter();

// class User {
//   constructor(events) {
//     this.events = events;
//     this.name = 'nik',
//     this.age = 32
//   }

//   setAge(newAge) {
//     this.age = newAge

//     this.events.emit('user.age.updated', {
//       id: 'uuid',
//       payload: {
//         name: this.name,
//         age: this.age
//       }
//     })
//   }
// }

// class Gift {
//   constructor(events) {
//     this.events = events
//     this.map = new Map()

//     events.on('user.age.updated', this.sendBirthdayEmail.bind(this))
//     events.on('user.age.updated', this.sendBirthdayEmail.bind(this))
//   }

//   sendBirthdayEmail(data) {
//     const { user } = data.payload
//     const message = `Happy birthday ${user.name}`
    
//     throw new Error('new error')
//   }
// }

// const user = new User(events)
// const gift = new Gift(events)

// /*
// class EventEmitter

// // База
// on(event, handler) - подписка на нужное событие
// handler(payload) - обработчик события

// emit(event, payload1, payload2, ...) - испускание события.

// // Вспомогательные события
// once(event, payload) - подписаться но один раз.
// off(event, handler) - отписка от события.
// listeners(event) - сколько подписчиков
// maxEventListeners - по-умолчанию 10
// */
