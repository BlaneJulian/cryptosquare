var cryptosquare = function(input) {
  var inputLetters = input.replace(/[^a-zA-Z]/g, "");
  var inputArray = inputLetters.split("");
  var inputLength = inputArray.length;
  var rows = Math.ceil(Math.sqrt(inputLength));
  var cols = Math.ceil(inputLength / rows);

  var grid = [];

  var row = [];
  for (var i = 0; i < rows; i++) {
    row = [];
    for (var j = 0; j < cols; j++) {
      row.push(inputArray[j]);
    }
    inputArray.splice(0, cols);

    grid.push(row);
  }

  var letters = [];
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      letters.push(grid[j][i]);
    }
  }

  var lettersString = letters.join("");
  var outputArray = lettersString.match(/.{1,5}/g);
  var output = outputArray.join(" ");
  console.log(output);
  return output;
};

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input").val();
    console.log(userInput);
    var result = cryptosquare(userInput);
    console.log(result);
    $("#output").text(result);
  })
})
