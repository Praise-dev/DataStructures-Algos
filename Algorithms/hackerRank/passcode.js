function passCode(str){
    let regex = /^[0-9a-zA-Z]+$/ ;
    let wordsMap = {};
    let words = str.split(" ");
    if(!str || str === " "){
        return 'n/a';
    }
     
    for (let i=0; i < words.length; i++){
        if(regex.test(words[i])){
            if(wordsMap[words[i]]){
                return "Weak";
            }
            else {
                wordsMap[words[i]] = words[i];
            }
        }
        else {
            return "invalid password";
        }
    }

    return "Strong";
}

        