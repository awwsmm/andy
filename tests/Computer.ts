import { expect } from "chai"
import Computer from '../src/Computer'

describe('Computer', () => {

  it('should know the answer', () => {
    const map = new Computer()
    expect(map.answer).equals(42)
  })

})