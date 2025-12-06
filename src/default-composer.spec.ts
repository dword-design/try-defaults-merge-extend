import { expect, test } from '@playwright/test';
import { defaultComposer as self, setConfig } from 'default-composer';

setConfig({ mergeArrays: true });

test('array', () =>
  expect(self({ a: [1] }, { a: [2] })).toEqual({ a: [1, 2] }));

test('number', () => expect(self({ a: 1 }, { a: 2 })).toEqual({ a: 2 }));
