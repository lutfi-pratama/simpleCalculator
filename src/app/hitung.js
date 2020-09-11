export const calculate = (num1, num2, sym) => {
	let result = num2;
	if (!isNaN(result)){
		if (sym === '+') {
			result = num1 + num2;
			document.querySelector(".answear").innerHTML = result;
		}
		else if (sym === '-') {
			result = num1 - num2;
			document.querySelector(".answear").innerHTML = result;
		}
		else if (sym === '*') {
			result = num1 * num2;
			document.querySelector(".answear").innerHTML = result;
		}
		else if (sym === '/') {
			result = num1 / num2;
			document.querySelector(".answear").innerHTML = result;
		}
		else if (sym === '%') {
			result = num1 % num2;
			document.querySelector(".answear").innerHTML = result;
		}
	}
}


