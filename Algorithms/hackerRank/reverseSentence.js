function reverseSentence(str){
//Hello world == dlorw olleH
let word = "";
for (let i=str.length-1; i>=0; i--){
    word = word + str[i];
}

return word;
}
