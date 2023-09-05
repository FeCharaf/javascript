function verificarIdade() {
    var ano = document.getElementById('idade').value
    var sexo = document.getElementsByName('sexo')
    var res = document.getElementById('res')
    var genero = ""
    if (sexo[0].checked) {
        genero = "Masculino"
    } else {
        genero = "Feminino"
    }

    res.innerHTML = `O seu ano de nascimento é ${ano} e o seu sexo é ${genero}`
}


