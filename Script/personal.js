//this is a script to greet users who visit my online cv
var Welcome = function() {
        var Today = new Date();
        var hourNow = Today.getHours();
        var greeting;

        if (hourNow >= 18) {
            greeting = "Hi Good evening";
        } else if (hourNow >= 12) {
            greeting = "hello Good afternoon";
        } else if (hourNow >= 6) {
            greeting = "Good morning";
        } else if (hourNow >= 00) {
            greeting = "isn't it too late to be stalking";
        } else {
            greeting = "Welcome";
        }
        return greeting;
    }
    //this is for writing on the document object
    //this is the skill part of my html file
document.getElementById("sk1").innerHTML = "90%";
document.getElementById("sk2").innerHTML = "85%";
document.getElementById("sk3").innerHTML = "50%";
document.getElementById("sk4").innerHTML = "80%";
document.getElementById("sk5").innerHTML = "75%";
document.getElementById("sk6").innerHTML = "80%";
document.getElementById("welcome").innerHTML = Welcome();