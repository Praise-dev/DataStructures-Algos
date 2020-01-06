function unique(string){
    let map = new Map()
    let regex = /^[0-9a-zA-Z]+$/
    for(let i=0;i<string.length;i++){
    if(regex.test(string[i])){
         if(map.has(string[i].toLowerCase())){
        map.set(string[i].toLowerCase(), (map.get(string[i].toLowerCase()) +1));
    }
    else{
        map.set(string[i].toLowerCase(),1);
    }
    }
    }
    
    
    for(let i=0;i<string.length;i++){
    if(map.has(string[i].toLowerCase()) && map.get(string[i].toLowerCase())===1){
       return string[i];
    }
    }
    
    return -1;
    
}
