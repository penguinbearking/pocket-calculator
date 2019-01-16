/* 

UNUSED CODE - COULD POSSIBLY BE USED IN FUTURE
____________________________________________________________

// GET INPUT FROM KEYS - PARTIALLY FINISHED

//Now is completely finished and integrated into actual code
//slight problems in it

	function keypressed() {
	 	var key = event.keyCode;
	 	console.log(key);

	 	if(key == 49) {
	 		nums('1')
	 	}
	 	else if(key == 50) {
	 		nums('2')
	 	}
	 	else if(key == 51) {
	 		nums('3')
	 	}
	 	else if(key == 52) {
	 		nums('4')
	 	}
	 	else if(key == 53) {
	 		nums('5')
	 	}
	 	else if(key == 54) {
	 		nums('6')
	 	}
	 	else if(key == 55) {
	 		nums('7')
	 	}
	 	else if(key == 56) {
	 		nums('8')
	 	}
	 	else if(key == 57) {
	 		nums('9')
	 	}
	 	else if(key == 58) {
	 		nums('0')
	 	}
	 	else if(key == 46) {
	 		nums('dec')
	 	}
	 	else if(key == 110) {
	 		nums('1')
	 	}
	 	else if(key == 115) {
	 		nums('1')
	 	}
	 	else if(key == 49) {
	 		nums('1')
	 	}
	 	else if(key == 50) {
	 		nums('2')
	 	}
	 	else if(key == 51) {
	 		nums('3')
	 	}
	 	else if(key == 52) {
	 		nums('4')
	 	}
	 	else if(key == 53) {
	 		nums('5')
	 	}
	 	else if(key == 54) {
	 		nums('6')
	 	}
	 	else if(key == 55) {
	 		nums('7')
	 	}
	 	else if(key == 56) {
	 		nums('8')
	 	}
	 	else if(key == 57) {
	 		nums('9')
	 	}
	 	else if(key == 58) {
	 		nums('0')
	 	}
	 	else if(key == 46) {
	 		nums('dec')
	 	}

	 }
____________________________________________________________

// COMMA FUNCITONS - NOT WORKING

	function commas(string) {

		if(string.includes(".") && string[string.length-1] != '.') {
		    var parts = string.split(".");
		    parts[parts.length-2] = parts[parts.length-2].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		    return parts.join(".");
		}
		else {
			string.length1 
			return string;
		}
	}


	function addCommasToNumber(num) {
	    let temparr = num.toString().split(".");
	    temparr[0] = temparr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	    return temparr.join(".");
	}
____________________________________________________________
 
 // PERCENTAGE - NOT WORKING

		let tempbool = false;
		let temparr = numstring.split("");
		let temparr2 = [];
		for(let i=temparr.length-1; i >= 0; i--) {
			if(temparr[i]=='+' || temparr[i]=='-' || temparr[i]=='*' || temparr[i]=='/' || temparr[i]=='(') {
				temparr2.push(temparr[i]);
				if(temparr2[temparr2.length-1] == ")") {
					temparr2.pop();
				}
				tempnum = Number(temparr2.join(""));
				tempnum = tempnum/100;
				let tempstr = tempnum.toString();
				temparr +=
				tempbool = true;
				break;
			}
		}

		if(tempbool == false) {
				temparr.splice(temparr.length-3, 0, '.');
				temparr.splice(temparr.length-3, 0, '0');
				tempbool = false;
		}

		numstring = temparr.join("");
____________________________________________________________

// SCIENTIFIC NOTATION - WORKING

		if(getLastNum(numstring).length > 9) {

					let temparr = [];
					let lastnum = getLastNum(numstring);
					console.log(lastnum);
					lastnum = Number(lastnum);
					let lastnumlen = lastnum.toString().length;
					let tempvar = (lastnum/10**(lastnumlen-1));
					let lastnumStr = tempvar.toString() + "e" + (lastnumlen-1);

					temparr = numstring.split("");
					for(let i=0; i<=lastnumlen-1; i++) {
						temparr.pop();
					}
					numstring = temparr.join("");
					numstring+=lastnumStr;


				}

*/
