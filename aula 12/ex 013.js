var agora = new Date()
var hora = agora.getHours()
if (hora >= 00 && hora <= 12) {
    console.log(`Bom Dia`)
}else if (hora <= 18){
        console.log(`Boa Tarde`)
    }else{
        console.log(`Boa Noite`)
    }
console.log(`Agora são ${hora} horas`)