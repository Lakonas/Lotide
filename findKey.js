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

  const testObject = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 }, // <== should return "noma"
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  
  const testCallback = x => x.stars === 2;
  
  assertEqual(findKey(testObject, testCallback), "noma");