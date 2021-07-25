import Computer from '../src/Computer'
import Output from '../src/io/Output'

const output = new Output()
const computer = new Computer()

console.log(output.message())
console.log(`The answer is ${computer.answer}`)

alert("Hi there!")