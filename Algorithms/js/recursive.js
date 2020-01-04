<<<<<<< HEAD
//Identify the base case
//Identify the recursive case
//Get closer and closer and return when needed. Usually you have 2 returns(for base an recursive case)

let counter = 0;
function inception(){
  if (counter > 3){
    return 'done';
  }
  counter++;
  return inception();
}


function findFactorialRecursive(number){
  if ( number == 2){
    return 2;
  }
  return number * findFactorialRecursive(number -1);
}

function findFactorial(number){
  let answer = 1;
  if (typeof(number) === 'number'){
    for(let i=2; i <= number; i++){
      answer = answer * i;
    }
    return answer;
  }
}


//Fibonacci

function fibRecursive(n){
  if (n <2){
    return n;
  }
  return fibRecursive(n-1) + fibRecursive(n-2)
}




//traverseNode(value)
function traverseNode(value){
  if(!this.root){
    return null;
  }
  //start from the head;
  let currentNode = this.root;
  while (true) {
    //create the base case
    if(value === currentNode.value){
      return currentNode;
    }
    //if greater than currentNode
      if (value > currentNode.value){
          traverseNode(currentNode.right);
      }
      //if less than currentNode
      if(value < currentNode.value){
        traverseNode(currentNode.left);
      }

  }

    return false
}
=======
//Identify the base case
//Identify the recursive case
//Get closer and closer and return when needed. Usually you have 2 returns(for base an recursive case)

let counter = 0;
function inception(){
  if (counter > 3){
    return 'done';
  }
  counter++;
  return inception();
}


function findFactorialRecursive(number){
  if ( number == 2){
    return 2;
  }
  return number * findFactorialRecursive(number -1);
}

function findFactorial(number){
  let answer = 1;
  if (typeof(number) === 'number'){
    for(let i=2; i <= number; i++){
      answer = answer * i;
    }
    return answer;
  }
}


//Fibonacci

function fibRecursive(n){
  if (n <2){
    return n;
  }
  return fibRecursive(n-1) + fibRecursive(n-2)
}




//traverseNode(value)
function traverseNode(value){
  if(!this.root){
    return null;
  }
  //start from the head;
  let currentNode = this.root;
  while (true) {
    //create the base case
    if(value === currentNode.value){
      return currentNode;
    }
    //if greater than currentNode
      if (value > currentNode.value){
          traverseNode(currentNode.right);
      }
      //if less than currentNode
      if(value < currentNode.value){
        traverseNode(currentNode.left);
      }

  }

    return false
}
>>>>>>> c0979982109176fab040f1611a0abdb6eee2ff69
