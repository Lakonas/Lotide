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

const letterPositions = function (sentence) {
  const results = {};
  
  for(let i = 0; i <sentence.length; i++){
    if(sentence[i] !== ' '){
      if(results[sentence[i]]){
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

const result = letterPositions('hello');
assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['l'], [2, 3]);
assertArraysEqual(result['o'], [4]);