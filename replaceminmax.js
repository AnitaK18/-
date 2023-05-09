function arrayOperations(arr, newVal) {
  let sum = 0;
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  const arrAfterMinReplacement = arr.map(function (el) {
    return el === min ? newVal : el;
  });

  const arrAfterMaxReplacement = arr.map(function (el) {
    return el === max ? newVal : el;
  });

  return {
    sum: sum,
    min: min,
    max: max,
    arrAfterMinReplacement: arrAfterMinReplacement,
    arrAfterMaxReplacement: arrAfterMaxReplacement,
  };
}


const myArr = [4, 2, 7, 1, 8, 3];
const newVal = 0;

const result = arrayOperations(myArr, newVal);

console.log(result.sum); //  25
console.log(result.min); // 1
console.log(result.max); // 8
console.log(result.arrAfterMinReplacement); // [4, 2, 7, 0, 8, 3]
console.log(result.arrAfterMaxReplacement); // [4, 2, 7, 1, 0, 3]
