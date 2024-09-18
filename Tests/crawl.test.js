require('dotenv').config();
const { normalizeURL, getURLsfromHTML } = require('../Crawler/crawl');
const { test, expect } = require('@jest/globals');
const { home, baseUrl, inputBaseURL } = require('../Utils/Utils.js');

test('normalizeURL remove protocol', () => {
  const input = `${home}/pathways`;
  const output = normalizeURL(input);
  const expectedOutput = `${baseUrl}/pathways`;
  expect(output).toEqual(expectedOutput);
});

test('normalizeURL remove trailing slash', () => {
  const input = `${home}/projects/`;
  const output = normalizeURL(input);
  const expectedOutput = `${baseUrl}/projects`;
  expect(output).toEqual(expectedOutput);
});

test('normalizeURL capitals', () => {
  const input = `${home}/contact`;
  const output = normalizeURL(input);
  const expectedOutput = `${baseUrl}/contact`;
  expect(output).toEqual(expectedOutput);
});

test('normalizeURL remove HTTP', () => {
  const input = `${home}/contact`;
  const output = normalizeURL(input);
  const expectedOutput = `${baseUrl}/contact`;
  expect(output).toEqual(expectedOutput);
});

test('getURLsfromHTML absolute URL', () => {
  const inputHtmlBody = `<html><body><a href="${home}/projects/">Projects</a></body></html>`;
  const output = getURLsfromHTML(inputHtmlBody, inputBaseURL);
  const expectedOutput = [`${home}/projects/`];
  expect(output).toEqual(expectedOutput);
});

test('getURLsfromHTML relative URL', () => {
  const inputHtmlBody = `<html><body><a href="/contact/">Contact</a></body></html>`;
  const output = getURLsfromHTML(inputHtmlBody, inputBaseURL);
  const expectedOutput = [`${home}/contact/`];
  expect(output).toEqual(expectedOutput);
});

test('getURLsfromHTML mixed relative and absolute URLs', () => {
  const inputHtmlBody = `
  <html><body><a href="${home}/pathways/">Pathways</a>
  <a href="/projects/">Projects</a>
  </body></html>`;

  const output = getURLsfromHTML(inputHtmlBody, inputBaseURL);
  const expectedOutput = [`${home}/pathways/`, `${home}/projects/`];
  expect(output).toEqual(expectedOutput);
});

test('getURLsfromHTML invalid URL', () => {
  const inputHtmlBody = `<html><body><a href="invalid">Invalid URL</a></body></html>`;
  const output = getURLsfromHTML(inputHtmlBody, inputBaseURL);
  const expectedOutput = [];
  expect(output).toEqual(expectedOutput);
});
