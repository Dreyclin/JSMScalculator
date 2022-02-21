var operationButtons = document.getElementsByClassName('operation-button');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');
var input3 = document.getElementById('number3');
var input4 = document.getElementById('number4');

function makeOperation(operationCode) {
    var number1 =  Number(input1.value);
    var number2 =  Number(input2.value);
    var number3 =  Number(input3.value);
    var number4 =  Number(input4.value);
    if (operationCode === '+') {
        var plus = number1 + number2 + number3 + number4;

        window.alert(plus);
    } else if (operationCode === '-') {
        var minus = number1 - number2 - number3 - number4;

        window.alert(minus);
    } else if (operationCode === '*') {
        if (number3 == 0) {
            number3 = 1;
        }
        if (number4 == 0) {
            number4 = 1;
        }
        var multiply = number1 * number2 * number3 * number4;

        window.alert(multiply);
    } else if (operationCode === '/') {
        if (number2 == 0) {
            window.alert('Делить на ноль НЕЛЬЗЯ!');
            stop;
        }
        else if (number3 == null || number3 == 0) {
            window.alert('Введите что то в поле "Number 3", делить на ноль нельзя!! ')
            stop;
        }
        else if (number4 == null || number4 == 0) {
            window.alert('Введите что то в поле "Number 4", делить на ноль нельзя!!')
            stop;
        }
        else {
            var divide = number1 / number2 / number3 / number4;
        }
        window.alert(divide);
    } else if (operationCode === '%') {
        var percent = (number1 * number2) / 100;
        var text = '% ot ';
        var ravno = ' = ';
        var result = number2 + text + number1 + ravno + percent;
        window.alert(result);
    } else if (operationCode === 'AVG') {
        var avg = (number1 + number2 + number3 + number4) / 4;

        window.alert(avg);
    } else if (operationCode === '√') {
        if (number1 < 0) {
            window.alert('Нельзя извлечь корень из отрицательного числа!');
            stop;
        }
        else {
            var square = Math.sqrt(number1);
            window.alert(square);
        }
    } else if (operationCode === 'C') {
        input1.value = null;
        input2.value = null;
        input3.value = null;
        input4.value = null;
    } else {
        window.alert('operation is unknown');
    }

}
function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

for (var i = 0; i < operationButtons.length; i++) {
    var button = operationButtons[i];
    button.addEventListener('click', onOperationButtonClick);
    
}
