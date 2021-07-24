import Computer from 'Computer'
import Output from 'io/Output'

const output = new Output()
const computer = new Computer()

console.log(output.message())
console.log(`The answer is ${computer.answer}`)