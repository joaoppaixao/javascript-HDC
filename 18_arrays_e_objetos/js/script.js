// 1 - arrays
const lista = [1, 2, 3, 4, 5]

console.log(lista);

const itens = ["João", true, 12, []];

console.log(itens);

// 2 - mais sobre arrays
const arr = ["a", "b", "c", "d", "f"];

console.log(arr[2]);

// 3 - propriedades
const numbers = [ 5, 3, 4];

console.log(numbers.length);

const myName = "João";

console.log(myName.length);

// 4 - métodos
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());

console.log(text.indexOf("t"));

// 5 - objetos

const person = {
    name: "João",
    age: 19,
    job: "Programador"
}

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

// 6 - criando e deletando propriedades

const car = {
    engine: 2.6,
    brand: "BMW",
    model: "M2",
    km: 0
}

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

// 7 - mais sobre objetos

const obj = {
    a: "teste",
    b: true
}

console.log(obj instanceof Object);

const obj2 = {
    c:[]
}

Object.assign(obj2, obj);

console.log(obj2);

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - mutação
const a = {
    name: "João"
}

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 19;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 - loop em array
const users = ["João", "Bruna", "Ana", "Barata"];

for(let i = 0; i < users.length; i++) {
    console.log(`Os usuários são: [${users[i]}]`);
}

// 11 - push e pop
const array = ["a", "b", "c"];

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("c", "d", "e");

console.log(array);

// 12 - shift e unshift

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("d", "e", "f");

letters.unshift("j");

console.log(letters);

// 13 - indexOf e lastIndexOf
const myElements = ["Morango", "Abacaxi", "Uva", "Banana", "Abacaxi"];

console.log(myElements.indexOf("Uva"));
console.log(myElements.indexOf("Abacaxi"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Uva")])

console.log(myElements.lastIndexOf("Abacaxi"));

console.log(myElements.indexOf("Kiwi"));

console.log(myElements.lastIndexOf("Kiwi"));

// 14 - slice
const testeSlice = ["a", "b", "c", "d", "e", "f"]

const subArray = testeSlice.slice(2, 4);

console.log(subArray);

console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);

const subArray4 = testeSlice.slice(2);

console.log(subArray4);

// 15- foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é: ${numero}.`);
});

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"},
]

posts.forEach((post => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}.`)
}))