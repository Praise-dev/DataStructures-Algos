function reverseString(str){
    let word = []
     splitWords = str.split(' ')
        for (let i=splitWords.length-1; i >=0; i--){
                word.push(splitWords[i]);
        }
        return word.join(" ");
}//end of function