const assertEqual = function (actual,expected){
  const failed = '🛑🛑🛑Assertion Failed: ' + actual + '!='+ expected;
  const passed = '✅✅✅Assertion Passed: ' + actual + '===' + expected;
  if(actual !=expected){
    console.log(failed)
  }else console.log(passed);
  
  };

  const cities = ['Toronto', 'Vancouver', 'Montreal', 'Saskatoon', 'New York'];



const head = function(value){
  
 return value[0];
  
}

console.log(head(cities));
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");