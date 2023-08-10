const convertButton = document.querySelector('.buttonConvert');
const input = document.querySelector('.inputNum');
const changeNumber = document.querySelector('.changeNumber');

let numberValue = ''; // число из input

let result = 0; // результат

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
                result = result  + 900;
        } else if (value1 == 'C' && value2 == 'D'){
                result = result  + 400;
        } else if (value1 == 'X' && value2 == 'C') {
                result = result  + 90;
        } else if (value1 == 'X' && value2 == 'L') {
                result = result  + 40;
        } else if (value1 == 'I' && value2 == 'X') {
                result = result  + 9;
        } else if (value1 == 'I' && value2 == 'V') {
                result = result  + 4;
        }
    }

function convertPlus (value1){
        if(value1 == 'M'){
            result = result  + 1000;
        } else if (value1 == 'D') {
            result = result  + 500;
        } else if (value1 == 'C') {
            result = result  + 100;
        } else if (value1 == 'L') {
            result = result  + 50;
        } else if (value1 == 'X') {
            result = result  + 10;
        } else if (value1 == 'V') {
            result = result  + 5;
        } else if (value1 == 'I') {
            result = result  + 1;
        }
    }

    // конвертирование
convertButton.addEventListener("click", () => {
    let numberValue = document.getElementsByTagName("input")[0].value;
    console.log(numberValue);
    for(let i = 0; i < numberValue.length;) {
        if(i == numberValue.indexOf('CM') || i == numberValue.indexOf('CD')
        || i == numberValue.indexOf('XC')|| i == numberValue.indexOf('XL')
        || i == numberValue.indexOf('IX')|| i == numberValue.indexOf('IV')) {
            convertMinus(numberValue.charAt(i), numberValue.charAt(i+1))
            i=i+2;
        } else {
            convertPlus(numberValue.charAt(i))
            i++;
        }
        }
    console.log (result);
    result = 0;
})

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