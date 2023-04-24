let inputBox
let sendButton
let textDisplay = ""
let textDisplayPosition
let boxPosition = []
let muply = ''

let currentString = ''
let currentCharacter = 0

function setup() {
  
  cow = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/2048px-ChatGPT_logo.svg.png')
  you = loadImage('https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png')
  
    // clear the canvas each frame
  frameRate(2)
  createCanvas(windowWidth, windowHeight)
  background("#343541")

  // update textDisplayPosition
  textDisplayPosition = windowHeight - 100

  // create the input box
  inputBox = createInput()
  inputBox.size(windowWidth / 3)
  inputBox.position(windowWidth / 3, height - 70)

  //blurb under button
  fill('#9B9B9F')
  textSize(8)
  text('cowGPT Jan version 13. Free cow preview. Produces only accurate results.', inputBox.x,  height - 35)

  // create the send button
  sendButton = createButton("Send")
  sendButton.style('background-color', 'white')
  sendButton.style('border', 'white')
  sendButton.style('padding', '')
  sendButton.position(((windowWidth / 3)+(windowWidth / 3))-40, height - 68)

  // function to be called when the button is clicked
  sendButton.mousePressed(sendText)
  keyTyped()  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  background("#343541")

  //blurb under button
  fill('#9B9B9F')
  textSize(8)
  text('cowGPT Jan version 13. Free cow preview. Produces only accurate results.', inputBox.x,  height - 35)
}

function draw() {
  //make the logos follow the text
  for (let i = 0; i < boxPosition.length; i++) {
    noStroke()
    fill("#434654")
    rect(0, boxPosition[i], windowWidth, 32)
    image(you, inputBox.x - 40, boxPosition[i] + 2, 25, 25) 
    image(cow, inputBox.x - 40, boxPosition[i] + 45, 25, 25) 
  }

  // display the entered text
  textAlign(LEFT, TOP)
  textSize(16)
  fill("white")
  text(textDisplay, inputBox.x, textDisplayPosition)
  noStroke()
  
  // create a box that obscures the text so that we can type in the answer.
  // omg what a solution on top of a solution...
  fill('#343541')
  rect(inputBox.x, inputBox.y - 50, 300, 32)
  
  // itterates pver currentCharacter nu addig one and subsets muply.
  // currentString and currentCharacter are zerod in sendText
  currentString = muply.substring(0, currentCharacter)
  currentCharacter += 1
  textAlign(LEFT, TOP)
  fill('white')
  text(currentString, inputBox.x, inputBox.y - 50)
}

function keyTyped() {
  if (keyCode === ENTER) {
    keyCode = 0
    sendText()
  }
}

function sendText() {
  currentCharacter = 0
  currentString = ''

  // retrieve the text entered in the input box
  query = inputBox.value()
  muply = randomMu()
  
  // clear the input box
  inputBox.value("")

  // add the text to the display string
  textDisplay += "\n" + query + "\n"
  textDisplay += "\n" + muply + "\n"
  textDisplayPosition = textDisplayPosition - 80
  
  //move the box
  boxPosition.push(textDisplayPosition + 12)
}

function randomMu() {
  let mu = ""
  mu_number = random(0, 5)
  for (let i = 0; i < mu_number; i++) {
    mu_length = int(random(0, 10))
    U = "u".repeat(mu_length)
    mu += "m" + U + " "
  }

  return mu
}
