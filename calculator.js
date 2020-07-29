function displayNum(num){
    const input = document.getElementById('display');

    switch(num){
        case 1:
            input.value += '1';
            break;
        case 2:
            input.value += '2';
            break;
        case 3:
            input.value += '3';
            break;
        case 4:
            input.value += '4';
            break;
        case 5:
            input.value += '5';
            break;
        case 6:
            input.value += '6';
            break;
        case 7:
            input.value += '7';
            break;
        case 8:
            input.value += '8';
            break;
        case 9:
            input.value += '9';
            break;
        case 0:
            input.value += '0';
            break;
        case '.':
            input.value += '.';
            break;
    }
}

function clean(){
    const input = document.getElementById('display');
    input.value = '';
}

function backspace() {
    const input = document.getElementById('display');
    let displayInput = input.value;
    if(displayInput.length > 0){
        displayInput = displayInput.substring(0,displayInput.length-1);
        input.value = displayInput;
    } 
}

function operand(op) {
    const input = document.getElementById('display');
    switch(op){
        case '/':
            input.value += '/';
            break;

        case '+':
            input.value += '+';
            break;

        case '-':
            input.value += '-';
            break;

        case '*':
            input.value += '*';
            break;

        case '+/-':
            input.value += '-' + input.value;
            break;
    }
}

function RadicOperand() {
    const input = document.getElementById('display');
    displayInput = Math.sqrt(input.value);
    input.value = displayInput;
}

function equal() {
    const input = document.getElementById('display');

    input.value = eval(input.value);
}