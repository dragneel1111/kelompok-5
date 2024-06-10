// Kalkulator Teorema Binomial
document.getElementById('binomialButton').addEventListener('click', function() {
    var a = document.getElementById('binomialA').value;
    var b = document.getElementById('binomialB').value;
    var n = document.getElementById('binomialN').value;

    if (isNaN(n) || n < 0) {
        alert('n harus bilangan bulat non-negatif');
        return;
    }

    binomialExpansion(a, b, parseInt(n));
});

function binomialExpansion(a, b, n) {
    var tableBody = document.getElementById('binomialResult').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear previous results

    for (var k = 0; k <= n; k++) {
        var coefficient = comb(n, k);
        var term = coefficient + "(" + a + ")^" + (n - k) + "(" + b + ")^" + k;

        var row = tableBody.insertRow();
        row.insertCell(0).innerText = coefficient;
        row.insertCell(1).innerText = a + "^" + (n - k);
        row.insertCell(2).innerText = b + "^" + k;
        row.insertCell(3).innerText = term;
    }
}

// Kalkulator FPB dan KPK
document.getElementById('fpbKpkButton').addEventListener('click', function() {
    var a = document.getElementById('fpbKpkA').value;
    var b = document.getElementById('fpbKpkB').value;

    if (isNaN(a) || isNaN(b)) {
        alert('Masukkan bilangan yang valid.');
        return;
    }

    var fpb = calculateFPB(parseInt(a), parseInt(b));
    var kpk = calculateKPK(parseInt(a), parseInt(b));

    document.getElementById('fpbKpkResult').value = "FPB: " + fpb +"\n" + "KPK: " + kpk;
});

function calculateFPB(a, b) {
    while (b != 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function calculateKPK(a, b) {
    return (a * b) / calculateFPB(a, b);
}

// Kalkulator Permutasi dan Kombinasi
document.getElementById('permButton').addEventListener('click', function() {
    var n = document.getElementById('permCombN').value;
    var r = document.getElementById('permCombR').value;

    if (isNaN(n) || isNaN(r) || n < 0 || r < 0 || n < r) {
        alert('Masukkan bilangan bulat yang valid untuk n dan r.');
        return;
    }

    var perm = factorial(parseInt(n)) / factorial(parseInt(n) - parseInt(r));
    document.getElementById('permResult').value = "Permutasi: " + perm;
});

document.getElementById('combButton').addEventListener('click', function() {
    var n = document.getElementById('permCombN').value;
    var r = document.getElementById('permCombR').value;

    if (isNaN(n) || isNaN(r) || n < 0 || r < 0 || n < r) {
        alert('Masukkan bilangan bulat yang valid untuk n dan r.');
        return;
    }

    var comb = factorial(parseInt(n)) / (factorial(parseInt(r)) * factorial(parseInt(n) - parseInt(r)));
    document.getElementById('combResult').value = "Kombinasi: " + comb;
});

function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

function comb(n, k) {
    var result = 1;
    for (var i = 1; i <= k; i++) {
        result = result * (n - i + 1) / i;
    }
    return result;
}
