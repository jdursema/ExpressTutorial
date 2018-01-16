const button = document.getElementById('btn')



const saySomething = (event) => {
  event.preventDefault()
  console.log('hi')
}

button.addEventListener('click', saySomething)