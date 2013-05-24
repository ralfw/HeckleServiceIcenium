function Integrieren() {
    var view = new View();
    view.Zwischenruf = function(nachrichtenteile) {
        Zwischenrufen(nachrichtenteile, view.Nachricht_anzeigen, view.Fehler_anzeigen);
    }
}

function Zwischenrufen(nachrichtenteile, bei_Erfolg, bei_Misserfolg) {
    var nachricht = Nachricht_formulieren(nachrichtenteile);
    Versenden(nachricht, bei_Erfolg, bei_Misserfolg);
}
