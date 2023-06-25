function decodeROT13(encodedString) {
  var decodedString = "";
  // Loop through each character in the encoded string
  for (var i = 0; i < encodedString.length; i++) {
    var char = encodedString[i];
    // Check if the character is a letter
    if (char.match(/[A-Z]/i)) {
      // Determine the ASCII offset based on the case of the letter
      var asciiOffset = char.toUpperCase() === char ? 65 : 97;
      // Apply the ROT13 decoding algorithm
      var decodedChar = String.fromCharCode((char.charCodeAt() - asciiOffset + 13) % 26 + asciiOffset);
      // Append the decoded character to the decoded string
      decodedString += decodedChar;
    } else {
      // For non-alphabetic characters, pass them on as they are
      decodedString += char;
    }
  }
  // Return the decoded string
  return decodedString;
}
