import self from 'deepmerge'

export default {
  array: () => expect(self({ a: [1] }, { a: [2] })).toEqual({ a: [1, 2] }),
  number: () => expect(self({ a: 1 }, { a: 2 })).toEqual({ a: 2 }),
}
