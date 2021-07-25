import { expect } from 'chai'
import Computer from 'src/Computer'

describe('Computer', () => {

  it('should know the answer', () => {
    const computer = new Computer()
    expect(computer.answer).equals(42)
  })

})