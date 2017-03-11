"use strict";
$('document').ready(function () {
    $('.esegui').click(function () {
        var n = parseInt($('.numero').val());
        var op = parseInt($('.operazione').val());
        var ris1, ris2;
        switch (op) {
            case 0:
                ris1 = esempio(n);
                break;
            case 1:
                ris1 = dispari(n);
                break;
            case 2:
                ris1 = multipli8(n);
                break;
            case 3:
                ris1 = fibonacci(n);
                break;
            case 4:
                ris2 = fattoriale(n);
                break;
            case 5:
                ris2 = casuali(n);
                break;
            case 6:
                ris2 = media(n);
                break;
            case 7:
                ris1 = primi(n);
                break;
            case 8:
                ris1 = ordinamento(n);
                break;
            default:
                errore("Errore n. 1");
                break;
        }
        if (ris1 != null && ris2 == null)
            stampaArray(ris1);
        else
        if (ris1 == null && ris2 != null)
            stampaNumero(ris2);
        else
            errore("Errore n. 2")
    });
});


function errore(err) {
    alert(err);
    console.log(err);
}

function stampaArray(v) {
    if (v.length > 0) {
        var str = '<table class="table table-hover">' +
            '<tr>' +
            '<th>Indice (da 1 a N)</th>' +
            '<th>Numero</th>' +
            '</tr>';
        for (let i = 0; i < v.length; i++)
            str += '<tr><td>' + (i + 1) + '</td><td>' + v[i] + '</td></tr>';
        str += '</table>';
    } else {
        str = '<div class="alert alert-danger">L\'array è vuoto!</div>';
    }
    $('.risultati').html(str);
}

function stampaNumero(n) {
    $('.risultati').html('<div class="alert alert-success">Risultato: ' + n + '</div>');
}