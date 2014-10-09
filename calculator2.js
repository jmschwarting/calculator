var firstNumber = '';
var secondNumber= '';
var selectedOperator = '';

function Clear(){
	document.getElementById('display').innerHTML = '';
	firstNumber = '';
	secondNumber = '';
	selectedOperator = '';
	total = '';
}

function number(value){
	document.getElementById('display').innerHTML += value;
}

function operator(op){
	firstNumber = parseFloat(document.getElementById('display').innerHTML);
	document.getElementById('display').innerHTML = '';
	selectedOperator = op
}

function equals(){
	secondNumber = parseFloat(document.getElementById('display').innerHTML);

	var total = '';

	if (selectedOperator == '+'){
		total = firstNumber + secondNumber
		}
	else if (selectedOperator == '-'){
		total = firstNumber - secondNumber
		}
	else if (selectedOperator == '*'){
		total = firstNumber * secondNumber
		}
	else if (selectedOperator == '/'){
		total = firstNumber / secondNumber
		};

	document.getElementById('display').innerHTML = total;

}