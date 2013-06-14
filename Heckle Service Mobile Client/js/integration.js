function Zwischenrufen(nachrichtenteile, bei_Erfolg, bei_Misserfolg) {
    var nachricht = Nachricht_formulieren(nachrichtenteile);
    Versenden(nachricht, bei_Erfolg, bei_Misserfolg);
}
