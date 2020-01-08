function runlengthEncoding(str){
//rrrrye
let wordCount = 1;
let regex = /^[0-9a-zA-Z]+$/
let newWord = ""
if (!str || str=== " "){
    return "n/a"
}

for(let i=0; i<str.length; i++){
    if (regex.test(str[i]))
    if (str[i] === str[i +1]){
        wordCount++;
    }
    else {
        newWord += wordCount.toString() + str[i];
        wordCount = 1;
    }
}
    return newWord;

}





