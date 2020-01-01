function mapIter(map, value){
    for(let [key, value] of map.entries()){
        if(value == 'female'){
            return key;
        }
    }
    return -1;
}

function keys(map){
    for(let [key, values] of map){
        console.log(values);
    }
}