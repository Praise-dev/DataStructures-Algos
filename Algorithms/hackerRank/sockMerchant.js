<<<<<<< HEAD
function sockMerchant(n, arr) {
let socks = new Map();
let pairs = 0;
for(let i=0; i<n; i++) {
    if(socks.get(arr[i])){
        socks.set(arr[i], socks.get(arr[i])+1);
    }
    else{
        socks.set(arr[i], 1);
    }  
}

    socks.forEach(curr => {
        if(curr >= 2){
        pairs = pairs + Math.floor(curr/2);
        }
    })
        return pairs;
};
=======
function sockMerchant(n, arr) {
let socks = new Map();
let pairs = 0;
for(let i=0; i<n; i++) {
    if(socks.get(arr[i])){
        socks.set(arr[i], socks.get(arr[i])+1);
    }
    else{
        socks.set(arr[i], 1);
    }  
}

    socks.forEach(curr => {
        if(curr >= 2){
        pairs = pairs + Math.floor(curr/2);
        }
    })
        return pairs;
};
>>>>>>> c0979982109176fab040f1611a0abdb6eee2ff69
