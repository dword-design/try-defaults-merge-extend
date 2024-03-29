import { defaultComposer as self, setConfig } from 'default-composer'

setConfig({ mergeArrays: true })

export default {
  array: () => expect(self({ a: [1] }, { a: [2] })).toEqual({ a: [1, 2] }),
  number: () => expect(self({ a: 1 }, { a: 2 })).toEqual({ a: 2 }),
}
