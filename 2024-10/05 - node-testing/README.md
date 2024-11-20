# Зачем тесты и в чем плюсы?

- Тесты позволяют проверить наш код.
- Делает наш код более открытым для коллег.
- Тесты

# Запускаторы тестов и инструменты, которые позволяют проверять утверждения(assert/expect)

- jest
- mocha/chai/sinon
- jasmine
- karma - позволяет запускать тесты но в среде браузера

# UI тестирования

- selenium
- cypress
- cucumber
- playwright(headless browser)

<!-- function isAdmin(user) {
  return user.role_id === 1;
}

function checkAccessToEndpoint(user) {
  if (isAdmin) {
    return true;
  }

  if (isOwner(user)) {
    return true;
  }

  if (isHaveAccessToWrite(user)) {
    if (что-то там) {

    }

    return true;
  }
} -->
<!-- 
describe('login', () => {
  it('user should be able to log in', () => {
    // Заходим на такую-то страницу.
    cy.visit('/')

    // Получаем кнопку и жмем на неё
    // form.login-form button[type=submin].login-button - селектор
    // contains('Login') - это как вариант локатора
    cy.get('button').contains('Login').click()

    // Заполняем нужные элементы данными
    cy.get('input[type="email"]').type('test@test.com')
    cy.get('input[type="password"]').type('test123')

    // Жмём на кнопку
    cy.get('button').contains('Sign in').click()

    // Проверяем результат
    cy.contains('button', 'Logout').should('be.visible')
  })
}) -->

# Кто пишет/писал тесты?

# Какие есть инструменты?

- jest
- mocha/chai/sinon
- playwright

# Какие виды тестов есть?

- Есть пирамида(Unit test/Integration test/E2E).

# Зачем мы это изучаем?

- Есть функция. Если на определенный набор входных данных мы получаем определенный результат, то значит она работает правильно. Надо 
- доказать что всё работает.
- Быстрее разработка.
- Как документация.
- Ваш проект более устойчив: меньше ошибок, проще релизы и т.д.

# Минусы

- время написание тестов.
- нужно учиться писать их.
