//TEXT BOX ON CALC CAN ONLY HOLD 10 CHARACTERS WHEN TEXT IS 50PX and BOX IS 300PX WIDE//

var numstring = '';
var mem = '0';

function num(number) {

	if(needNewline == true) {
		mem = numstring;
		numstring = '';
		needNewline = false;
	}

	if(number == '1') {
		numstring = numstring + "1";
	}
	else if(number == '2') {
		numstring = numstring + "2";
	}
	else if(number == '3') {
		numstring = numstring + "3";
	}
	else if(number == '4') {
		numstring = numstring + "4";
	}
	else if(number == '5') {
		numstring = numstring + "5";
	}
	else if(number == '6') {
		numstring = numstring + "6";
	}
	else if(number == '7') {
		numstring = numstring + "7";
	}
	else if(number == '8') {
		numstring = numstring + "8";
	}
	else if(number == '9') {
		numstring = numstring + "9";
	}
	else if(number == '0') {
		numstring = numstring + "0";
	}
	else if(number == 'dec') {
		numstring = numstring + ".";
	}
	else if(number == 'ans') {
		numstring = numstring + mem;
	}

	else {
		numstring = "Error"
	}

	//Checks that the 
	for (let i=numstring.length-1; i>=0; i++) {
		let temparr
		if(numstring[i] == '+' || numstring[i] == '-' || numstring[i] == '*' || numstring[i] == '/') {
			break;
		}
		if(i%3 == 0) {
			temparr = numstring.split("");
			temparr.splice(numstring.length-1-i, 0, ',')
			numstring = '';
			for (let j=0; j<=temparr.length-1; j++) {
				numstring = numstring + temparr[j];
			}
		}
	}

	document.getElementById("mathtxt").innerHTML = numstring;

}