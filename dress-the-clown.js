// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

document.onkeydown = checkKey

let headImg = './images/'

let indexes = [3, 4, 4]
let clothingIndex = 0
let parts = ['head', 'body', 'shoes']

function updateImage() {
  let clothingChoice = parts[clothingIndex]
  document.getElementById(clothingChoice).src = headImg.concat(
    clothingChoice + indexes[clothingIndex] + '.png'
  )
}

function changeRight() {
  if (indexes[clothingIndex] < 6) {
    indexes[clothingIndex]++
  } else if (indexes[clothingIndex] == 6) {
    indexes[clothingIndex] = 0
  }

  updateImage()
}

function changeLeft() {
  if (indexes[clothingIndex] > 0) {
    indexes[clothingIndex]--
  } else if (indexes[clothingIndex] == 0) {
    indexes[clothingIndex] = 6
  }
  updateImage()
}

function changeBodyPartDown() {
  if (clothingIndex < 2) {
    clothingIndex++
  } else if (clothingIndex == 2) {
    clothingIndex = 0
  }
}

function changeBodyPartUp() {
  if (clothingIndex > 0) {
    clothingIndex--
  } else if (clothingIndex == 0) {
    clothingIndex = 2
  }
}

function checkKey(e) {
  e = e || window.event
  console.log(e.keyCode)
  switch (e.keyCode) {
    case 38:
      console.log('up')
      e.preventDefault()
      changeBodyPartDown()
      displayBodyParts()

      break
    case 40:
      console.log('down')
      e.preventDefault()
      changeBodyPartUp()
      displayBodyParts()

      break
    case 37:
      console.log('right')
      changeLeft()
      break
    case 39:
      console.log('left')
      changeRight()
      break
  }
}

// //add bodypart display via JS into display
let displayBodyPart = document.createElement('p')
let bodyPartType = 'head'
displayBodyPart.textContent = `Body part: ${bodyPartType}`
document.body.append(displayBodyPart)

function displayBodyParts() {
  if (clothingIndex == 0) {
    bodyPartType = 'head'
    displayBodyPart.textContent = `Body part: ${bodyPartType}`
  } else if (clothingIndex == 1) {
    bodyPartType = 'body'
    displayBodyPart.textContent = `Body part: ${bodyPartType}`
  } else {
    bodyPartType = 'feet'
    displayBodyPart.textContent = `Body part: ${bodyPartType}`
  }
}

//create save button all via JS
let saveButton = document.createElement('button')
saveButton.addEventListener('click', save2)
saveButton.textContent = 'Save image!'
document.body.append(saveButton)

function save2() {
  window.print()
}
