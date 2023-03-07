const d = require('../d');

describe('Question D', () => {
  test('a function that selects all columns from students where id is 1', () => {
    expect(d()).toBe(`select * from "students" where "id" = 0`);  
  })
});
