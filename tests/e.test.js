const e = require('../e');
describe('Question E', () => {
  test('returns correct sql', () => {
    expect(e()).toBe(`select "first_name", "last_name", "created_at" from "students" where "first_name" ilike 'po%' order by "first_name" desc`);
  });
});
