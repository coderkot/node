
// test - что это
// expect - что это
// test, expect - прокачивает глобальное окружение.
// -D --save-dev - установить как dev зависимость. Только для разработки.

// describe - описать группу тестов.
// test(it) - описать тест кейс
// expect - это швейцарский нож тестов.

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// Библиотека.
// calculate.ts
// calculate.spec.ts - для unit отлично подходит.
// calculate.e2e.ts

// src/<code>
// testing/<code> - чисты утилы для тестирования
// tests/<test_code>
// e2e/<e2e_test_code>

// Сборка exclude[".spec.ts"]
// Запускаем только .spec.ts

//


describe('sum', () => {
  beforeEach(() => {
    // Создать пользователя в базе
    console.log('before each');
  });
  
  
  afterEach(() => {
    // Почистить базу
    console.log('after each');
    // jest.clearAllMocks();
  });
  
  beforeAll(() => {
    // Запустить сервер
    console.log('before all');
  });
  
  afterAll(() => {
    // Погастить сервер
    console.log('before all');
  });  

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 4 + 2 to equal 6', () => {
    // AAA
    // Arrange - преднастройка
    // Act - это сам тест
    // Assert - это проверка утверждения

    // Arrange
    const a = 4;
    const b = 2;
    // Act
    const res = sum(4, 2)
    // Assert 
    expect(res).toBe(6);

    // jest.clearAllMocks();
  });
});

class A {
  methodA() {

  }
}

class B {
  constructor() {
    this.a = new A();
  }

  methodB(param) {
    if (param = 'value') {
      this.a.methodA(); // Подменить и проверить
      // а вызывается ли он. Spy - шпион.
      // А вызвался ли он? А с какими аргументами и тд.
    }
  }
}

// Моки, стабы - Mock, stub.
// Надо эмулировать поведение.
// Mock - эмуляция.
// Stub - для конкретного теста, конкретный результат

describe('sub', () => {
  test('adds 2 - 1 to equal 1', () => {
    expect(sub(2, 1)).toBe(1);
  });

  test('adds 4 - 2 to equal 2', () => {
    expect(sub(4, 2)).toBe(2);
  });
});

const user = {
  username: 'nik',
  age: 36,
  color: 'black',
  flags: {
    developer: true,
    designer: false
  }
}

describe('user', () => {
  test('test case 1', () => {
    // expect(user).toEqual({
    //   username: 'nik',
    //   age: expect.any(Number),
    //   color: expect.stringMatching(/^(white|yellow|black)$/),
    //   flags: {
    //     developer: true,
    //     designer: false
    //   }
    // });

    // expect(user).toMatchSnapshot();
  })
})



// import { describe, it } from 'vitest'

// // The two tests marked with concurrent will be run in parallel
// describe('suite', () => {
//   it('serial test', async () => { /* ... */ })
//   it.concurrent('concurrent test 1', async ({ expect }) => { /* ... */ })
//   it.concurrent('concurrent test 2', async ({ expect }) => { /* ... */ })
// })
