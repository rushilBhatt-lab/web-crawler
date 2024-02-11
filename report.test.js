const { sortPages } = require('./report.js');
const { test, expect } = require('@jest/globals');

test('sortPages 2 pages', () => {
  const input = {
    'https://rushil-dev.vercel.app/path': 1,
    'https://rushil-dev.vercel.app/': 3,
  };
  const output = sortPages(input);
  const expectedOutput = [
    ['https://rushil-dev.vercel.app/', 3],
    ['https://rushil-dev.vercel.app/path', 1],
  ];
  expect(output).toEqual(expectedOutput);
});

test('sortPages 5 pages', () => {
  const input = {
    'https://rushil-dev.vercel.app/path': 1,
    'https://rushil-dev.vercel.app/': 2,
    'https://rushil-dev.vercel.app/path5': 4,
    'https://rushil-dev.vercel.app/path3': 5,
    'https://rushil-dev.vercel.app/path4': 3,
  };
  const output = sortPages(input);
  const expectedOutput = [
    ['https://rushil-dev.vercel.app/path3', 5],
    ['https://rushil-dev.vercel.app/path5', 4],
    ['https://rushil-dev.vercel.app/path4', 3],
    ['https://rushil-dev.vercel.app/', 2],
    ['https://rushil-dev.vercel.app/path', 1],
  ];
  expect(output).toEqual(expectedOutput);
});
