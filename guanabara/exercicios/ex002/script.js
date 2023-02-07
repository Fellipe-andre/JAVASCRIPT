function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >=0 && idade <=10){
                //criança
                img.setAttribute('src','foto-bebe-m.png')
            }else if( idade < 18){
                //adolecente 
                img.setAttribute('src','foto-jovem-m.png')
            } else if(idade <= 60){
                //adulto
                img.setAttribute('src','foto-adulto-m.png')
            } else{
                //velho
                img.setAttribute('src','foto-idoso-m.png')
            }
        } else if(fsex[1].checked) { 
            gênero = 'Mulher'
            if(idade >=0 && idade <=10){
                //criança
                img.setAttribute('src','foto-bebe-f.png')
            }else if( idade < 18){
                //adolecente 
                img.setAttribute('src','foto-bebe-f.png')
            } else if(idade <= 60){
                //adulto
                img.setAttribute('src','foto-bebe-f.png')
            } else{
                //velha
                img.setAttribute('src','foto-bebe-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos`
        res.appendChild(img)
    }
}
    