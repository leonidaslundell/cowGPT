let inputBox
let sendButton
let textDisplay = ""
let textDisplayPrevious
let textDisplayPosition
let boxPosition = []

let rectWidth = 800; // The starting width of the rectangle
let rectHeight = 50; // The height of the rectangle


function setup() {
  cow = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/2048px-ChatGPT_logo.svg.png')
  you = loadImage('https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png')
  
  // clear the canvas each frame
  frameRate(2)
  createCanvas(windowWidth, windowHeight)
  
  // update textDisplayPosition
  textDisplayPosition = windowHeight - 100

  // create the input box
  inputBox = createInput()
  inputBox.size(windowWidth / 2)
  inputBox.position(windowWidth / 3, height - 70)

  // create the send button
  sendButton = createButton("Send")
  sendButton.style('background-color', 'white')
  sendButton.style('border', 'white')
  sendButton.style('padding', '')
  sendButton.position(windowWidth-155, height - 68)

  // function to be called when the button is clicked
  sendButton.mousePressed(sendText)
  keyTyped()
}

function draw() {
  background("#343541")
  
  //blurb under button
  fill('#9B9B9F')
  textSize(8)
  text('cowGPT Jan version 13. Free cow preview. Produces only accurate results.', windowWidth / 3,  height - 35)

  //make the logos follow the text
  for (let i = 0; i < boxPosition.length; i++) {
    noStroke()
    fill("#434654")
    rect(0, boxPosition[i], windowWidth, 32)
    image(you, (windowWidth / 3) - 40, boxPosition[i] + 2, 25, 25) 
    image(cow, (windowWidth / 3) - 40, boxPosition[i] + 45, 25, 25) 
  }

  // display the entered text
  textAlign(LEFT, TOP)
  textSize(16)
  fill("white")
  text(textDisplay, inputBox.x, textDisplayPosition)
  noStroke()
  
  //check if the textDisplay has been changed
  if(textDisplayPrevious == textDisplay){
    // Draw the rectangles
  //  for (let i = 0; i < 700; i++) {
  //    let x = i;
  //    rect(x, height/2 - rectHeight/2, 1, rectHeight);
  //  }
    // Shrink the rectangle
  //  rectWidth -= 1; // Shrink the rectangle by 1 pixel

    print('asd')  
    textDisplayPrevious = ''
  }
}

function fakeType() {
  print('asd')
}

function keyTyped() {
  if (keyCode === ENTER) {
    keyCode = 0
    sendText()
  }
}

function sendText() {
  // retrieve the text entered in the input box
  let text = inputBox.value()
  let muply = randomMu()
  // clear the input box
  inputBox.value("")

  // add the text to the display string
  textDisplay += "\n" + text + "\n"
  textDisplay += "\n" + muply + "\n"
  textDisplayPosition = textDisplayPosition - 80
  textDisplayPrevious = textDisplay
  
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
