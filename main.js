var world = document.querySelector('#world');
var worldTwo = document.querySelector('#worldTwo');
var timelines = document.querySelector("#timelines");
var rotationAngle = 360 / (60 * 60 * 24); // 360 degrees divided by seconds in a day
var prefixes = ['webkitTransform', 'MozTransform', 'msTransform', 'OTransform', 'transform'];

function updateMap(date) {
    const rotationMultiplier = (date.getUTCHours() * 60 * 60) + (date.getUTCMinutes() * 60) + date.getUTCSeconds(); //Seconds since the start of the day.
    const rotationString = (rotationAngle * rotationMultiplier) + 180;
    const rotString = 'rotate(' + rotationString + 'deg)';
    prefixes.forEach(function (el) {
        world.style[el] = rotString;
        worldTwo.style[el] = rotString;
    });
}

function updateFromField() {
    const text = document.getElementById('t').value;
    location.hash = text.replaceAll(' ', '_');
    updateMap(new Date(text));
}

var text = location.hash.replace(/^#/, '').replaceAll('_', ' ');
if (text) {
    document.getElementById('t').value = text;
} else {
    document.getElementById('t').value = new Date().toString();
}
updateFromField();

function toggleTimeLines() {
    if (timelines.style["display"] === "none") {
        timelines.style["display"] = "block";
    } else {
        timelines.style["display"] = "none";
    }
}

function toggleWorldTwo() {
    if (worldTwo.style["display"] === "none") {
        worldTwo.style["display"] = "block";
    } else {
        worldTwo.style["display"] = "none";
    }
}