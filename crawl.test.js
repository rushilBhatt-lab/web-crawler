const { normalizeURL, getURLsfromHTML } = require('./crawl.js');
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

test('getURLsfromHTML absolute URL ', () => {
  const inputHtmlBody = `<html><body><a href="https://rushil-dev.vercel.app/path/">Rushil.dev</a></body></html>`;
  const inputBaseURL = 'https://rushil-dev.vercel.app/path/';
  const output = getURLsfromHTML(inputHtmlBody, inputBaseURL);
  const expectedOutput = ['https://rushil-dev.vercel.app/path/'];
  expect(output).toEqual(expectedOutput);
});

test('getURLsfromHTML relative URL', () => {
  const inputHtmlBody = `<html><body><a href="/path/">Rushil.dev</a></body></html>`;
  const inputBaseURL = 'https://rushil-dev.vercel.app';
  const output = getURLsfromHTML(inputHtmlBody, inputBaseURL);
  const expectedOutput = ['https://rushil-dev.vercel.app/path/'];
  expect(output).toEqual(expectedOutput);
});

test('getURLsfromHTML relative UR', () => {
  const inputHtmlBody = `
  <html><body><a href="https://rushil-dev.vercel.app/path1/">Rushil.dev</a>
  <a href="/path2/">Rushil.dev</a>
  </body></html>`;
  const inputBaseURL = 'https://rushil-dev.vercel.app';
  const output = getURLsfromHTML(inputHtmlBody, inputBaseURL);
  const expectedOutput = [
    'https://rushil-dev.vercel.app/path1/',
    'https://rushil-dev.vercel.app/path2/',
  ];
  expect(output).toEqual(expectedOutput);
});

test('getURLsfromHTML relative URL', () => {
  const inputHtmlBody = `<html><body><a href="invalid">Invalid URL</a></body></html>`;
  const inputBaseURL = 'https://rushil-dev.vercel.app';
  const output = getURLsfromHTML(inputHtmlBody, inputBaseURL);
  const expectedOutput = [];
  expect(output).toEqual(expectedOutput);
});
