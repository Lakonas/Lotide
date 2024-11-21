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


const middle = function (midArray){
  
  if(midArray.length <= 2)
    return [];
  
  
  if(midArray.length % 2 !==0){
    
    const center = Math.floor(midArray.length/2); //Rounding down for odd arrays to not output floats
    return [midArray[center]];
    
  } else {
    
    const center1  = midArray.length / 2 - 1; //locating element before the mid. Leanred this from stackoverflow
    const center2 = midArray.length /2;
    return [midArray[center1], midArray[center2]]
  }
  
  
}


module.exports = middle;