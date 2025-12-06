import { expect, test } from '@playwright/test';
import { merge as self } from 'merge-anything';

test('array', () => expect(self({ a: [1] }, { a: [2] })).toEqual({ a: [2] }));
test('number', () => expect(self({ a: 1 }, { a: 2 })).toEqual({ a: 2 }));
