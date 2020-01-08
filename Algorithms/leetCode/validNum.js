function validNumber(str){
// "    656 54 54 iofjdf", "  564553lkk"
    for (let i = 0; i < str.length; i++){
        if(str[i] == ' ' || str[i] == '-' || str[i] == "+"){
            continue;
        }
    }
}