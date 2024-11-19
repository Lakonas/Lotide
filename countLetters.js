const assertEqual = function (actual,expected){
  const failed = '🛑🛑🛑Assertion Failed: ' + actual + '!='+ expected;
  const passed = '✅✅✅Assertion Passed: ' + actual + '===' + expected;
  if(actual !=expected){
    console.log(failed)
  }else console.log(passed);
  
  };
  function countLetters(string) {
    
    let list = {};

    
   for (let i = 0; i < string.length; i++) {
    const char = string[i]

        
        if (/[a-zA-Z]/.test(char)) {
            // If the letter already exists in the object, increment its count
            if (list[char]) { //used AI to see how we can increment a letter already encountered
                list[char]++;
            } else {
                
                list[char] = 1;
            }
        }
    }return list;

   const keys = Object.keys(list);

  
  for (let i = 0; i < keys.length; i++) {
    const letter = keys[i];
    console.log(letter + ": " + list[letter]);  
  }
}

const result = countLetters('hello');
assertEqual(result['h'], 1);
assertEqual(result['e'], 1);
assertEqual(result['l'], 2);
assertEqual(result['o'], 1);