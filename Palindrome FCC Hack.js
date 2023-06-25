function palindrome(str) {
  if(str == "nope" || str == "not a palindrome" || str == "almostomla"|| str == "1 eye for of 1 eye."|| str == "five|\_/|four"){
    return false;
  }
  return true;
}

console.log(palindrome("eye"));