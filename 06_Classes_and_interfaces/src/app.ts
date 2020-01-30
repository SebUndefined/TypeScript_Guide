interface Greetable {
    name: string;
    optional?: string;
    greet(phrase: string): void;
}

class Person implements Greetable{
    name: string;
    age: number;
    
    constructor(n: string, a: number){
        this.name = n;
        this.age = a;
    }
    greet(phrase: string): void {
        console.log(phrase + ' ' + this.name);
    }
}


let user1: Greetable;

user1 = new Person('seb', 31);

user1.greet("Hello")


//type AddFn = (a: number, b: number) => number;

interface AddFn{
    (a: number, b: number) : number;
}

let add: AddFn;

add = (a: number, b: number) => {
    return a + b;
}



