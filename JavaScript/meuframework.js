function calculaMedia() {
    var total = null;
    for (x = 0; typeof arguments[x] === 'number'; x++) {

        total += arguments[x];
    }

    return (total / arguments.length).toFixed(2);

}

function sortear(n) {
    var _n = n || 1;
    var nSorteado = Math.random();
    nSorteado *= _n;
    nSorteado = Math.floor(nSorteado);
    return nSorteado;
}