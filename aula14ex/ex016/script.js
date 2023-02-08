function contar(){
    var inicio = window.document.getElementById("txtinicio")
    var fim = window.document.getElementById("txtfim")
    var passo = window.document.getElementById("txtpasso")
    var resultado = window.document.getElementById("resultado")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML= 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
        

    } else{
        resultado.innerHTML = 'Contando: <br' 
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            for(var c = i; c <= f; c += p){
                resultado.innerHTML += ` ${c} \u{1F449}`
        }
        resultado.innerHTML += `\u{1F3C1}`
        
        } else{
            for(var c = i; c >= f; c -= p){
                resultado.innerHTML += `${c} \u{1F449}`

            }
            resultado.innerHTML += `\u{1F3C1}`
        }
   

   }
    

}