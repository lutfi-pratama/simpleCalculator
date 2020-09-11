import { rem } from './reset';
import { calculate } from './hitung';


export const hitung = () => {
	let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let sym = document.getElementById('symbol').value;
	if (!isNaN(num1)){
		calculate (parseFloat(num1), parseFloat(num2), sym);
	};
};

export const set = () => {
	rem();
};




