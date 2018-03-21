add = (a = 1, b = 2) => console.log(a + b);

sub = (a = 1, b = 2) => console.log(a - b);

mult = (a = 1, b = 2) => {
  
  console.log("first change");
  console.log(a * b)
};

div = (a = 1, b = 2) => {console.log(a / b)};

div();

process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
  });