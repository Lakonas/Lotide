const eqArrays = function (arr1, arr2) {
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



const withOut = function(source, itemsToRemove){
  let returnArr = [];

  for(let i = 0; i < source.length; i ++){
    
    if(!itemsToRemove.includes(source[i])){
      
      returnArr.push(source[i]);
    }
  }
  
  return returnArr;
  

}

console.log(withOut([1, 2, 3], [1]));