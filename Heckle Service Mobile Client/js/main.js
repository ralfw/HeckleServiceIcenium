function Bauen_und_binden() {
    var presenter = new Presenter();
    
    presenter.Zwischenruf = function(nachrichtenteile) {
        Zwischenrufen(nachrichtenteile, 
                      presenter.Nachricht_anzeigen, 
                      presenter.Fehler_anzeigen);
    }
}

// Wait for PhoneGap to load
document.addEventListener(
    "deviceready", 
    function() {
        navigator.splashscreen.hide();
        Bauen_und_binden();
    }, 
    false);

