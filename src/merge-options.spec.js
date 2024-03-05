import self from 'merge-options'

export default {
  array: () => expect(self({ a: [1] }, { a: [2] })).toEqual({ a: [2] }),
  number: () => expect(self({ a: 1 }, { a: 2 })).toEqual({ a: 2 }),
}
