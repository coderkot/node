module.exports = {
  sum(a, b) {
    return a + b
  },
  sub(a, b) {
    return a - b
  },
  multi(a, b) {
    validateNumber(a, 'a');
    validateNumber(b, 'b');

    return a * b; // Как самый простой способ сделать тест зеленым?
  }
}

function validateNumber(val, property) {
  if (typeof val !== 'number') {
    throw new Error(`${property} is not a number`);
  }
}

// Fail - Success - Refactoring
// 1. Пишем тест и пишем заглушку функцию. Тест красный.
// 2. Пишем функцию. Тест зеленый.
// 3. Можем порефаторить. Можем здесь менять.
