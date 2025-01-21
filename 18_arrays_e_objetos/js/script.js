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