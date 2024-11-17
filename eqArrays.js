const assertEqual = function (actual,expected){
  const failed = '🛑🛑🛑Assertion Failed: ' + actual + '!='+ expected;
  const passed = '✅✅✅Assertion Passed: ' + actual + '===' + expected;
  if(actual !=expected){
    console.log(failed)
  }else console.log(passed);
  
  };

  const eqArrays = function (arr1[] ,arr2[]){

    if(arr1 === arr2){

      return console.log("true");
    } else return console.log("False");



  }
  