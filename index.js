#!/usr/bin/env node

const _ = require('lodash');

/** 
 * Recursive version of fibonacci using memoize technique and lodash.
 */
const fibonacci = _.memoize((n) => (
  n <= 1 ? Math.max(0, n) : fibonacci(n - 1) + fibonacci(n - 2)
));

if (require.main == module) {
  const n = process.argv[2];
  if (n === undefined) {
    console.error(`${process.argv[0]} ${process.argv[0]} <number>`);
    process.exit(1);
  }
  if (n < 0) {
    console.error(`Enter a positive number.`);
    process.exit(1);
  }

  const val = fibonacci(n);
  console.info(`Fibonacci digit @ ${n}: ${val}`);
}
