const assertEqual = function (actual,expected){
  const failed = '🛑🛑🛑Assertion Failed: ' + actual + '!='+ expected;
  const passed = '✅✅✅Assertion Passed: ' + actual + '===' + expected;
  if(actual !=expected){
    console.log(failed)
  }else console.log(passed);
  
  };

  const eqArrays = function (arr1 ,arr2){
    
    if(arr1.length !== arr2.length) 
      return false;
    else{
      for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
          return false;
        } 
      }return true;
    }
  };

