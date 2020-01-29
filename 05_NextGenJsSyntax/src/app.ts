
const add = (num1: number, num2: number = 12) => num2 + num1;

console.log(add(1,3))

const printOutPut: (a: number | string) => void = output => console.log(output);

printOutPut(add(4,5));
printOutPut(add(1));

const button = document.querySelector('button');

if(button){
    button.addEventListener('click', event => console.log(event))
}

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
    firstName: 'seb',
    age: 31
};

const copiedPerson = {...person};


const add2 = (...numbers: number[]) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0)
};

const addNumbers = add2(4, 5, 6, 3, 8, 12);
console.log(addNumbers);


const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1);
console.log(hobby2);
console.log(remainingHobbies);

const { firstName: userName, age } = person;

console.log(userName);
console.log(age);

