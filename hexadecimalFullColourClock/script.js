
//Establish the colours straight away
myTimer();

//Secure changes every second 
setInterval(myTimer, 1000);



function myTimer() {
	
//get Hours : Minutes : Seconds
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


	
// Get numbers and letters for Hexadecimal colours

	var a, b, c, d, e, f;


	var kx = k * 255 / 23;
	var lx = l * 255 / 59;
	var mx = m * 255 / 59;


//For the background colour
	var k1 = parseInt(kx / 16);
	var k2 = parseInt(kx - (k1 * 16));

//For the text colour (TEXT COLOUR IS INVERTED)
	var r1 = k1;
	var r2 = k2;
	
//For the background colour	
	if(k1 === 10) {k1 = 'a'};
	if(k1 === 11) {k1 = 'b'};
	if(k1 === 12) {k1 = 'c'};
	if(k1 === 13) {k1 = 'd'};
	if(k1 === 14) {k1 = 'e'};
	if(k1 === 15) {k1 = 'f'};

	if(k2 === 10) {k2 = 'a'};
	if(k2 === 11) {k2 = 'b'};
	if(k2 === 12) {k2 = 'c'};
	if(k2 === 13) {k2 = 'd'};
	if(k2 === 14) {k2 = 'e'};
	if(k2 === 15) {k2 = 'f'};


//For the background colour
	var l1 = parseInt(lx / 16);
	var l2 = parseInt(lx - (l1 * 16));

//For the text colour
	var s1 = l1;
	var s2 = l2;

//For the background colour
	if(l1 === 10) {l1 = 'a'};
	if(l1 === 11) {l1 = 'b'};
	if(l1 === 12) {l1 = 'c'};
	if(l1 === 13) {l1 = 'd'};
	if(l1 === 14) {l1 = 'e'};
	if(l1 === 15) {l1 = 'f'};

	if(l2 === 10) {l2 = 'a'};
	if(l2 === 11) {l2 = 'b'};
	if(l2 === 12) {l2 = 'c'};
	if(l2 === 13) {l2 = 'd'};
	if(l2 === 14) {l2 = 'e'};
	if(l2 === 15) {l2 = 'f'};


//For the background colour
	var m1 = parseInt(mx / 16);
	var m2 = parseInt(mx - (m1 * 16));
	
//For the text colour
	var t1 = m1;
	var t2 = m2;

//For the background colour
	if(m1 === 10) {m1 = 'a'};
	if(m1 === 11) {m1 = 'b'};
	if(m1 === 12) {m1 = 'c'};
	if(m1 === 13) {m1 = 'd'};
	if(m1 === 14) {m1 = 'e'};
	if(m1 === 15) {m1 = 'f'};

	if(m2 === 10) {m2 = 'a'};
	if(m2 === 11) {m2 = 'b'};
	if(m2 === 12) {m2 = 'c'};
	if(m2 === 13) {m2 = 'd'};
	if(m2 === 14) {m2 = 'e'};
	if(m2 === 15) {m2 = 'f'};
	
	

//Define Background colour

	var color = "#" + k1 + k2 + l1 + l2 + m1 + m2;

	document.body.style.backgroundColor = color;



//Express Time and Background Colour in numbers and letters on the page 

	document.getElementById("hours").innerHTML = "Time:  " + ko;
	document.getElementById("minutes").innerHTML = " : " + lo;
	document.getElementById("seconds").innerHTML = " : " + mo;

	document.getElementById("r1").innerHTML = "Background Colour:  #" + k1;
	document.getElementById("r2").innerHTML = k2;
	document.getElementById("g1").innerHTML = l1;
	document.getElementById("g2").innerHTML = l2;
	document.getElementById("b1").innerHTML = m1;
	document.getElementById("b2").innerHTML = m2;



	
//Define Text colour

	var r1y = 15 - r1;
	var r2y = 15 - r2;
	var s1y = 15 - s1;
	var s2y = 15 - s2;
	var t1y = 15 - t1;
	var t2y = 15 - t2;

	if(r1y === 10) {r1y = 'a'};
	if(r1y === 11) {r1y = 'b'};
	if(r1y === 12) {r1y = 'c'};
	if(r1y === 13) {r1y = 'd'};
	if(r1y === 14) {r1y = 'e'};
	if(r1y === 15) {r1y = 'f'};

	if(r2y === 10) {r2y = 'a'};
	if(r2y === 11) {r2y = 'b'};
	if(r2y === 12) {r2y = 'c'};
	if(r2y === 13) {r2y = 'd'};
	if(r2y === 14) {r2y = 'e'};
	if(r2y === 15) {r2y = 'f'};

	if(s1y === 10) {s1y = 'a'};
	if(s1y === 11) {s1y = 'b'};
	if(s1y === 12) {s1y = 'c'};
	if(s1y === 13) {s1y = 'd'};
	if(s1y === 14) {s1y = 'e'};
	if(s1y === 15) {s1y = 'f'};

	if(s2y === 10) {s2y = 'a'};
	if(s2y === 11) {s2y = 'b'};
	if(s2y === 12) {s2y = 'c'};
	if(s2y === 13) {s2y = 'd'};
	if(s2y === 14) {s2y = 'e'};
	if(s2y === 15) {s2y = 'f'};

	if(t1y === 10) {t1y = 'a'};
	if(t1y === 11) {t1y = 'b'};
	if(t1y === 12) {t1y = 'c'};
	if(t1y === 13) {t1y = 'd'};
	if(t1y === 14) {t1y = 'e'};
	if(t1y === 15) {t1y = 'f'};

	if(t2y === 10) {t2y = 'a'};
	if(t2y === 11) {t2y = 'b'};
	if(t2y === 12) {t2y = 'c'};
	if(t2y === 13) {t2y = 'd'};
	if(t2y === 14) {t2y = 'e'};
	if(t2y === 15) {t2y = 'f'};




//Define Text colour
	
	var textColor = '#' + r1y + r2y + s1y + s2y + t1y + t2y;


	orange();
	
	//For the case whan the colours of both the Background and the Text coinside


	function orange()
		{
		if(k === 12 && l > 26 && l < 33 && m > 19 && m < 41)
			{	

				textColor = "orange";	

			}


		else if(k === 11 && l > 26 && l < 33 && m > 19 && m < 41)	
			{	

				textColor = "orange";	

			}


		else
			{
				textColor = '#' + r1y + r2y + s1y + s2y + t1y + t2y;
			}
		}

	

//Express Time and Text Colour in numbers and letters on the page 
	
	document.getElementById("r1t").innerHTML = "Text Colour:  #" + r1y;
	document.getElementById("r2t").innerHTML = r2y;
	document.getElementById("g1t").innerHTML = s1y;
	document.getElementById("g2t").innerHTML = s2y;
	document.getElementById("b1t").innerHTML = t1y;
	document.getElementById("b2t").innerHTML = t2y;
	

	//Giving the Text the colour 

	document.querySelector("#hours").style.color = textColor;
	document.querySelector("#minutes").style.color = textColor;
	document.querySelector("#seconds").style.color = textColor;

	document.querySelector("#r1").style.color = textColor;
	document.querySelector("#r2").style.color = textColor;
	document.querySelector("#g1").style.color = textColor;
	document.querySelector("#g2").style.color = textColor;
	document.querySelector("#b1").style.color = textColor;
	document.querySelector("#b2").style.color = textColor;

	document.querySelector("#r1t").style.color = textColor;
	document.querySelector("#r2t").style.color = textColor;
	document.querySelector("#g1t").style.color = textColor;
	document.querySelector("#g2t").style.color = textColor;
	document.querySelector("#b1t").style.color = textColor;
	document.querySelector("#b2t").style.color = textColor;


	document.querySelector("#message").style.color = textColor;




}







