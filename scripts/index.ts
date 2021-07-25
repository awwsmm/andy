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

  const canvas = document.getElementById('canvas')
  if (canvas != null) {
    const startButton = canvas.querySelector('#start')
    if (startButton != null) {
      startButton.addEventListener('click', () => replaceWithMeeple(canvas, startButton))
    }
  }
}

function setCapitalTitle() {
  let text = (document.getElementById('theInput') as HTMLInputElement).value || "empty title"
  document.title = text.toUpperCase()
}

function replaceWithMeeple(canvas: HTMLElement, startButton: ChildNode) {
  const meeple: HTMLDivElement = document.createElement('div')
  meeple.style.backgroundColor = '#000'
  meeple.style.height = '50px'
  meeple.style.width = '50px'
  meeple.style.position = 'absolute'
  meeple.style.border = '1px solid green'
  const output = new Output()
  document.addEventListener('keydown', (key) => {
    output.logKeypress(key.code)
  })
  canvas.replaceChild(meeple, startButton)
}

window.onload = main