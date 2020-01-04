<<<<<<< HEAD
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
=======
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
>>>>>>> c0979982109176fab040f1611a0abdb6eee2ff69
}