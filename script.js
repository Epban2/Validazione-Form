function Modulo() {
    var nome = document.modulo.nome.value;
    var cognome = document.modulo.cognome.value;
    var indirizzo = document.modulo.indirizzo.value;
    var citta = document.modulo.citta.options[document.modulo.citta.selectedIndex].value;
    var telefono = document.modulo.telefono.value;

    if ((nome == "") || (nome == "undefined")) {
        alert("Il campo Nome è obbligatorio.");
        document.modulo.nome.focus();
        return false;
    }
    else if ((cognome == "") || (cognome == "undefined")) {
        alert("Il campo Cognome è obbligatorio.");
        document.modulo.cognome.focus();
        return false;
    }
    else if ((citta == "") || (citta == "undefined")) {
        alert("Il campo Città è obbligatorio.");
        document.modulo.citta.focus();
        return false;
    }
    //Effettua il controllo sul campo INDIRIZZO
    else if ((indirizzo == "") || (indirizzo == "undefined")) {
        alert("Il campo Indirizzo è obbligatorio.");
        document.modulo.indirizzo.focus();
        return false;
    }
    //Effettua il controllo sul campo TELEFONO
    else if ((isNaN(telefono)) || (telefono == "") || (telefono == "undefined")) {
        alert("Il campo Telefono è numerico ed obbligatorio.");
        document.modulo.telefono.value = "";
        document.modulo.telefono.focus();
        return false;
    }

        document.modulo.submit();
}