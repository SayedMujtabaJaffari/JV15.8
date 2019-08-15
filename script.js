let input = document.getElementById("name");
var button = document.getElementById("button");

button.addEventListener("click", onbuttonclick)

function onbuttonclick() {
    alert("Hello " + input.value)
    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
}