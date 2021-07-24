import { expect } from 'chai'
import Output from 'io/Output'

describe('Output', () => {

  it('should be friendly', () => {
    const output = new Output()
    expect(output.message()).equals("Hello, World!")
  })

})