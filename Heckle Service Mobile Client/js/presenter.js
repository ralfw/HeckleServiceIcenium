function Presenter() {
    var self = this;

    
    $("#btnZwischenrufen")[0].onclick = function() {
        var nachrichtenteile = {
            text: $("#txtNachricht")[0].value,
            name: $('#txtName')[0].value,
            email: $('#txtEmail')[0].value
        }
        self.Zwischenruf(nachrichtenteile);
    }
    
    $("#btnNochmal")[0].onclick = function() {
        $("#txtNachricht")[0].value = "";
        
        $('#paneKomponieren')[0].style.display = 'block';
        $('#paneQuittung')[0].style.display = 'none';
    }
    
    
    // --- Operationen ---
    self.Nachricht_anzeigen = function(nachricht) {
        $('#txtNachrichtVersandt')[0].innerHTML = nachricht;
    
        $('#paneKomponieren')[0].style.display = 'none';
        $('#paneQuittung')[0].style.display = 'block';
    }
    
    self.Fehler_anzeigen = function(fehlermeldung) {
        alert("Fehler beim Zwischenrufen: " + fehlermeldung);
    }
    
    
    // --- Events ---
    self.Zwischenruf = null;
}
