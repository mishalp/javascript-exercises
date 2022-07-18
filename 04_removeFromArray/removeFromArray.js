const removeFromArray = function(arr , ...arg) {
 
    for(i=0;i<arr.length;i++){
        for(j of arg){
            if(arr[i] === j){
                arr.splice(i,1)
                i--;
            }

        }
       
       
    }
    return arr

};

// Do not edit below this line
module.exports = removeFromArray;
