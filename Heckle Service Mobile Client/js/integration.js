function Integrieren() {
    var presenter = new Presenter();
    presenter.Zwischenruf = function(nachrichtenteile) {
        Zwischenrufen(nachrichtenteile, 
                      presenter.Nachricht_anzeigen, 
                      presenter.Fehler_anzeigen);
    }
}

function Zwischenrufen(nachrichtenteile, bei_Erfolg, bei_Misserfolg) {
    var nachricht = Nachricht_formulieren(nachrichtenteile);
    Versenden(nachricht, bei_Erfolg, bei_Misserfolg);
}
