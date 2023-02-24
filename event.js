function welcome() {
  alert('Halo guys semuanya')
  const contents = document.querySelector('.contents')
  contents.removeAttribute('hidden')
}

document.body.onload = welcome

function increment() {
  document.getElementById('count').innerText++

  if (document.getElementById('count').innerText == 5) {
    const hiddenMessage = document.createElement('h4')
    hiddenMessage.innerText = 'Selamat, sudah 5 kali klik'

    const image = document.createElement('img')
    image.setAttribute('src', 'https://i.ibb.co/0V49VRZ/catto.jpg')

    const contents = document.querySelector('.contents')
    contents.appendChild(hiddenMessage).appendChild(image)
  }
}

document.getElementById('incrementButton').onclick = increment

