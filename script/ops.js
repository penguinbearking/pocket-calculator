

function getnums(number) {

	if(number==='0') {
		numarr0.push('0');
	}
	else if(number==='1') {
		numarr0.push('1');
		alert("1")	
	}
	else if(number==='2') {
		numarr0.push('2');
		alert("2")
	}
	else if(number==='3') {
		numarr0.push('3');
	}
	else if(number==='4') {
		numarr0.push('4');
	}
	else if(number==='5') {
		numarr0.push('5');
	}
	else if(number==='6') {
		numarr0.push('6');
	}
	else if(number==='7') {
		numarr0.push('7');
	}
	else if(number==='8') {
		numarr0.push('8');
	}
	else if(number==='9') {
		numarr0.push('9');	
	}
	else if(number==='.') {
		numarr0.push('.');
	}
	else if(number==='e') {
		numarr0.push(math.E);	
	}
	else if(number==='pi') {
		numarr0.push(math.PI);		
	}
	else if(number==='gr') {
		numarr0.push(math.phi);		
	}
	/*
	else if(number==='opar') {
		numarr0.push('(');	
	}
	else if(number==='cpar') {
		numarr0.push(')');
	}
	*/
	else {
		console.log("Oops . . . Something Went Wrong");
	}


	numstr = numstr0 + numarr0[numarr0.length-1];


	evalstatement(numstr)

}

function simpops(operation) {

	if(operation==='plus') {
		numarr0.push('+')

	}
	else if(operation==='min') {
		numarr0.push('-')
	}
	else if(operation==='mul') {
		numarr0.push('*')
	}
	else if(operation==='div') {
		numarr0.push('/')
	}
	else if(operation==='plusmin') {
		let tempstr = numarr0;
		for(let i=numarr0.length-1; i >= 0; i--) {
			if(numarr0[i]=='+' || numarr0[i]=='-' || numarr0[i]=='*' || numarr0[i]=='/') {
				numarr0.splice(i+1, 0, '(');
				numarr0.splice(i+2, 0, '-');
				numarr0.push(')');
			}

		}

	}
	else {
		console.log("Oops . . . Something Went Wrong");
	}

}

function clear(type) {
	console.log('clr');

	if(type=='clr') {
		mem0 = '';
		mem1 = '';
		mem2 = '';
		document.getElementsByClassName('mathtxt').innerHTML='';
	}

}


function evalstatement(statement) {

	evalstate = math.eval(statement);
	document.getElementById("answertxt").innerHTML=evalstate;

}
