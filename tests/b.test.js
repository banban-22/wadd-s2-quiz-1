const b = require('../b');

describe('Question b', () => {
  test('should count the number of directories and files within ./books', async () => {
    expect(await b()).toEqual({files: 4, directories: 2});
  })
})
