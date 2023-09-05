function contar() {
    var res = document.getElementById('res')
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = "Impossível Contar"
        window.alert('ERRO, FALTAM DADOS!')
    } else {
        res.innerHTML = 'Contando: <br>'
        f = Number(fim)
        ini = Number(inicio)
        pas = Number(passo)
        var i = ini
        if (pas <= 0) {
            window.alert('Passo Inválido! Considerando passo = 1')
            pas = 1
        }
        // Decrescente
        if (ini > f) {
            while (i >= f) {
                res.innerHTML += `👉${i}`
                i -= pas
            }
        // Crescente
        } else {
            while (i <= f) {
                res.innerHTML += `👉${i}`
                i += pas
            }
        }


    }





}