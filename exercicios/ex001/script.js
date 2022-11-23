function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

if(hora>=0 && hora<12){
    img.src = 'fotomanha.png'
    msg.innerHTML = `Agora são ${hora} horas.<br><strong>BOM DIA</strong>`
    document.body.style.background = '#e2cd9f'
}else if(hora >= 12 && hora <= 18){
    img.src = 'fototarde.png'
    document.body.style.background = '#ad4d20'
    msg.innerHTML = `Agora são ${hora} horas.<br><strong>BOA TARDE</strong>`
}else{
    img.src = 'fotonoite.png'
    document.body.style.background = '#1f0d0d'
    msg.innerHTML = `Agora são ${hora} horas.<br><strong>BOA NOITE</strong>`
}
}
