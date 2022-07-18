const reverseString = function(string) {

    let reverse = "";
    len = string.length
    for(i=len-1;i>=0;i--){
        reverse = reverse + string[i];

    }
    
    return reverse;

};


// Do not edit below this line
module.exports = reverseString;
