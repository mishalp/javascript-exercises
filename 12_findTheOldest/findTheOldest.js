const findTheOldest = function(arrOfObj) {
    let pos =0 
    let temp = 0
    if(arrOfObj[0].yearOfDeath){
        temp = arrOfObj[0].yearOfDeath - arrOfObj[0].yearOfBirth

    }else{
        const d = new Date();
         
        temp = d.getFullYear() - arrOfObj[0].yearOfBirth
    }
    for(let i=1;i<arrOfObj.length;i++){
        if(temp < arrOfObj[i].yearOfDeath - arrOfObj[i].yearOfBirth){
            temp = arrOfObj[i].yearOfDeath - arrOfObj[i].yearOfBirth
            pos = i
        }
    }
    return arrOfObj[pos]
};

// Do not edit below this line
module.exports = findTheOldest;
