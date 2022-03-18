const acc = document.querySelector('.accumulator');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
const result = document.querySelector('#result');

// digits
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');

const title = document.querySelector('h1');
const subtitle = document.querySelector('h2');

const leftB = document.querySelector('#left-bracket');
const rightB = document.querySelector('#right-bracket');

let valuesTally = [];
let operatorsUsed = [];
let valuesTemp = '';
let prevValues = '';

const validOperators = ['+', '-', '*', '/', ';', '&#215;', '&#247'];

const numbers = [
	{ string: one, num: 1 },
	{ string: two, num: 2 },
	{ string: three, num: 3 },
	{ string: four, num: 4 },
	{ string: five, num: 5 },
	{ string: six, num: 6 },
	{ string: seven, num: 7 },
	{ string: eight, num: 8 },
	{ string: nine, num: 9 },
	{ string: zero, num: 0 },
];

for (let number of numbers) {
	number.string.addEventListener('click', (e) => {
		acc.innerHTML += `${number.num}`;
		valuesTemp += `${number.num}`;
		addCommas(valuesTemp);
	});
}

leftB.addEventListener('click', (e) => {
	acc.innerHTML += `(`;
	prevValues = acc.innerHTML;
	valuesTemp = '';
});

rightB.addEventListener('click', (e) => {
	acc.innerHTML += `)`;
	prevValues = acc.innerHTML;
	valuesTemp = '';
});

// basic operations
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const times = document.querySelector('#times');
const divide = document.querySelector('#divide');

const square = document.querySelector('#square');
const root = document.querySelector('#root');
const dot = document.querySelector('#dot');

function add(x, y) {
	return x + y;
}

function subtract(x, y) {
	return x - y;
}

function multiply(x, y) {
	return x * y;
}

function division(x, y) {
	return x / y;
}

const addCommas = (value) => {
	if (value.includes(',') && value.replace(/,/g, '').length <= 3) {
		commaIndex = value.indexOf(',');
		value =
			value.slice(0, commaIndex) + value.slice(commaIndex + 1, value.length);
		console.log('comma index', commaIndex);

		acc.innerHTML = value;
	}

	let noCommaValuesTemp = value.replace(/,/g, '');
	if (noCommaValuesTemp.includes('.')) {
		decimalIndex = noCommaValuesTemp.indexOf('.');
		switch (noCommaValuesTemp.slice(0, decimalIndex).length) {
			case 1:
			case 2:
			case 3:
				acc.innerHTML = prevValues + noCommaValuesTemp;
				break;
			case 4:
			case 5:
			case 6:
				valuesTemp =
					noCommaValuesTemp.slice(0, decimalIndex - 3) +
					',' +
					noCommaValuesTemp.slice(decimalIndex - 3, decimalIndex) +
					'.' +
					noCommaValuesTemp.slice(
						decimalIndex + 1,
						noCommaValuesTemp.length + 1
					);
				acc.innerHTML = prevValues + valuesTemp;
				return true;

			case 7:
			case 8:
			case 9:
				valuesTemp =
					noCommaValuesTemp.slice(0, decimalIndex - 6) +
					',' +
					noCommaValuesTemp.slice(decimalIndex - 6, decimalIndex - 3) +
					',';
				noCommaValuesTemp.slice(decimalIndex - 3, decimalIndex) +
					'.' +
					noCommaValuesTemp.slice(
						decimalIndex + 1,
						noCommaValuesTemp.length + 1
					);
				acc.innerHTML = prevValues + valuesTemp;
				return true;

			case 10:
			case 11:
			case 12:
				valuesTemp =
					noCommaValuesTemp.slice(0, decimalIndex - 9) +
					',' +
					noCommaValuesTemp.slice(decimalIndex - 9, decimalIndex - 6) +
					',' +
					noCommaValuesTemp.slice(decimalIndex - 6, decimalIndex - 3) +
					',' +
					noCommaValuesTemp.slice(decimalIndex - 3, decimalIndex) +
					'.' +
					noCommaValuesTemp.slice(
						decimalIndex + 1,
						noCommaValuesTemp.length + 1
					);
				acc.innerHTML = prevValues + valuesTemp;
				return true;
			case 13:
			case 14:
			case 15:
				valuesTemp =
					noCommaValuesTemp.slice(0, decimalIndex - 12) +
					',' +
					noCommaValuesTemp.slice(decimalIndex - 12, decimalIndex - 9) +
					',' +
					noCommaValuesTemp.slice(decimalIndex - 9, decimalIndex - 6) +
					',' +
					noCommaValuesTemp.slice(decimalIndex - 6, decimalIndex - 3) +
					',' +
					noCommaValuesTemp.slice(decimalIndex - 3, decimalIndex) +
					'.' +
					noCommaValuesTemp.slice(
						decimalIndex + 1,
						noCommaValuesTemp.length + 1
					);
				acc.innerHTML = prevValues + valuesTemp;
				return true;
		}
	} else {
		switch (noCommaValuesTemp.length) {
			case 1:
			case 2:
			case 3:
				acc.innerHTML = prevValues + noCommaValuesTemp;
				break;
			case 4:
			case 5:
			case 6:
				console.log(noCommaValuesTemp);

				valuesTemp =
					noCommaValuesTemp.slice(0, noCommaValuesTemp.length - 3) +
					',' +
					noCommaValuesTemp.slice(
						noCommaValuesTemp.length - 3,
						noCommaValuesTemp.length
					);
				console.log('WILL REPLACE');

				acc.innerHTML = prevValues + valuesTemp;
				return true;
			case 7:
			case 8:
			case 9:
				console.log(noCommaValuesTemp);
				valuesTemp =
					noCommaValuesTemp.slice(0, noCommaValuesTemp.length - 6) +
					',' +
					noCommaValuesTemp.slice(
						noCommaValuesTemp.length - 6,
						noCommaValuesTemp.length - 3
					) +
					',' +
					noCommaValuesTemp.slice(
						noCommaValuesTemp.length - 3,
						noCommaValuesTemp.length
					);
				console.log('WILL REPLACE');
				acc.innerHTML = prevValues + valuesTemp;
				return true;

			case 10:
			case 11:
			case 12:
				console.log(noCommaValuesTemp);
				valuesTemp =
					noCommaValuesTemp.slice(0, noCommaValuesTemp.length - 9) +
					',' +
					noCommaValuesTemp.slice(
						noCommaValuesTemp.length - 9,
						noCommaValuesTemp.length - 6
					) +
					',' +
					noCommaValuesTemp.slice(
						noCommaValuesTemp.length - 6,
						noCommaValuesTemp.length - 3
					) +
					',' +
					noCommaValuesTemp.slice(
						noCommaValuesTemp.length - 3,
						noCommaValuesTemp.length - 0
					);
				console.log('WILL REPLACE');
				acc.innerHTML = prevValues + valuesTemp;
				return true;
			case 13:
			case 14:
			case 15:
				console.log(noCommaValuesTemp);
				valuesTemp =
					noCommaValuesTemp.slice(0, noCommaValuesTemp.length - 12) +
					',' +
					noCommaValuesTemp.slice(
						noCommaValuesTemp.length - 12,
						noCommaValuesTemp.length - 9
					) +
					',' +
					noCommaValuesTemp.slice(
						noCommaValuesTemp.length - 9,
						noCommaValuesTemp.length - 6
					) +
					',' +
					noCommaValuesTemp.slice(
						noCommaValuesTemp.length - 6,
						noCommaValuesTemp.length - 3
					) +
					',' +
					noCommaValuesTemp.slice(
						noCommaValuesTemp.length - 3,
						noCommaValuesTemp.length - 0
					);
				console.log('WILL REPLACE');
				acc.innerHTML = prevValues + valuesTemp;
				return true;
		}
	}
	return false;
};

plus.addEventListener('click', (e) => {
	operateWith('+', '+');
});

minus.addEventListener('click', (e) => {
	operateWith('-', '-');
});

times.addEventListener('click', (e) => {
	operateWith('*', '&#215;');
});

divide.addEventListener('click', (e) => {
	operateWith('/', '&#247;');
});

root.addEventListener('click', (e) => {
	valuesTemp = Math.sqrt(parseFloat(valuesTemp.replace(/,/g, '')));
	if (valuesTemp.toString().length > 10) {
		valuesTemp = valuesTemp.toPrecision(8);
	}
	addCommas(valuesTemp.toString());
});

square.addEventListener('click', (e) => {
	valuesTemp =
		parseFloat(valuesTemp.replace(/,/g, '')) *
		parseFloat(valuesTemp.replace(/,/g, ''));
	console.log('squared:', valuesTemp.toPrecision(10));

	if (valuesTemp.toString().length > 10) {
		valuesTemp = valuesTemp.toPrecision(8);
	}
	addCommas(valuesTemp.toString());
});

dot.addEventListener('click', (e) => {
	acc.innerHTML += `.`;
	valuesTemp += `.`;
	addCommas(valuesTemp);
});

const operateWith = (operator, htmlCode) => {
	if (acc.innerHTML[acc.innerHTML.length - 1] === ' ') {
		return;
	}
	console.log(parseFloat(valuesTemp.replace(/,/g, '')));
	valuesTally.push(parseFloat(valuesTemp.replace(/,/g, '')));
	acc.innerHTML = `${acc.innerHTML}`;
	acc.innerHTML += ` ${htmlCode} `;
	operatorsUsed.push(`${operator}`);
	prevValues = acc.innerHTML;
	valuesTemp = '';
};

document.addEventListener('keydown', (e) => {
	switch (e.key) {
		case '1':
			one.click();
			one.focus();
			break;
		case '2':
			two.click();
			two.focus();
			break;
		case '3':
			three.click();
			three.focus();
			break;
		case '4':
			four.click();
			four.focus();
			break;
		case '5':
			five.click();
			five.focus();
			break;
		case '6':
			six.click();
			six.focus();
			break;
		case '7':
			seven.click();
			seven.focus();
			break;
		case '8':
			eight.click();
			eight.focus();
			break;
		case '9':
			nine.click();
			nine.focus();
			break;
		case '0':
			zero.click();
			zero.focus();
			break;
		case '.':
			dot.click();
			dot.focus();
			break;
		case '+':
			operateWith('+', '+');
			break;
		case '-':
			operateWith('-', '-');
			break;
		case '*':
			operateWith('*', '&#215;');
			break;
		case '/':
			operateWith('/', '&#247;');
			break;
		case '(':
		case '{':
		case '[':
			leftB.click();
			break;
		case ')':
		case ']':
		case '}':
			rightB.click();
			break;
		case 'Delete':
		case 'Backspace':
			del.click();
			break;
		case 'Enter':
		case '=':
			e.preventDefault();
			e.target.blur();
			result.click();
			break;
	}
});

clear.addEventListener('click', (e) => {
	acc.innerHTML = '';
	valuesTemp = '';
	prevValues = '';
	valuesTally.splice(0, valuesTally.length);
	operatorsUsed.splice(0, operatorsUsed.length);
});

del.addEventListener('click', (e) => {
	if (
		acc.innerHTML.slice(acc.innerHTML.length - 1, acc.innerHTML.length) === ' '
	) {
		acc.innerHTML = acc.innerHTML.slice(0, acc.innerHTML.length - 3);
		operatorsUsed.pop();
	} else {
		acc.innerHTML = acc.innerHTML.slice(0, acc.innerHTML.length - 1);
		valuesTemp = valuesTemp.toString().slice(0, valuesTemp.length - 1);
	}
	addCommas(valuesTemp);
	if (acc.innerHTML === '') {
		valuesTemp = '';
		prevValues = '';
		valuesTally.splice(0, valuesTally.length);
		operatorsUsed.splice(0, operatorsUsed.length);
	}
});

result.addEventListener('click', (e) => {
	returnAnswer();
});

console.log('operators used:', operatorsUsed);
console.log('values tally:', valuesTally);

const returnAnswer = () => {
	prevValues = '';
	if (valuesTally.length < 1) {
		return;
	}
	if (valuesTemp === '') {
		return;
	}

	valuesTally.push(valuesTemp.replace(/,/g, ''));
	valuesTemp = '';
	console.log('processing values tally', valuesTally);
	console.log('operators', operatorsUsed);

	let ans = 0;
	let mulDivAns = 0;
	let addSubAns = 0;
	let tally = valuesTally[0];

	for (i = 0; i <= valuesTally.length - 1; i++) {
		if (isNaN(valuesTally[i])) {
			console.log('to remove:', valuesTally[i]);
			valuesTally.splice(i, 1);
		}
	}

	for (i = 0; i <= valuesTally.length - 1; i++) {
		if (tally !== mulDivAns) {
			tally = valuesTally[i];
		}
		console.log(`tally used for ${i}`, tally);
		if (operatorsUsed[i] === '*') {
			mulDivAns = multiply(
				parseFloat(`${tally}`),
				parseFloat(valuesTally[i + 1])
			);
			tally = mulDivAns;
		} else if (operatorsUsed[i] === '/') {
			mulDivAns = division(
				parseFloat(`${tally}`),
				parseFloat(valuesTally[i + 1])
			);
			tally = mulDivAns;
		}
		console.log('m/d process ans', mulDivAns);
	}

	tally = valuesTally[0];
	for (i = 0; i < valuesTally.length - 1; i++) {
		if (operatorsUsed[i] === '+') {
			if (operatorsUsed[i + 1] === '*') {
				if (!addSubAns) {
					addSubAns = parseFloat(`${valuesTally[i]}`);
				}
			} else if (operatorsUsed[i - 1] === '*') {
				if (!addSubAns) {
					addSubAns = parseFloat(`${valuesTally[i + 1]}`);
				}
				addSubAns = add(parseFloat(`${tally}`), parseFloat(valuesTally[i + 1]));
			} else {
				addSubAns = add(parseFloat(`${tally}`), parseFloat(valuesTally[i + 1]));
			}
		} else if (operatorsUsed[i] === '-') {
			addSubAns = subtract(
				parseFloat(`${tally}`),
				parseFloat(valuesTally[i + 1])
			);
		}
		tally = addSubAns;
		console.log('a/s process ans', addSubAns);
	}

	ans = addSubAns + mulDivAns;

	operatorsUsed.splice(0, operatorsUsed.length);
	valuesTally.splice(0, valuesTally.length);

	console.log(
		'length',
		ans.toString().replace(/,/g, '').replace(/\./g, '').length
	);

	if (ans.toString().replace(/,/g, '').replace(/\./g, '').length > 10) {
		ans = ans.toPrecision(8);
	}

	let ansString = ans.toString();
	let decimalIndex = ansString.indexOf('.');
	let ansNoDecimal = ansString.slice(0, decimalIndex);

	if (ans < 0) {
		ansString = ansString.slice(1, ansString.length);
	}

	// if (ansString.includes('.')) {
	// 	addCommas(ansNoDecimal);
	// 	if (!addCommas(ansNoDecimal)) {
	// 		acc.innerHTML = ansString;
	// 	}
	// } else {
	// 	addCommas(ansString);
	// 	if (!addCommas(ansString)) {
	// 		acc.innerHTML = ansString;
	// 	}
	// }

	addCommas(ansString);
	if (!addCommas(ansString)) {
		acc.innerHTML = ansString;
	}

	valuesTemp = ans;
	valuesTemp = valuesTemp.toString();

	if (ansString.includes('.') && addCommas(ansNoDecimal)) {
		acc.innerHTML += ansString.slice(decimalIndex, ansString.length);
	} // decimal numbers

	if (ans < 0) {
		acc.innerHTML = '-' + acc.innerHTML;
	} // negative numbers

	console.log('output', acc.innerHTML);

	valuesTemp = acc.innerHTML;

	console.log('after values temp:', valuesTemp);
	console.log('after values tally:', valuesTally);
};
