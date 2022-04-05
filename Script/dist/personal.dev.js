"use strict";

var Today = new Date();
var hourNow = Today.getHours();
var greeting;

if (hourNow >= 18) {
  greeting = "Hi Good evening";
} else if (hourNow >= 12) {
  greeting = "hello Good afternoon";
} else if (hourNow >= 6) {
  greeting = "Good morning";
} else {
  greeting = "Welcome";
}

document.write('<h2>' + greeting + '</h2>');