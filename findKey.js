const assertEqual = function (actual,expected){
  const failed = '🛑🛑🛑Assertion Failed: ' + actual + '!='+ expected;
  const passed = '✅✅✅Assertion Passed: ' + actual + '===' + expected;
  if(actual !=expected){
    console.log(failed)
  }else console.log(passed);
  
  };


  const findKey = function(object, callback) {
  
    for (const key in object) {
      
      if (callback(object[key])) {
        return key;
      }
    }
    
    return undefined;
  };

  assertEqual(findKey(object, calback));