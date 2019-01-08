//TEXT BOX ON CALC CAN ONLY HOLD 10 CHARACTERS WHEN TEXT IS 50PX and BOX IS 300PX WIDE//

var needNewline = false;
var numstring = '';
var mem = '0';
var decJustPressed = false;

function nums(number) {

	if(needNewline == true) {
		mem = numstring;
		numstring = '';
		needNewline = false;
	}

	if(decJustPressed == true && (number === '0' || number === '1' || number === '2' || 
		number === '3' || number === '4' || number === '5' || number === '6' || number === '7' || 
		number === '8' || number === '9')) {
		decJustPressed = false;
		temparr = numstring.split("");
		if(temparr[temparr.length-1] == '0' && temparr[temparr.length-2] == '.')
		temparr.splice(temparr.length-1, 1);

		numstring = temparr.join("");
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
		numstring = numstring + "0";
		decJustPressed = true;
	}
	else if(number == 'ans') {
		numstring = numstring + mem;
	}

	else {
		numstring = "Error"
	}
/*
	//Adds commas to numbers
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
*/

	document.getElementById("mathtxt").innerHTML = numstring;

}

function ops(optype) {

	if(optype=='add') {
		numstring = numstring + '+'
	}
	if(optype=='div') {
		numstring = numstring + '/'
	}
	if(optype=='mul') {
		numstring = numstring + '*'
	}
	if(optype=='sub') {
		numstring = numstring + '-'
	}
	if(optype=='neg') {
		let tempbool = false
		let temparr = numstring.split("");
		for(let i=temparr.length-1; i >= 0; i--) {
			if(temparr[i]=='+' || temparr[i]=='-' || temparr[i]=='*' || temparr[i]=='/') {
				temparr.splice(i+1, 0, '(');
				temparr.splice(i+2, 0, '-');
				temparr.push(')');
				tempbool = true;
				break;
			}

		}
		if(tempbool == false) {
				temparr.splice(0, 0, '-');
				temparr.splice(0, 0, '(');
				temparr.push(')');
				tempbool = false;
		}
		numstring = temparr.join("");
	}
	if(optype=='per') {
		let tempbool = false;
		let temparr = numstring.split("");
		for(let i=temparr.length-1; i >= 0; i--) {
			if(temparr[i]=='+' || temparr[i]=='-' || temparr[i]=='*' || temparr[i]=='/' || temparr[i]=='(') {
				temparr.splice(i+1, 0, '0');
				temparr.splice(i+2, 0, '.');
				tempbool = true;
				break;
			}
		}

		if(tempbool == false) {
				temparr.splice(0, 0, '.');
				temparr.splice(0, 0, '0');
				tempbool = false;
		}

		numstring = temparr.join("");
	}

	document.getElementById("mathtxt").innerHTML = numstring;

}


function evaluate(evaltype) {

	try {
		if(evaltype == 'enter') {
			evalnumber = eval(numstring);
		}
	}
	catch(err) {
		numstring = "Error"
	}


}

function addCommasToNumber(num) {
    let temparr = num.toString().split(".");
    temparr[0] = temparr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return temparr.join(".");
}

