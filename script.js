// this changes the image
document.getElementById('change-image').addEventListener('click', image)
// this changes the text
document.getElementById('change-text').addEventListener('click', text)
// This hides the text
document.getElementById('hide').addEventListener('click', hide)
// this shows the text
document.getElementById('show').addEventListener('click', show)
// this makes the background black
document.getElementById('bg').addEventListener('click', background)

function image () {
  document.getElementById('picture').src = './Images/4.gif'
}

function text () {
  document.getElementById('text').innerHTML = 'Somthing'
}

function hide () {
  document.getElementById('text').style.display = 'none'
}

function show () {
  document.getElementById('text').style.display = 'block'
}

function background () {
  document.body.style.backgroundColor = 'black'
  document.getElementById('text').style.color = 'white'
}
