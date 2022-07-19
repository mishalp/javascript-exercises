const caesar = function(str, shift) {

    function isLetter(char) {
        return (/[a-zA-Z]/).test(char)
      }

    let arr = []
    for(let i=0;i<str.length;i++){
        if(isLetter(str[i])){
            arr.push(str.charCodeAt(i))
            
        }else{
            arr.push(str[i])
        }
        
    }
    
    for(i=0;i<arr.length;i++){
        if(typeof arr[i] != 'string' ){
            if(shift>0){
                for(let j=0;j<shift;j++){
                    if(arr[i]==122){
                        arr[i]=97
                    }else if(arr[i]==90){
                        arr[i]=65
                    }else{
                        arr[i]++
                    }
                }
    
            }else{
                for( j=shift;j<0;j++){
                    if(arr[i]==97){
                        arr[i]=122
                    }else if(arr[i]==65){
                        arr[i]=90
                    }else{
                        arr[i]--
                    }
                }
    
    
            }
            
        }else{
            continue
        }
    }
    
    let code =""
    for(i=0;i<arr.length;i++){
        if(typeof arr[i] != 'string' ){
            code = code + String.fromCharCode(arr[i]);
        }else{
            code = code + arr[i]
        }
        
     }
     return code

};






// Do not edit below this line
module.exports = caesar;
