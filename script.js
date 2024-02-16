function Modulo() {
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var indirizzo = document.getElementById("indirizzo").value;
    var citta = document.getElementById("citta").value;
    var telefono = document.getElementById("telefono").value;
    var nascita = document.getElementById("nascita").value;

    var regexNome = /^[a-zA-Z]+$/; //solamente lettere maiuscole e minuscole
    var regexCognome = /^[A-Za-z\s]+$/; //a differenza del nome contiene \s (spazio)
    var regexIndirizzo = /^[a-zA-Z0-9\s]+$/; //lettere, numeri, spazi (no punteggiatura)
    var regexTelefono = /^\d{10}$/; // solamente numeri, 10 cifre precise


    if (!regexNome.test(nome)) {
        document.getElementById("alert").innerHTML = "Correggere il campo nome!";
        document.getElementById("nome").focus;
        return false;
    }
    else if (!regexCognome.test(cognome)) {
        document.getElementById("alert").innerHTML = "Correggere il campo cognome!";
        document.getElementById("cognome").focus;
        return false;
    }
    else if (nascita == "") {
        document.getElementById("alert").innerHTML = "Correggere il campo nome!";
        document.getElementById("nascita").focus;
        return false;
    }
    else if (!regexIndirizzo.test(indirizzo)) {
        document.getElementById("alert").innerHTML = "Correggere il campo indirizzo!";
        document.getElementById("indirizzo").focus;
        return false;
    }
    else if ((citta == "") || (citta == "undefined")) {
        document.getElementById("alert").innerHTML = "Il campo città è obbligatorio!";
        document.getElementById("citta").focus;
        return false;
    }

    else if (!regexTelefono.test(telefono)) {
        document.getElementById("alert").innerHTML = "Correggere il numero di telefono (10 cifre)";
        document.getElementById("telefono").focus;
        return false;
    } else
        document.getElementById("alert").innerHTML = "I campi sono validi";
    document.modulo.submit();

}