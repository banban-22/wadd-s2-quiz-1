const a = require('../a');

describe('Question a', () => {
  test('should export a function that adds two numbers together', () => {
    expect(a(1,2)).toBe(3);
  });
})

