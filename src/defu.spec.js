import self from 'defu'

export default {
  array: () => expect(self({ a: [2] }, { a: [1] })).toEqual({ a: [2, 1] }),
  number: () => expect(self({ a: 2 }, { a: 1 })).toEqual({ a: 2 }),
}
