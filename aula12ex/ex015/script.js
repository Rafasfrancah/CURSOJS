function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var resultado = window.document.getElementById('resultado')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO!] Verifique os dados e tente novamente!")
    } else{ 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src','crianca.homem.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src','jovem.homem.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src','adulto.homem.png')          
            }else{
               // Idoso
               img.setAttribute('src','idoso.homem.png') 
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src','crianca.mulher.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src','jovem.mulher.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src','adulto.mulher.png')          
            }else{
               // Idoso
               img.setAttribute('src','idoso.mulher.png') 
            }
        }
        resultado.style.textAlign = "center"
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}