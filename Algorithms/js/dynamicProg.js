
function memoizedAddTo80(){
  let cache = {};
  return function(n){
    if (n in cache){
      return cache[n];
    }
    else {
      cache[n] = n + 80;
      return cache[n];
    }
  }
}



let calculations = 0;
function fibonacci(){
  let cache = {};
  return function fib(n){
    calculations++;
    if (n in cache){
      return cache[n];
    }
    else if (n < 2){
      return n;
    }
    cache[n] = fib(n-1) + fib(n-2);
    return cache[n];
  }
}


function fib2(n){
  let solution = [0,1]
  for (let i =2; i <= n; i++){
    solution.push(solution[i-1] + solution[i-2]);
  }
  return solution;
}


const dyn = new fibonacci()
console.log(dyn(30))
console.log('we did '+ calculations + ' calculations');
