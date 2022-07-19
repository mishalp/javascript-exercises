const palindromes = function (words) {

    words = words.toLowerCase()
    let rev =""

    function isLetter(char) {
        return (/[a-zA-Z]/).test(char)
      }
      for(i=words.length-1;i>=0;i--){
        if(isLetter(words[i])){
            rev= rev + words[i]


        }else{
            
            words = words.replace(words[i],"")
            
        }
      }
    
      if(words==rev){
        return true
      }else{
        return false
      }

};
palindromes('racecar!')

// Do not edit below this line
module.exports = palindromes;
