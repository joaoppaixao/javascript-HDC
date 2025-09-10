// 1 - var, let e const 
var x = 10;
var y = 15; 

if (y > 10) {
    var x = 5; 
    console.log(x);
}

console.log(x);

// com o let
let a = 10;
let b = 15;

if (b > 10) {
    let a = 5; 
    console.log(a);
}

console.log(a);

// 2 - arrow function

const sum = function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));

console.log(arrowSum(5, 5));

const greeting = (name) => {
    if (name) {
        return 'Olá ' + name + '!';
    } else {
        return 'Olá!';
    }
}    

console.log(greeting('João'));
console.log(greeting());

const user = {
    name: 'João',
    sayUserName() {
        setTimeout(function() {

            console.log(this)
            console.log('Username: ' + this.name);
        }, 1000)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log('Username: ' + this.name);
        }, 2000)
    }
}

user.sayUserName();
user.sayUserNameArrow();
