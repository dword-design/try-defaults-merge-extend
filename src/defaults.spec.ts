import { expect, test } from '@playwright/test';
import self from 'defaults';

test('array', () => expect(self({ a: [2] }, { a: [1] })).toEqual({ a: [2] }));
test('number', () => expect(self({ a: 2 }, { a: 1 })).toEqual({ a: 2 }));
