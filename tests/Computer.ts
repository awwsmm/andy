import { expect } from 'chai'
import Computer from 'Computer'

describe('Computer', () => {

  it('should know the answer', () => {
    const computer = new Computer()
    expect(computer.answer).equals(42)
  })

})