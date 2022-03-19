function calculaMedia() {
    var total = null;
    for (x = 0; typeof arguments[x] === 'number'; x++) {
        
        total += arguments[x];
    }

    return total / arguments.length;
    
} 