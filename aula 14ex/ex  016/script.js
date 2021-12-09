function contar(){
  let inicio = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')
  if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    alert('ERROR - Faltam dados!')
  }else{
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    res.innerHTML = 'Contando: <br>'
    if(p <= 0){
      alert('ERROR - Passo inválido! Alterando passo para 1')
      p = 1
    }
    if(i<=f){
      for(c=i;c<=f;c+=p){
        res.innerHTML += `\u{1F449} ${c} `
    }
    }else{
      for(c=i;c>=f;c-=p)
        res.innerHTML += `\u{1F449} ${c} `
    }
    res.innerHTML += `\u{1F3C1}`
  }
}