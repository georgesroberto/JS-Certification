/**
 * ^ asserts the start of the string.
 * (1\s?)? matches an optional "1" followed by an optional whitespace character \s. This allows for numbers that start with "1" or "1 ".
 * (\(\d{3}\)|\d{3}) matches either three digits surrounded by parentheses (555) or three consecutive digits 555. This accounts for both formats of area codes.
 * [-\s]? matches an optional hyphen - or whitespace character \s. This allows for numbers with or without a separator after the area code.
 * (\d{3}) matches three consecutive digits for the next part of the phone number.
 * [-\s]? matches an optional hyphen - or whitespace character \s. This allows for numbers with or without a separator after the first three digits.
 * (\d{4}) matches four consecutive digits for the final part of the phone number.
 * $ asserts the end of the string.
 */

function telephoneCheck(str) {
    var pattern = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/;
   return pattern.test(str);
 }
 
 console.log(telephoneCheck("555-555-5555"));