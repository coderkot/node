const calc = require('./')

// describe - test.
// describe - группу тестов.

// beforeEach(() => {
//   console.log('before Each global');
// })

before(() => {
  // start server
  // start db
  // mock запуск
})

after(() => {
  // stop server
  // stop db
  // mock почисти
})


describe('calc.sum', () => {
  beforeEach(() => {
      console.log('before Each calc.sum');
  })
  // Это должно суммировать два целочисленных числа
  test('it should sum two integer number', () => {
    // arrange-act-assert;

    // arrange
    const a = 1
    const b = 2

    // act
    const result = calc.sum(a, b)

    // assert(expect)
    expect(result).toBe(3);
  })
})

describe('calc.sub', () => {
  // Это должно суммировать два целочисленных числа
  test('it should sub two integer number', () => {
    // arrange-act-assert;

    // arrange
    const a = 2
    const b = 1

    // act
    const result = calc.sub(a, b)

    // assert(expect)
    expect(result).toBe(1);
  })
})

describe('calc.multi', () => {
  // Это должно суммировать два целочисленных числа
  test('it should mul two number', () => {
    // arrange-act-assert;

    // arrange
    const a = 2
    const b = 5

    // act
    const result = calc.multi(a, b)

    // assert(expect)
    expect(result).toBe(10);
  })

  test('it should throw error if one number is string', () => {
    // arrange-act-assert;

    // arrange
    const a = '2'
    const b = '5'

    // assert(expect)
    expect(() => calc.multi(a, b)).toThrow(new Error('a is not a number'));
  })
})
