const colorbtn = document.getElementById('color')
const placebtn = document.getElementById('place')
const ritualbtn = document.getElementById('ritual')



function color() {
 alert('Brown')
}

function place() {
  alert('Bathtub')
}

function ritual() {
  alert('Web-spinning')
}

colorbtn.addEventListener('click', color);
placebtn.addEventListener('click', place);
ritualbtn.addEventListener('click', ritual);