let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumber(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        alert('ERROR - Números inválido ou já existente na lista!')
    }
    num.value= ''
    num.focus()
}

function finalizar(){
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores){
        soma += valores[pos]
        if(valores[pos] > maior){
            maior = valores[pos]
        }
        if(valores[pos] < menor)[
            menor = valores[pos]
        ]
    }
    media = soma/tot
    res.innerHTML = ''
    res.innerHTML += `<p>A lista possui ${tot} números</p>`
    res.innerHTML += `<p>O maior número é ${maior}</p>`
    res.innerHTML += `<p>O menor número é ${menor}</p>`
    res.innerHTML += `<p>A soma dos números é ${soma}</p>`
    res.innerHTML += `<p>A média dos números é ${media}</p>`
}