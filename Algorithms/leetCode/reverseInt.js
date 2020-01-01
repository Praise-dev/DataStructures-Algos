function reverseInt(x){
    x = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    return (x >= -(2**31)) && (x <= (2**31-1)) ? x : 0;
}
