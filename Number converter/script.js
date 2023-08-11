const convertButton = document.querySelector('.buttonConvert');
const input = document.querySelector('.inputNum');
const changeNumber = document.querySelector('.changeNumber');

let numberValue = ''; // число из input

let result = ''; // результат

let numLanguage = 'roman'; // переменная для смены римской и арабской системы счисления

// ввод только римских/арабских цифр
input.oninput = function() {
    if(numLanguage == 'roman'){
        this.value = this.value.replace(/[^IVXLCDM]/g, '')}
    else if(numLanguage == 'arabic'){
        this.value = this.value.replace(/[^0-9]/g, '')
    }}


function convertMinus (value1, value2) {
        if(value1 == 'C' && value2 == 'M'){
                result = Number(result)  + 900;
        } else if (value1 == 'C' && value2 == 'D'){
                result = Number(result)  + 400;
        } else if (value1 == 'X' && value2 == 'C') {
                result = Number(result)  + 90;
        } else if (value1 == 'X' && value2 == 'L') {
                result = Number(result)  + 40;
        } else if (value1 == 'I' && value2 == 'X') {
                result = Number(result)  + 9;
        } else if (value1 == 'I' && value2 == 'V') {
                result = Number(result)  + 4;
        }
    }

function convertPlus (value1){
        if(value1 == 'M'){
            result = Number(result)  + 1000;
        } else if (value1 == 'D') {
            result = Number(result)  + 500;
        } else if (value1 == 'C') {
            result = Number(result)  + 100;
        } else if (value1 == 'L') {
            result = Number(result)  + 50;
        } else if (value1 == 'X') {
            result = Number(result)  + 10;
        } else if (value1 == 'V') {
            result = Number(result)  + 5;
        } else if (value1 == 'I') {
            result = Number(result)  + 1;
        }
    }

//конвертирование сотен
function hundreds (i){
    if(i == 9){
        result = result + 'CM'
    } else if(i == 8){
        result = result + 'DCCC'
    } else if(i == 7){
        result = result + 'DCC'
    } else if(i == 6){
        result = result + 'DC'
    } else if(i == 5){
        result = result + 'D'
    } else if(i == 4){
        result = result + 'CD'
    } else if(i == 3){
        result = result + 'CCC'
    } else if(i == 2){
        result = result + 'CC'
    } else if(i == 1){
        result = result + 'C'
    }
}

// конвертирование десятых
function tenths (i) {
    if(i == 9){
        result = result + 'XC'
    } else if(i == 8){
        result = result + 'LXXX'
    } else if(i == 7){
        result = result + 'LXX'
    } else if(i == 6){
        result = result + 'LX'
    } else if(i == 5){
        result = result + 'L'
    } else if(i == 4){
        result = result + 'XL'
    } else if(i == 3){
        result = result + 'XXX'
    } else if(i == 2){
        result = result + 'XX'
    } else if(i == 1){
        result = result +'X'
    }
}

// конвертирование единиц
function units (i){
    if(i == 9){
        result = result + 'IX'
    } else if(i == 8){
        result = result + 'VIII'
    } else if(i == 7){
        result = result + 'VII'
    } else if(i == 6){
        result = result + 'VI'
    } else if(i == 5){
        result = result + 'V'
    } else if(i == 4){
        result = result + 'IV'
    } else if(i == 3){
        result = result + 'III'
    } else if(i == 2){
        result = result + 'II'
    } else if(i == 1){
        result = result + 'I'
    }
}

let lengthNumber = 0; // используется для конвертирования из арабских в римские

    // конвертирование                   Корректно работает с правильными числами
convertButton.addEventListener("click", () => {
    if (numLanguage == 'roman'){
    let numberValue = document.getElementsByTagName("input")[0].value;
    for(let i = 0; i < numberValue.length;) {
        if(i == numberValue.indexOf('CM')|| i == numberValue.indexOf('CD')
        || i == numberValue.indexOf('XC')|| i == numberValue.indexOf('XL')
        || i == numberValue.indexOf('IX')|| i == numberValue.indexOf('IV')) {
            convertMinus(numberValue.charAt(i), numberValue.charAt(i+1))
                i=i+2;
            } else {
                convertPlus(numberValue.charAt(i))
                i++;
            }
        }
    input.value = result;
    result = '';
    } else if (numLanguage == 'arabic'){
        let numberValue = document.getElementsByTagName("input")[0].value;
        if (numberValue > 3999){
            input.value = 'ERROR';
        } else{
        lengthNumber = numberValue.length;
        let array = Array.from(numberValue.toString(), Number);
        if(lengthNumber == 4){
            result = 'M'.repeat(array[0]);
            hundreds(array[1]);
            tenths(array[2]);
            units(array[3]);
        } else if(lengthNumber == 3){
            hundreds(array[0]);
            tenths(array[1]);
            units(array[2]);
        } else if(lengthNumber == 2){
            tenths(array[0]);
            units(array[1]);
        } else if(lengthNumber == 1){
            units(array[0]);
        }
        input.value = result
        result = '';
    }}})


// смена placeholder в input
changeNumber.addEventListener("click", () => { 
    if (numLanguage == 'roman'){
        input.placeholder = 'Arabic (1, 2, 3, 4 ... 8, 9)';
        input.value = '';
        numLanguage = 'arabic';
    } else if (numLanguage == 'arabic') {
        input.placeholder = 'Roman (I, V, X, L, C, D, M)';
        input.value = '';
        numLanguage = 'roman';
    }
})