var lista = []
var fim = document.getElementById('final')
fim.addEventListener("click", (event) => {
    finalizar()
})
function adicionar() {
    var inp = document.getElementById("inum")
    var select = document.getElementById("valores")
    var input = Number(inp.value)
    

    if (input == 0) {
        window.alert("VALOR INVÁLIDO, SOMENTE NÚMEROS DE 1 A 100")
    } else if (input > 0 && input < 101) {
        if (lista.indexOf(input) == -1) {
            var opt = document.createElement('option')
            opt.text = `O valor ${input} foi adicionado!`
            opt.value = `V${input}`
            select.appendChild(opt)
            lista.push(input)
        } else {
            window.alert("Ja tem na lista")
        }


    } else {
        window.alert("VALOR INVÁLIDO, SOMENTE NÚMEROS DE 1 A 100")
    }
    inp.value = ''
    inp.focus()

}

function finalizar() {
    var resposta = document.getElementById("res")
    var crescente = lista.sort(function(a, b){return a-b})
    var soma = 0

    for(var i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    console.log(lista.length)
    resposta.innerHTML = 
    `<p>Ao todo, temos ${lista.length} números cadastrados.</p>
    <p>O maior valor informado é ${crescente.slice(-1)[0]}</p>
    <p>O menor valor informado é ${crescente[0]}</p>
    <p>Somando todos os valores, temos ${soma}</p>
    <p>A média dos valores é ${soma / lista.length}</p>
    `
}
