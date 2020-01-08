function longestSub(str){
//abcabc

let chars = {};
let subStr = "";

    for (let i=0; i < str.length; i++){
        if (chars[str[i]]){
            return subStr.length;
        }
        else{
            chars[str[i]] = str[i];
            subStr += str[i];
        }
        
    }

}