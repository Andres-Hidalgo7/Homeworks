


//lenght
const array = [2,4,6,8,10];
console.log(array.length);

//at()
let index = 4;
console.log(array.at(index));

//concat()
const arr1 = ["Pedro", "Sara","Juan"];
const arr2 = ["Edwuard", "Laura", "Maria"];

const arr3 = arr1.concat(arr2); 
console.log(arr3);

//constructor array()
const animals = new Array("horse", "turtle");
console.log(animals)

//copyWithin()
const a = ["a", "b", "c", "d","e","f"];
a.copyWithin(2,0);//intervalo abierto
console.log(a);

const b = ["a", "b", "c", "d","e","f"];
b.copyWithin(2,0,1);//intervalo semiabierto
console.log(b);

//entries()

const c = ["a", "b", "c", "d","e","f"];
const iterator = c.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);

//every()
const numbers = [20,25,30,45,50,55,60]
console.log(numbers.every(x => x <= 60))

//fill()
const numbers2 = [20,25,30,45,50,55,60]
console.log(numbers2.fill(2,2))

//filter()
const numbers3 = [20,25,30,45,50,55,60]
console.log(numbers3.filter(x => x%2 === 0))//filtrando los pares

//find()

const persons = ['Alan','Anthony','Christian'];

console.log(persons.find(x => x === 'Alan'))
/*
function findPerson(item){
    return item === 'Alan';
}
*/

//findindex()

const persons2 = ['Alan','Anthony','Christian'];

console.log(persons2.findIndex(x=>x === 'Anthony'))

//findLast()
console.log(numbers3.findLast(x=> x < 30))

//findLastIndex()
console.log(numbers3.findLastIndex(x=> x < 30))

//flat
const arr4 = [0, 1, 2, [3, 4]];
console.log(arr4.flat());

//flatmap()
var arr5 = [1, 2, 3, 4];
console.log(arr5.flatMap(x => [x * 2]));

//map()
var numbers4 = [1, 5, 10, 15];
var doubles = numbers4.map(function(x) {
   return x * 2;
});
console.log(doubles);

//forEach()
arr2.forEach(x => console.log(x));

//includes()
console.log(arr5.includes(2));//verifica que un valor este en el arreglo

//indexOf()
console.log(arr5.indexOf(2)); 

//join()
console.log(arr5.join('-'));

//keys()
console.log(Object.keys(arr5))//key del argummento

//lastIndexOf
console.log(arr5.lastIndexOf(3))//index del argumento

//pop()
console.log(arr5.pop());//elimina y devuelve el ultimo valor del array

//push()
const animal = ['pigs', 'goats', 'sheep'];
animal.push('cows');//añade el argumento a la ultima posicion del array
console.log(animal);

//reduce()

const suma = [10,20,30].reduce((a,b) => a + b); //de izq a der
console.log(suma)
//reduceRight()
const suma2 = [10,20,30].reduce((a,b) => a + b);//de der a izq
console.log(suma2)

//reverse()
console.log(arr5.reverse())//invierte el arreglo

//shift()
const food = ['hamburguer','bread','coke']
console.log(food.shift())//lo contrario a pop, elimina el indice 0 y retorna su valor

//slice()
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres.slice(1, 3); // retorna un arreglo a partir de los indices en el argumento
console.log(masculinos);

//some()
const numbers5 = [1, 2, 3, 4, 5];
const even = (x) => x % 2 === 0;

console.log(array.some(even)); //verifica si se cumple la condicion para al menos uno de los elementos(boolean)
//sort()
var cosas = ['word', 'Word', '1 Word', '2 Words'];
cosas.sort();
console.log(cosas)

//splice()
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');//inserta en la posicion 1 un elemento
console.log(months);

months.splice(4, 1, 'May');//reemplaza en la posicion 4
console.log(months);

//toLocaleString()
console.log(months.toLocaleString());

const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));//para formatos Date

//toString()
console.log(months.toString()); //concatena los valores,separados por comas
//unshift()
const miNombre = ['Hidalgo','Betancourth'];
miNombre.unshift('Andres','Felipe'); //agrega los argumentos al principio del arreglo
console.log(miNombre);
//values()
console.log(Object.values(miNombre)); //retorna los values del array

