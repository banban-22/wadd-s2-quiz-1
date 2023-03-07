const g = require('../g');

describe('Question G', () => {
  test('should return the correct sql query', () => {
    expect(g()).toBe(`select "user"."user_name", "listings"."name" from "users" inner join "reviews" on "users"."id" = "reviews"."user_id" inner join "listings" on "listings"."id" = "reviews"."listing_id" where "id" = 10`);
  })
});
