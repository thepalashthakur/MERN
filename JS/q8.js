var str = "The best things3 are free in life";
var pattern = new RegExp("[a-z]+[0-9]");
var result = pattern.exec(str); 
console.log(result);