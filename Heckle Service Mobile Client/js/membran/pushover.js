function Versenden(nachricht, bei_Erfolg, bei_Misserfolg) {
    var appToken = "ChAoZLivWr6o1QhyEu64zwM9KV6hgH";
    var userKey =  "2xvMY59qr2pnu3U1bGeHTAZnX8Zj5R";
    
    var notification = encodeURI("token=" + appToken + "&user=" + userKey + "&message=" + nachricht);
    
    $.ajax({
        type: "POST", 
        url: "https://api.pushover.net/1/messages.json",
        contentType: "application/x-www-form-urlencoded", 
        data: notification,
        dataType: "json",
        
        success: function () { 
            bei_Erfolg(nachricht); 
        },
        
        error: function (xhr, status, errorMsg) { 
            var explanation = "";
            if (xhr.responseText.charAt(0) == "{") { 
                explanation = ", " + jQuery.parseJSON(xhr.responseText).errors[0];
            }
            bei_Misserfolg("Fehlercode " + xhr.status + explanation);
        }
    });    
}