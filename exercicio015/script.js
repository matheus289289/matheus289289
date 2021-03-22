function calcular(){
    var img = window.document.getElementById('imagem')
    var peso1 = window.document.getElementById('peso')
    var altura1 = window.document.getElementById('altura')
    var res = window.document.getElementById('res')
    var P = Number(peso1.value)
    var A = Number(altura1.value)
    var r = P / (A*A)
    var resultado = r.toFixed(1)
    res.innerHTML = `O seu IMC é <strong>${resultado}</strong> kg/m².`
    if (resultado < 18.5){
        img.src = 'abaixodopeso.jpg'
    }if (resultado >= 18.5 && resultado <= 24.9){
        img.src = 'pesonormal.jpg'
    }else if (resultado >= 25 && resultado <= 29.9){
        img.src = 'sobrepeso.jpg'
    }else if (resultado >= 30){
        img.src = 'obesidade.jpg'
    }
}