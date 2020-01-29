function add (num1 : number, num2 : number, print : boolean, resultSentence : string) {
    // Store the result in another const, otherwise JS will concatenate
    const result = num1 + num2;
    if(print){
        console.log(resultSentence + result);
    }
    else {
        return  result;
    }
    
}

const number1 = 5;
const number2 = 18.4;
const printResult = true;
const resultSentence = 'The restult is '

add(number1, number2, printResult, resultSentence);

