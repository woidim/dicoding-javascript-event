const changeCaption = new Event('changeCaption')

window.addEventListener('load', function () {
  const tombol = document.getElementById('tombol')
  tombol.addEventListener('changeCaption', customEventHendler)
  tombol.addEventListener('click', function () {
    tombol.dispatchEvent(changeCaption)
  })
})

function customEventHendler(ev) {
  console.log('event' + ev.type + 'telah dijalankan')
  const caption = document.getElementById('caption')
  caption.innerText = 'anda telah membangkitkan custom event'
}
