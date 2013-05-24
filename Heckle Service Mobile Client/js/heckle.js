// JavaScript Document
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
    navigator.splashscreen.hide();
}
  
//======================= Zwischenrufen =======================//


function Initialisieren() {
    $('#pageZwischenrufen').live('pagebeforeshow', function() {
        $("#txtNachricht")[0].value = "";
        
        $('#paneKomponieren')[0].style.display = 'block';
        $('#paneQuittung')[0].style.display = 'none';
    });
}


function Versenden() {
    var nachricht = $("#txtNachricht")[0].value + " -- " + $('#txtName')[0].value + " -- " + $('#txtEmail')[0].value;
    
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
            $('#txtNachrichtVersandt')[0].innerHTML = nachricht;
    
            $('#paneKomponieren')[0].style.display = 'none';
            $('#paneQuittung')[0].style.display = 'block';
        },
        
        error: function (xhr, status, errorMsg) { 
            var explanation = "";
            if (xhr.responseText.charAt(0) == "{") { 
                explanation = ", " + jQuery.parseJSON(xhr.responseText).errors[0];
            }
            alert("Fehler beim Zwischenrufen! Fehlercode: " + xhr.status + explanation);
        }
    });    
}

