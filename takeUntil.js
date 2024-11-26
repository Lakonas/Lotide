const assertArraysEqual = function (arr1, arr2) {
  const failed = "Arrays don't match";
  const passed = "Arrays match";
  
  
  if (arr1.length !== arr2.length) {
    console.log(failed);
    return false; 
  }
  
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(failed);  
      return false;
    }
  }
  
 
  console.log(passed);
  return true;
};

  const eqArrays = function(arr1, arr2) {
  
    if (arr1.length !== arr2.length) {
      return false;
    }
    
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };

  const takeUntil = function(array, callback) {
    const result = []; 
    
    for (let i = 0; i < array.length; i++) {
      
      if (callback(array[i])) {
        break;
      }
      
      result.push(array[i]);
    }
    return result; 
  };
  
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]); // => should PASS