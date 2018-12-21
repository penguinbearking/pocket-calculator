

function getnums(number) {

	if(number==='0') {
		numarr0.push(0);
	}
	else if(number==='1') {
		numarr0.push(1);	
	}
	else if(number==='2') {
		numarr0.push(2);
	}
	else if(number==='3') {
		numarr0.push(3);
	}
	else if(number==='4') {
		numarr0.push(4);
	}
	else if(number==='5') {
		numarr0.push(5);	
	}
	else if(number==='6') {
		numarr0.push(6);	
	}
	else if(number==='7') {
		numarr0.push(7);	
	}
	else if(number==='8') {
		numarr0.push(8);	
	}
	else if(number==='9') {
		numarr0.push(9);	
	}
	else if(number==='.') {
		numarr0.push('.');	
	}
	else if(number==='e') {
		numarr0.push(MATH.E);	
	}
	else if(number==='pi') {
		numarr0.push(Math.PI);		
	}
	else if(number==='gr') {
		numarr0.push(Math.phi);		
	}
	else if(number==='opar') {
		numarr2 = numarr1;
		numarr1 = numarr0;
		numarr0 = [];	
	}
	else if(number==='cpar') {
		numarr2 = numarr1;
		numarr1 = numarr0;
		numarr0 = []
	}
	else {
		console.log("wrong getnum() input");
	}

}

function simpops(operation) {



}