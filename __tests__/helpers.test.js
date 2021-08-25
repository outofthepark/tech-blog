const {format_date} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');
  
    expect(format_date(date)).toBe('3/20/2020');
  });

//   Next up, we want the words "point" and "comment" to appear in their plural forms only when there are multiple points and comments, respectively. To do this, we'll create another helper function. In helpers.test.js, write another test to check that format_plural() correctly pluralizes words.

// Passing in “Tiger”, 2 should return "tigers", whereas “Lion”, 1 should not change “lion”.

// Make sure to npm test to make sure your test fails, then add a format_plural() method to utils/helpers.js.