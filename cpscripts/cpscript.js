// TEXT BOX ON CALC CAN ONLY HOLD 10 CHARACTERS WHEN TEXT IS 50PX and BOX IS 300PX WIDE //

// THINGS TO STILL ACCOMPLISH FOR REQUIREMENTS
// - change final answer to fit inside box
// - change decimal point to not effect both values
// - change header font size to match window size
// - 

/*

Error List

1: Solution after being evaluated by eval() is either infinity of undefined
2: When expression was evaluted by eval(), eval() threw an error
3: The previous answer was not a valid number (according to isNaN(Number(x)))
4: The button input did not match any of the valid if statements

*/


var needNewline = false;
var numstring = '';
var displayString = '';
var mem = 0;
var decJustPressed = false;
var txtboxwidth;
var txtsize;
var authinfoopen = true;
var displayNum = '';
var shiftdown = false;

function startup() {

	// let windowW = window.innerWidth;
	// let windowH = window.innerHeight;

	// if(windowW >= 885) {
	// 	document.getElementById("header-text").style.fontSize = "initial";
	// }
	// else if(windowW < 885){
	// 	document.getElementById("header-text").style.fontSize = "initial";
	// }	
}

function resized() {
	// let windowW = window.innerWidth;
	// let windowH = window.innerHeight;

	// if(windowW >= 885) {
	// 	document.getElementById("header-text").style.fontSize = "initial";
	// }
	// else if(windowW < 885){
	// 	document.getElementById("header-text").style.fontSize = "initial";
	// }	
}

function nums(number) {

	txtboxwidth = document.getElementById("mathtxt").offsetWidth;
	txtsize = parseFloat(window.getComputedStyle(document.getElementById("mathtxt"), null).getPropertyValue('font-size'));

	
	if(needNewline == true) {
		mem = numstring;
		numstring = '';
		needNewline = false;
	}




	
	if(displayNum.length <= (txtboxwidth*1.45)/(txtsize) || decJustPressed == true) {


		if(decJustPressed == true && (number === '1' || number === '2' || 
			number === '3' || number === '4' || number === '5' || number === '6' || number === '7' || 
			number === '8' || number === '9')) {
			decJustPressed = false;
			temparr = numstring.split("");
			if(temparr[temparr.length-1] == '0' && temparr[temparr.length-2] == '.') {
				temparr.splice(temparr.length-1, 1);
			}

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
			if(getLastNum(numstring).includes(".") == false || 
				numstring[numstring.length-1] == "*" || numstring[numstring.length-1] == "/"
				|| numstring[numstring.length-1] == "+" || numstring[numstring.length-1] == "-") {
				numstring = numstring + ".";
				numstring = numstring + "0";
				decJustPressed = true;
			}
		}
		else if(number == 'ans') {
			if(isNaN(Number(mem))) {
				numstring = numstring + mem;
			}
			else {
				numstring = "Error"
				console.log("3:" + mem);
			}
		}

		else {
			numstring = "Error"
			console.log("4:" + number);
		}

		
			displayNum = addCommas(getLastNum(numstring));
			//document.getElementById("mathtxt").innerHTML = getLastNum(addCommas(numstring));
			document.getElementById("mathtxt").innerHTML = displayNum;
	}

}

function ops(optype) {


	if(numstring[numstring.length-1] == "*" || numstring[numstring.length-1] == "/" || numstring[numstring.length-1] == "+" || numstring[numstring.length-1] == "-") {
		let temparr = numstring.split("");
		temparr.pop();
		numstring = temparr.join("");
	}

	if(numstring == "") {
		numstring+= mem
	}

	if(optype=='add') {
		numstring = numstring + '+'
		changeOpsButtonStyle("buttont1", 3);
	}
	else if(optype=='div') {
		numstring = numstring + '/'
		changeOpsButtonStyle("buttont1", 0);
	}
	else if(optype=='mul') {
		numstring = numstring + '*'
		changeOpsButtonStyle("buttont1", 1);
	}
	else if(optype=='sub') {
		numstring = numstring + '-'
		changeOpsButtonStyle("buttont1", 2);
	}
	else if(optype=='neg') {
		let tempbool = false
		let temparr = numstring.split("");
		for(let i=temparr.length-1; i >= 0; i--) {
			if(temparr[i] == '+') {
				temparr.splice(i, 1, '-')
				tempbool = true;
				break;
			}
			if((temparr[i] == '-') && (temparr[i-1] == '+' || temparr[i-1] == '-' || temparr[i-1] == '/' || temparr[i-1] == '*' || i == 0)) {
				temparr.splice(i, 1, "");
				tempbool = true;
				break;
			}
			else if(temparr[i] == '-') {
				temparr.splice(i, 1, '+')
				tempbool = true;
				break;
			}

			if(temparr[i]=='*' || temparr[i]=='/') {
				//temparr.splice(i+1, 0, '(');
				temparr.splice(i+1, 0, '-');
				//temparr.push(')');
				tempbool = true;
				break;
			}

		}
		if(tempbool == false) {
				temparr.splice(0, 0, '-');
				//temparr.splice(0, 0, '(');
				//temparr.push(')');
				tempbool = false;
		}
		numstring = temparr.join("");
	}
	else if(optype=='per') {
		let temparr = [];
		console.log(getLastNum(numstring));
		let lastnum = getLastNum(numstring);
		lastnum = Number(lastnum);
		let lastnumlen = lastnum.toString().length
		lastnum = lastnum/100;
		lastnum = lastnum.toString();

		temparr = numstring.split("");
		for(let i=0; i<=lastnumlen-1; i++) {
			temparr.pop();
		}
		numstring = temparr.join("");
		numstring+=lastnum;

		
	}

	else {
			numstring = "Error"
			console.log("4:" + optype);
	}

		//document.getElementById("mathtxt").innerHTML = getLastNum(addCommas(numstring));
		displayNum = addCommas(getLastNum(numstring));
		document.getElementById("mathtxt").innerHTML = displayNum;
}


function solve(type) {
	let showerror = false;



	if(type == 'enter') {

		if(numstring == '') {
			displayNum = mem;
			document.getElementById("mathtxt").innerHTML = displayNum;
			changeOpsButtonStyle("buttont1", -1);
			return;
		}

		try {
			evalnumber = eval(numstring);
			//evalnumber = evalnumber.toFixed(4).replace(/0{0,2}$/, "");
			displayNum = evalnumber.toString();
			displayNum = toScientificNot(displayNum);
			if(addCommas(displayNum).length <= (txtboxwidth*1.45)/(txtsize)) {
				let numsciarr = displayNum.split("e");
				for(let i=0; i<=addCommas(displayNum).length - ((txtboxwidth*1.45)/(txtsize) - 1); i++) {
					numsciarr[0].pop()
				}
				numstring = numsciarr.join("e")
			}
			
			if(evalnumber == Infinity || evalnumber == undefined || evalnumber == 'Infinity' || evalnumber == 'undefined') {
				displayNum = "Error";
				console.log("1:" + evalnumber);
				showerror = true;
			}	
		}
		catch(err) {
			displayNum = "Error";
			console.log("2:" + err)
			showerror = true;
		}

		displayNum = addCommas(displayNum);
		document.getElementById("mathtxt").innerHTML = displayNum;
		changeOpsButtonStyle("buttont1", -1);
		
		if(showerror == false) {
			mem=displayNum;
		}
			numstring = "";
			displayNum = "";
	}
	else if(type == 'clear') {
		numstring="";
		displayNum="";
		mem = "";
		document.getElementById("mathtxt").innerHTML = 0;
		changeOpsButtonStyle("buttont1", -1);
	}

	else {
			numstring = "Error"
			console.log("4:" + type);
	}
	
}

function addCommas(expression) {
	let zerocounter = 0;

	for(let n = getLastNum(expression).length-1; n>=0; n--) {
		if(getLastNum(expression).includes(".")) {
			if(getLastNum(expression)[n] == '.') {
				break;
			}
			else {
				zerocounter += 1;
			}
		}
	}


	let tempstr = '';
	let outputstr = '';
	for(i=0;i<=expression.length-1;i++) {
		if(isNaN(Number(expression[i])) == false || expression[i] == '.') {
			tempstr += expression[i];
			//console.log(expression[i] + " " + tempstr)
		}
		else {
			if(tempstr != '') {
				outputstr += Number(tempstr).toLocaleString(undefined, { maximumFractionDigits: 20, minimumFractionDigits: zerocounter });
				tempstr = '';
			}
			outputstr += expression[i];
			
		}
	}

	if(tempstr != '') {
		outputstr += Number(tempstr).toLocaleString(undefined, { maximumFractionDigits: 20, minimumFractionDigits: zerocounter });
	}
	
	return outputstr;

}


function getLastNum(expression) {
	let tempstr = '';
	let outstr = '';
	if(expression[expression.length-1] == '+' || expression[expression.length-1] == '-' || expression[expression.length-1] == '*' || expression[expression.length-1] == '/') {
		if(isNaN(Number(expression[expression.length-2])) == false) {
			let temparr = [];
			temparr = expression.split("");
			temparr.pop();
			expression = temparr.join("");
		}
	}

	for(let i=expression.length-1;i>=0;i--) {
		if(isNaN(Number(expression[i])) == false || expression[i] == '.') {
			tempstr = expression[i] + tempstr;
		}
		else {
			break;
		}
		
	}
		outstr = tempstr;
		return outstr;
}

function toScientificNot(expression) {
	if(getLastNum(expression).length > 9) {

		let temparr = [];
		let lastnum = getLastNum(expression);
		//console.log(lastnum);
		lastnum = Number(lastnum);
		let lastnumlen = lastnum.toString().length;
		let tempvar = (lastnum/10**(lastnumlen-1));
		let lastnumStr = tempvar.toString() + "e" + (lastnumlen-1);

		temparr = expression.split("");
		for(let i=0; i<=lastnumlen-1; i++) {
			temparr.pop();
		}
		expression = temparr.join("");
		expression+=lastnumStr;

		

	}

	return(expression);



}

function changeOpsButtonStyle(buttonclass, buttonclassnum) {
	numberOfEls = document.querySelectorAll("." + buttonclass).length;
	for(let i=0; i<=numberOfEls-1; i++) {
		changeElementStyle(null, buttonclass, i, "backgroundColor", "#555555")
	}
	changeElementStyle(null, buttonclass, buttonclassnum, "backgroundColor", "#444444")
}

function changeElementStyle(elementid, elementclass, classnum, domstyle, value) {

	if(domstyle == "backgroundColor") {

		if(elementid != null && domstyle != null && value != null) {
			document.getElementById(elementid).style.backgroundColor = value;
		}
		if(elementclass != null && classnum != null && domstyle != null && value != null) {
			try {
				document.getElementsByClassName(elementclass)[classnum].style.backgroundColor = value;
			}
			catch(err) {

			}
		}
	}
	

}


function goToFull() {
	window.location.href = './GraphingCalculator/graphcalculator.html';
}


function opencloseauthinfo() {
	if(authinfoopen == true) {

		var el = document.getElementById("showauthorinfo");   
  		var pos = 0;
  		var id = setInterval(frame, 1);
  		function frame() {
    		if (pos <= -162) {
      			clearInterval(id);
      			document.getElementById("openclosearrows").innerHTML = ">>";
    		} 
    		else {
      			pos-=6; 
      			el.style.left = pos + 'px'; 
    		}
  		}
		authinfoopen = false;
	}
	else if(authinfoopen == false) {

		var el = document.getElementById("showauthorinfo");   
  		var pos = -162;
  		var id = setInterval(frame, 1);
  		function frame() {
    		if (pos >= 0) {
      			clearInterval(id);
      			document.getElementById("openclosearrows").innerHTML = "<<";
    		} 
    		else {
      			pos+=6; 
      			el.style.left = pos + 'px'; 
    		}
  		}
		authinfoopen = true;
	}

}

function fitAnswer() {

}

function keypress() {
 	var key = event.keyCode;
 	console.log(key);

 	if(key == 49) {
 		nums('1');
 	}
 	else if(key == 50) {
 		nums('2');
 	}
 	else if(key == 51) {
 		nums('3');
 	}
 	else if(key == 52) {
 		nums('4');
 	}
 	else if(key == 53) {
 		nums('5');
 	}
 	else if(key == 54) {
 		nums('6');
 	}
 	else if(key == 55) {
 		nums('7');
 	}
 	else if(key == 56) {
 		nums('8');
 	}
 	else if(key == 57) {
 		nums('9');
 	}
 	else if(key == 48) {
 		nums('0');
 	}
 	else if(key == 46) {
 		nums('dec');
 	}
 	else if(key == 37) {
 		ops('per');
 	}
 	else if(key == 42) {
 		ops('mul');
 	}
 	else if(key == 43) {
 		ops('add');
 	}
 	else if(key == 45) {
 		ops('sub');
 	}
 	else if(key == 47) {
 		ops('div');
 	}
 	else if(key == 61 || key == 13) {
 		solve('enter');
 	}
 }

