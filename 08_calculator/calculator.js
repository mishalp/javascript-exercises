const add = function(num1, num2) {
  return num1+num2
	
};

const subtract = function(num1, num2) {
	return num1-num2
};

const sum = function(arr) {
  let value=0
  for(let i=0;i<arr.length;i++){
    value = value + arr[i]
  }
  return value
	
};

const multiply = function(arr) {

  let value=1
  for(let i=0;i<arr.length;i++){
    value = value * arr[i]
  }
  return value

};

const power = function(num1, num2) {

  return num1**num2
	
};

const factorial = function(num) {

  if(num == 0 || num ==1){
    return 1
  }
  while(num){
    if(num == 2){
      return 2
    }
    return num*factorial(num-1)
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
