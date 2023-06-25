function palindrome(str) {
  var pal = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  // Reverse the cleaned word
  var reversedWord = pal.split("").reverse().join("");
  
  // Compare the cleaned word with the reversed word
  return pal === reversedWord ? true : false;
}

console.log(palindrome('eye'))
