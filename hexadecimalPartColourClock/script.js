
myTimer();


setInterval(myTimer, 1000);


function myTimer() {
	var z = new Date();

	var k = z.getHours();
	var ko;
	k < 10 ?  ko = "0" + k : ko = k;

	var l = z.getMinutes();
	var lo;
	l < 10 ?  lo = "0" + l : lo = l;

	var m = z.getSeconds();
	var mo;
	m < 10 ?  mo = "0" + m : mo = m;


	document.getElementById("hours").innerHTML = ko;
	document.getElementById("minutes").innerHTML = lo;
	document.getElementById("seconds").innerHTML = mo;

	document.getElementById("r").innerHTML = ko;
	document.getElementById("g").innerHTML = lo;
	document.getElementById("b").innerHTML = mo;

	var color = "#" + ko + lo + mo;

	document.body.style.backgroundColor = color;
}
