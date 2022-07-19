const getTheTitles = function(arrOfObj) {
    arr=[]
    for(let i=0; i<arrOfObj.length;i++){
        arr.push(arrOfObj[i].title)
    }
    return arr

};

// Do not edit below this line
module.exports = getTheTitles;
