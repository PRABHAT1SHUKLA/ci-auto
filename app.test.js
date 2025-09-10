const { greet } = require('./app');

test('greets correctly', () => {
  expect(greet('World')).toBe('Hello, World!');
});
