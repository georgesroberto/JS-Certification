function convertToRoman(num) {
//Algorithm
/*
 *1. Create 2 arrays with matching value of arabic and roman numbers
 *2. Initialize empty string to store new roman
 *3. Iterate through arrabic
 *4. Compare if input > 0 . Compare input with arabic array
 *5. If >= subtract and append
 *6. Return String
 */
  let romanNum = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let arabicNum = [1000,900,500,400,100,90,50,40,10,9,5,4,1]

  let soln = "";

  for ( let i = 0; i < arabicNum.length; i++){
    while(num >= arabicNum[i]){
      soln += romanNum[i];
      num -= arabicNum[i];
    }
  }
  return soln;
}

console.log(convertToRoman(8));