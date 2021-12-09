function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById(`txtano`)
  var res = document.querySelector(`div#res`)
  if (fano.value == 0 || fano.value > ano) {
    window.alert(`[Error] Verifique os dados e tente novamente!`)
  } else {
    var fsex = document.getElementsByName(`radsex`)
    var idade = ano - Number(fano.value)
    var genero = ``
    var img = document.createElement(`img`)
    img.setAttribute(`id`, `foto`)
    if (fsex[0].checked) {
      genero = `Homem`
      if (idade >= 0 && idade <= 12) {
        img.setAttribute(`src`, `homembebe.png`)
      } else if (idade <= 21) {
        img.setAttribute(`src`, `homemjovem.png`)
      } else if (idade <= 59) {
        img.setAttribute(`src`, `homemadulto.png`)
      } else {
        img.setAttribute(`src`, `homemidoso.png`)
      }
    } else if (fsex[1].checked) {
      genero = `Mulher`
      if (idade >= 0 && idade <= 12) {
        img.setAttribute(`src`, `mulherbebe.png`)
      } else if (idade <= 21) {
        img.setAttribute(`src`, `mulherjovem.png`)
      } else if (idade <= 59) {
        img.setAttribute(`src`, `mulheradulta.png`)
      } else {
        img.setAttribute(`src`, `mulheridosa.png`)
      }
    }
    res.style.textAlign = `center`
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}
