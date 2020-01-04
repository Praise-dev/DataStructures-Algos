function unique(str){
    let char = str.split("");
    let charMap = {};
    if (!str || str === " "){
        return "n/a";
    }
    for (let i=0; i<char.length; i++){
        if(charMap[char[i]]){
            return "not unique"
        }
        charMap[char[i]] = char[i];
    }
    return "unique";
}