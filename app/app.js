// Variable for Time & Day

var today = new Date();
var day = today.getDay();
var dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Today is : " + dayList[day] + ".");

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepend = (hour >= 12) ? " PM " : " AM ";

// Converts from 24-hour time to 12-hour time

hour = (hour >= 12) ? hour - 12 : hour;

// If else statements for time display
if (hour === 0 && prepend === " PM ") {
	if (minute === 0 && second === 0) {
		hour = 12;
		prepend = " Noon";
	} else {
		hour = 12;
		prepend = " PM";
	}
}

if (hour === 0 && prepend === " Am ") {
	if (minute === 0 && second === 0) {
		hour = 12;
		prepend = " Mionight";
	} else {
		hour = 12;
		prepend = " Am";
	}
}

// Displays current Day
document.getElementById("day").innerHTML= (" Today is " + dayList[day]);

// Displays current Time
document.getElementById("time").innerHTML= (" The current time is:  " + hour + prepend + " : " + minute + " : " + second);


// Function to scroll string left to right
function animate_string(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0];
    var text = textNode.data;

    setInterval(function() {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}

// Will make first word of each element bold
$('h5').each(function() {
    var pdata = $(this);
    pdata.html(pdata.text().replace(/(^\w+)/, '<strong>$1</strong>'));
});
// Function for a single click event
$("#btn").bind("click", function() {
    $("<p>This is a click Event</p>").appendTo("body");
});
// Function for a double click event
$("#btn").bind("dblclick", function() {
    $("<p>This is a double-click Event</p>").appendTo("body");
});
// Will change div background color when clicked
$(".color").on("click", function() {
    $(this).css("background", "dodgerblue");
});
// Variables for bubble sort
var a = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
// Function for bubblesort
function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] < a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

bubbleSort(a);
console.log(a)































