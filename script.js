function Modulo() {
    var nome =document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var indirizzo = document.getElementById("indirizzo").value;
    var citta = document.getElementById("citta").value;
    var telefono =document.getElementById("telefono").value;
    var nascita = document.getElementById("nascita").value;

    if ((nome == "") || (nome == "undefined")) {
        alert("Completare il campo nome.");
        document.getElementById("nome").focus;
        return false;
    }
    else if ((cognome == "") || (cognome == "undefined")) {
        alert("Completare il campo cognome.");
        document.getElementById("cognome").focus;
        return false;
    }
    else if (nascita == "") {
        alert("La data di nascita è obbligatoria");
        document.getElementById("nascita").focus;
        return false;
    }
    else if ((citta == "") || (citta == "undefined")) {
        alert("Il campo Città è obbligatorio.");
        document.getElementById("citta").focus;
        return false;
    }
    else if ((indirizzo == "") || (indirizzo == "undefined")) {
        alert("Il campo Indirizzo è obbligatorio.");
        document.getElementById("indirizzo").focus;
        return false;
    }
    else if ((isNaN(telefono)) || (telefono == "") || (telefono == "undefined")) {
        document.getElementById("alert").innerHTML="Il campo Telefono è numerico ed obbligatorio.";
        document.getElementById("telefono").focus;
        return false;
    }
    document.modulo.submit();
    
}