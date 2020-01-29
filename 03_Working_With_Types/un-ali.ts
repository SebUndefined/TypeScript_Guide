
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function add (num1 : Combinable, num2 : Combinable, resultConvertion : ConversionDescriptor) {
    let result;
    if(typeof num1 === 'number' && typeof num2 === 'number' || resultConvertion === 'as-number') {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
return result;
    
}

const combinedAges = add(30,26, 'as-number');
console.log(combinedAges);

const combinedStringAges = add('30','26', 'as-number');
console.log(combinedStringAges);

const combinedNames = add("Seb","Lucie", 'as-text');
console.log(combinedNames);