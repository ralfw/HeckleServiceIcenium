function Versenden(nachricht, bei_Erfolg, bei_Misserfolg) {   
    $.ajax({
        type: "POST", 
        url: "http://heckleservice.apphb.com/api/1/heckles",
        contentType: "text/plain", 
        data: nachricht,
        
        success: function () { 
            bei_Erfolg(nachricht); 
        },
        
        error: function (xhr, status, errorMsg) { 
            bei_Misserfolg("Fehlercode " + xhr.status);
        }
    });    
}
