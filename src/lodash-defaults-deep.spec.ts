import { expect, test } from '@playwright/test';
import { defaultsDeep as self } from 'lodash-es';

test('array', () => expect(self({ a: [2] }, { a: [1] })).toEqual({ a: [2] }));
test('number', () => expect(self({ a: 2 }, { a: 1 })).toEqual({ a: 2 }));
