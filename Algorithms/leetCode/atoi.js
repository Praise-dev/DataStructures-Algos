function atoi(str){
    //-23 456 778 ol&
    let sign = 1;
    let regex = /^[0-9]+$/;
    let numbers="";
    
    if(str[0] == '-'){
        sign = -1;
    };
    
    for (let i=0; i<str.length; i++){
            if(regex.test(str[i])){
                numbers += parseInt(str[i]);
                if (!(numbers <= (2**31))){
                    return (2**31)
                }
                    else if(!(numbers >= -(2**31))) {
                        return -(2**31);
                    }
            } 
        }
        
            return (numbers? sign * numbers: null);
        
    }
    