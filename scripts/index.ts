import Computer from 'src/Computer'
import Output from 'src/io/Output'

function main() {
  document.title = "This is the new page title!";

  const output = new Output()
  const computer = new Computer()

  console.log(output.message())
  console.log(`The answer is ${computer.answer}`)

  let inputElem = document.createElement('input')
  inputElem.setAttribute('id', 'theInput')
  document.body.appendChild(inputElem)

  let buttonElem = document.createElement('button')
  buttonElem.setAttribute('id', 'theButton')
  document.body.appendChild(buttonElem)

  buttonElem.onclick = setCapitalTitle
}

function setCapitalTitle() {
  let text = (document.getElementById('theInput') as HTMLInputElement).value || "empty title"
  document.title = text.toUpperCase()
}

window.onload = main