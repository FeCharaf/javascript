function tabuada() {
    var seltab = document.getElementById('seltab')
    var input = document.getElementById('inum')
    var inp = Number(input.value)
    seltab.innerHTML = " "

    if (inp == 0) {
        window.alert("Digite um valor válido")
    } else {
        for (var c = 1; c <= 10; c++) {  
            var opt = document.createElement('option')
            opt.text = `${inp} x ${c} = ${c*inp}`
            opt.value = `v${c}`
            seltab.appendChild(opt)
        }
    }
}