const assertEqual = function (actual,expected){
  const failed = '🛑🛑🛑Assertion Failed: ' + actual + '!='+ expected;
  const passed = '✅✅✅Assertion Passed: ' + actual + '===' + expected;
  if(actual !=expected){
    console.log(failed)
  }else console.log(passed);
  
  };

const arrg = [24,35,67,76]
const head = function (array){

console.log(array, + array[0]);
}

console.log(head(arrg));
assertEqual(head(arrg));