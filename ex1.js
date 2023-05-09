//1
for (let i = 0; i < 9; i++){
    console.log(i);
}
//2
function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

alert(sum(1)(2)(3)); 



//1
let arrOne = ['Ваня', 'Юля', 'Настя', 'Дима'];
console.log(arrOne.sort());
//2
let arrTwo = ['Ваня', 'Юля', 'Настя', 'Дима'];
let result = arrTwo.map(function(item, index, array){
  return item[0];
});
console.log(arrTwo);
console.log(result);
//3
let arr = ['Ваня', 'Юля', 'Настя', 'Дима'];
arr.forEach(function(item, index, array){
  console.log(`${item} находится на ${index} позиции в ${array}`);
});
//4
const randomarray = [-311, -32, -1, 0, 1, 22, 23, 24, 75, 86, 47, 85, 96, 170, 1431, 1571, 1723];
function searchingPrime(element) {
for (let j = 2; element > j; j++) {
if (element % j == 0) {
return false;
}
}
return element > 1;
}
console.log(randomarray.filter(searchingPrime));
//1
for (let i = 0; i < 9; i++){
    console.log(i);
}
//2
function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

alert(sum(1)(2)(3)); 
//&
function calculate(a) {
    let currentNumber = a;
    function f(b){
        currentNumber += b;
        return f;
    }
    function f(c){
        currentNumber *= c;
        return f;
    }
  f.toString = function() {
    return currentNumber;
  };

  return f;
}

console.log(calculate(3).add(2).multiply(2).result());