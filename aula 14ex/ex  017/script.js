function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('tab')
    if(num.value.length == 0){
        alert('ERROR - Digite um número valido!')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        do{
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }while(c <= 10)
    }
}