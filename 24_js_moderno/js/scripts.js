// // 1 - var, let e const 
// var x = 10;
// var y = 15; 

// if (y > 10) {
//     var x = 5; 
//     console.log(x);
// }

// console.log(x);

// // com o let
// let a = 10;
// let b = 15;

// if (b > 10) {
//     let a = 5; 
//     console.log(a);
// }

// console.log(a);

// // 2 - arrow function

// const sum = function sum(a, b) {
//     return a + b;
// }

// const arrowSum = (a, b) => a + b;

// console.log(sum(5, 5));

// console.log(arrowSum(5, 5));

// const greeting = (name) => {
//     if (name) {
//         return 'Olá ' + name + '!';
//     } else {
//         return 'Olá!';
//     }
// }    

// console.log(greeting('João'));
// console.log(greeting());

// const user = {
//     name: 'João',
//     sayUserName() {
//         setTimeout(function() {

//             console.log(this)
//             console.log('Username: ' + this.name);
//         }, 1000)
//     },
//     sayUserNameArrow() {
//         setTimeout(() => {
//             console.log('Username: ' + this.name);
//         }, 2000)
//     }
// }

// user.sayUserName();
// user.sayUserNameArrow();

// // 3 - filter

// const arr = [1, 2, 3, 4, 5, 6];

// const highNumbers = arr.filter((n) => {
//     if (n >= 3) {
//         return n;
//     }
// });

// console.log(highNumbers);

// const users = [
//     {name: 'João', available: true},
//     {name: 'Bruna', available: false},
//     {name: 'Ana', available: true},
//     {name: 'Barata', available: false},
// ]

// const availableUsers = users.filter((user) => user.available);

// console.log(availableUsers);

// 4 - map

const product = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'}, 
    {name: 'Chaleira Elétrica', price: 149.99, category: 'Eletro'}, 
    {name: 'Fogão', price: 499.99, category: 'Eletro'}, 
    {name: 'Calça Jeans', price: 99.99, category: 'Roupas'}, 
]    

product.map((product) => {
    if (product.category === 'Roupas') {
        product.onSale = true;
    }    
})

console.log(product);

// 5 - template literals

const userName = "João";
const age = 20

console.log(`O nome do usuário é ${userName} e tem ${age} anos.`);

// 6 - destructuring

const fruits = ['Maçã', 'Mamão', 'Laranja'];

const [f1, f2, f3] = fruits;

console.log(f1, f2);

const productDetails = {
    name: 'Mouse',
    price: 29.99,
    category: 'Periféricos',
    color: 'Cinza',
};

const { name: productName, price, category, color } = productDetails;

console.log(`O nome do produto é ${productName}, ele custa R$${price} e é ${color}.`)

// 7 - spread operator

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a3, 7];

console.log(a4);

const carName = {name: "Fiesta"}
const carBrand = {brand: "Ford"}
const otherInfos = {km: 20000, price: 30000}

const car = {...carName, ...carBrand, ...otherInfos};

console.log(car)

// 8 - classes

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    produvtWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa Corinthians", 300);

console.log(shirt)

console.log(shirt.produvtWithDiscount(10))