import { expect, test } from '@playwright/test';
import self from 'deepmerge';

test('array', () =>
  expect(self({ a: [1] }, { a: [2] })).toEqual({ a: [1, 2] }));

test('number', () => expect(self({ a: 1 }, { a: 2 })).toEqual({ a: 2 }));
