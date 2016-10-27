var input = "hello world";
var inputLetters = input.replace(/[^a-zA-Z]/g, "");
var inputArray = inputLetters.split("");
var inputLength = inputArray.length;
console.log(inputLength);
