const { normalizeURL } = require('./crawl.js');
const { test, expect } = require('@jest/globals');

test('normalizeURL remove protocol', () => {
  const input = 'https://rushil-dev.vercel.app/path';
  const output = normalizeURL(input);
  const expectedOutput = 'rushil-dev.vercel.app/path';
  expect(output).toEqual(expectedOutput);
});

test('normalizeURL remove trailing slash', () => {
  const input = 'https://rushil-dev.vercel.app/path/';
  const output = normalizeURL(input);
  const expectedOutput = 'rushil-dev.vercel.app/path';
  expect(output).toEqual(expectedOutput);
});

test('normalizeURL capitals', () => {
  const input = 'https://RUSHIL-dev.vercel.app/path';
  const output = normalizeURL(input);
  const expectedOutput = 'rushil-dev.vercel.app/path';
  expect(output).toEqual(expectedOutput);
});

test('normalizeURL remove HTTP', () => {
  const input = 'http://rushil-dev.vercel.app/path';
  const output = normalizeURL(input);
  const expectedOutput = 'rushil-dev.vercel.app/path';
  expect(output).toEqual(expectedOutput);
});
