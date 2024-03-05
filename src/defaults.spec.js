import self from 'defaults'

export default {
  array: () => expect(self({ a: [2] }, { a: [1] })).toEqual({ a: [2] }),
  number: () => expect(self({ a: 2 }, { a: 1 })).toEqual({ a: 2 }),
}
