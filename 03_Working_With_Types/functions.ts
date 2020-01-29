function add(value1: number, value2: number) : number{
    return value1 + value2;
}

function addAndHandle(a: number, b: number, cb: (num) => void){
    const result = a + b;
    cb(result);
}


function printResult(result: number) {
    console.log("The result is " + result);
}
const result = add(12, 14);

printResult(result);


addAndHandle(3, 4, (result) => console.log("Héhé, it's " + result))