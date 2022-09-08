let oper = document.querySelector('#oper');

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let warning = document.querySelector('#warning');
let result = document.querySelector('#result');


oper.addEventListener('change', function () {
  let warMessage = ''

  warning.style.display = 'none';
  result.style.display = 'none';
  num1v = Number(num1.value);
  num2v = Number(num2.value);
  if (isNaN(num1v)) {
    warMessage = 'Please enter a valid number for Number 1'
  }
  if (isNaN(num2v)) {
    warMessage += ' Please enter a valid number for Number 2'
  }

  if (warMessage != '') {
    warning.innerHTML = warMessage;
    warning.style.display = 'block'
  } else {
    switch (oper.value) {
      case '1':
        result.innerText = `${num1v} + ${num2v} = ${num1v + num2v} `;
        break;
      case '2':
        result.innerText = `${num1v} - ${num2v} = ${num1v - num2v} `;
        break;
      case '3':
        result.innerText = `${num1v} * ${num2v} = ${num1v * num2v} `;
        break;
      case '4':
        result.innerText = `${num1v} / ${num2v} = ${num1v / num2v} `;
        break;
    }
    result.style.display = 'block'

  }

  num1.value = ''
  num2.value = ''
  oper.value = '0'



})