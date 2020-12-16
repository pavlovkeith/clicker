var a = 0;
var add = function(valueToAdd) {
    a += valueToAdd;
    document.getElementById('Value').innerHTML = a;
}

var reset = function() {
	a = 0;
	document.getElementById('Value').innerHTML = 0;
}

var addButton = document.querySelector("#add");
var resetButton = document.querySelector("#reset");

addButton.addEventListener("click", function() {
	add(1);
})

resetButton.addEventListener("click", function() {
	reset();
})