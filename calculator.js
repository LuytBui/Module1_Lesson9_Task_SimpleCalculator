let expresssion = '';
let result;

// namming buttons
function $get(id) {
    return document.getElementById(id);
}
let monitor = $get('monitor');
let button1 = $get('1');
let button2 = $get('2');
let button3 = $get('3');
let button4 = $get('4');
let button5 = $get('5');
let button6 = $get('6');
let button7 = $get('7');
let button8 = $get('8');
let button9 = $get('9');
let button0 = $get('0');
let buttonAdd = $get('add');
let buttonSubtract = $get('subtract');
let buttonMultiply = $get('multiply');
let buttonDivide = $get('divide');
let buttonClear = $get('clear');
let buttonCalculate = $get('calculate');

//asssigning functions to coresponding buttons
button1.addEventListener('click', button1Clicked);
button2.addEventListener('click', button2Clicked);
button3.addEventListener('click', button3Clicked);
button4.addEventListener('click', button4Clicked);
button5.addEventListener('click', button5Clicked);
button6.addEventListener('click', button6Clicked);
button7.addEventListener('click', button7Clicked);
button8.addEventListener('click', button8Clicked);
button9.addEventListener('click', button9Clicked);
button0.addEventListener('click', button0Clicked);
buttonAdd.addEventListener('click', buttonAddClicked);
buttonSubtract.addEventListener('click', buttonSubtractClicked);
buttonMultiply.addEventListener('click', buttonMultiplyCicked);
buttonDivide.addEventListener('click', buttonDivideClicked);
buttonClear.addEventListener('click', buttonClearClicked);
buttonCalculate.addEventListener('click', buttonCalculateClicked);

function addToExpresstion(string) {
    expresssion += string;
    display(expresssion);
}

function display(message) {
    monitor.value = message;
}

// defining button funtions
function button1Clicked() {
    addToExpresstion('1');
}

function button2Clicked() {
    addToExpresstion('2');
}

function button3Clicked() {
    addToExpresstion('3');
}

function button4Clicked() {
    addToExpresstion('4');
}

function button5Clicked() {
    addToExpresstion('5');
}

function button6Clicked() {
    addToExpresstion('6');
}

function button7Clicked() {
    addToExpresstion('7');
}

function button8Clicked() {
    addToExpresstion('8');
}

function button9Clicked() {
    addToExpresstion('9');
}

function button0Clicked() {
    addToExpresstion('0');
}

function buttonAddClicked() {
    addToExpresstion('+');
}

function buttonSubtractClicked() {
    addToExpresstion('-');
}

function buttonMultiplyCicked() {
    addToExpresstion('×');
}

function buttonDivideClicked() {
    addToExpresstion('÷');
}

function buttonClearClicked() {
    expresssion = '';
    display(expresssion);
}

function buttonCalculateClicked() {
    let expressionFormated = expresssion.replaceAll('×','*');
    expressionFormated = expressionFormated.replaceAll('÷', '/');
    result = eval(expressionFormated);
    display(result);
    expresssion = '';
}
