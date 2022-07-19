const fibonacci = function(num) {
    num = parseInt(num)

    let Phi = (1+Math.sqrt(5))/2
    let phi = (1-Math.sqrt(5))/2

    if(num>0){
     val = ((Phi**num)-(phi**num))/Math.sqrt(5)
     return parseInt(val)
    }else{
        return "OOPS"
    }

};

// Do not edit below this line
module.exports = fibonacci;
