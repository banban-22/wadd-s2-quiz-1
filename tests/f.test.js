const f = require('../f');

describe('Question F', () => {
  test('should return the correct SQL query', () => {
    expect(f()).toBe(`select "host"."id", "host"."host_url", "host"."host_since", "listings"."name" from "hosts" inner join "listings" on "host"."id" = "listings"."host_id"`);
  });
});
