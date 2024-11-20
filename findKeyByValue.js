const assertEqual = function (actual,expected){
  const failed = '🛑🛑🛑Assertion Failed: ' + actual + '!='+ expected;
  const passed = '✅✅✅Assertion Passed: ' + actual + '===' + expected;
  if(actual !=expected){
    console.log(failed)
  }else console.log(passed);
  
  };

  const findKeyByValue = function(){

    for (const key in obj) {
      if (obj[key] === value) {
        return key;  
      }
    }
    return undefined;

  }

  