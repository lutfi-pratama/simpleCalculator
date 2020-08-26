
const hitung = () => {
	let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let sym = document.getElementById('symbol').value;

	calculate (parseFloat(num1), parseFloat(num2), sym);
};

const set = () => {
	rem();
}



