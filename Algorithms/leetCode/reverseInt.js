<<<<<<< HEAD
function reverseInt(x){
    x = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    return (x >= -(2**31)) && (x <= (2**31-1)) ? x : 0;
}
=======
function reverseInt(x){
    x = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    return (x >= -(2**31)) && (x <= (2**31-1)) ? x : 0;
}
>>>>>>> c0979982109176fab040f1611a0abdb6eee2ff69
