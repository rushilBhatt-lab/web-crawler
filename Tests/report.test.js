require('dotenv').config();
const { sortPages } = require('../Crawler/report');
const { test, expect } = require('@jest/globals');
const { home, baseDomain, inputBaseURL } = require('../Utils/Utils');

test('sortPages 2 pages', () => {
  const input = {
    [`${home}/path`]: 1,
    [home]: 3,
  };
  const output = sortPages(input);
  const expectedOutput = [
    [home, 3],
    [`${home}/path`, 1],
  ];
  expect(output).toEqual(expectedOutput);
});

test('sortPages 5 pages', () => {
  const input = {
    [`${home}/path`]: 1,
    [home]: 2,
    [`${home}/path5`]: 4,
    [`${home}/path3`]: 5,
    [`${home}/path4`]: 3,
  };
  const output = sortPages(input);
  const expectedOutput = [
    [`${home}/path3`, 5],
    [`${home}/path5`, 4],
    [`${home}/path4`, 3],
    [home, 2],
    [`${home}/path`, 1],
  ];
  expect(output).toEqual(expectedOutput);
});
