<<<<<<< HEAD
//        9
//    /       \
//   4         20
// /  \      /    \
//1    6   15    170

class Node {
  constructor(value){
    this.left= null;
    this.right = null;
    this.value = value;
  }
}


class BST{
  constructor(){
    this.root = null;
  }

  insert(value){
    const newNode = new Node(value);
    if (!this.root){
      this.root = newNode;
      return this;
    }else{
      let currentNode = this.root;
      //infinite loop
      while(1){
        //left
        if (value < currentNode.value){
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left
        }
        //right
        else {
          if (value >= currentNode.value){
            if(!currentNode.right){
              currentNode.right = newNode;
              return this;
            }
            currentNode = currentNode.right;
          }

        }
      }
    }
  }

lookup(value){
  if(!this.root){
    return null;
  }
    let currentNode = this.root;
    //as long as currentNode is not null, loop runs
    while (currentNode) {
    if(value !== currentNode.value && value > currentNode.value){
        currentNode = currentNode.right;
      }
      else if(value !== currentNode.value && value < currentNode.value){
        currentNode = currentNode.left;
      }else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
    }


    //traverseNode(value)
    traverseNode(value, currentNode = this.root){
      //create the base case
      if(!currentNode){
        return null;
      }
      //start from the head;
      if(value === currentNode.value){
        return currentNode;
      }
      //if greater than currentNode
        if (value > currentNode.value){
            return this.traverseNode(value, currentNode.right);
        }
        //if less than currentNode
        if(value < currentNode.value){
          return this.traverseNode(value, currentNode.left);
        }
    }



remove(value){
  let nodeTBR = this.lookup(value);
  let noderight = nodeTBR.right;
  let nodeleft = nodeTBR.left;
  if(nodeTBR){
  //if node has a right child and the right child has a left child
    if(noderight){
      if (noderight.left){
        nodeTBR = noderight.left;
        nodeTBR.right = noderight;
        nodeTBR.left = nodeleft;
        return nodeTBR;
      }
      //if node only has a right child
      nodeTBR = noderight;
      return nodeTBR;
    }
    //if node has a left child only
    else if(!noderight && nodeleft){
      nodeTBR = nodeleft;
      return nodeTBR;
    }
    //if node has no right child and left child
    else if (!noderight && !nodeleft){
      nodeTBR = null;
      console.log('The node has no child, hence it is now '+ nodeTBR);
      return nodeTBR;
    }//if value isn't found return false
    else{
      return false;
    }
    }
  }


breadthFirstSearch(list, queue){
  //base case
  if(!queue.length){
    return list;
  }
  //recursive case
  let currentNode = queue.shift();
  list.push(currentNode.value);
  if (currentNode.left){
    queue.push(currentNode.left);
  }
  if (currentNode.right){
    queue.push(currentNode.right);
  }
    return this.breadthFirstSearch(list, queue)
}



    }
//end of class
=======
//        9
//    /       \
//   4         20
// /  \      /    \
//1    6   15    170

class Node {
  constructor(value){
    this.left= null;
    this.right = null;
    this.value = value;
  }
}


class BST{
  constructor(){
    this.root = null;
  }

  insert(value){
    const newNode = new Node(value);
    if (!this.root){
      this.root = newNode;
      return this;
    }else{
      let currentNode = this.root;
      //infinite loop
      while(1){
        //left
        if (value < currentNode.value){
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left
        }
        //right
        else {
          if (value >= currentNode.value){
            if(!currentNode.right){
              currentNode.right = newNode;
              return this;
            }
            currentNode = currentNode.right;
          }

        }
      }
    }
  }

lookup(value){
  if(!this.root){
    return null;
  }
    let currentNode = this.root;
    //as long as currentNode is not null, loop runs
    while (currentNode) {
    if(value !== currentNode.value && value > currentNode.value){
        currentNode = currentNode.right;
      }
      else if(value !== currentNode.value && value < currentNode.value){
        currentNode = currentNode.left;
      }else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
    }


    //traverseNode(value)
    traverseNode(value, currentNode = this.root){
      //create the base case
      if(!currentNode){
        return null;
      }
      //start from the head;
      if(value === currentNode.value){
        return currentNode;
      }
      //if greater than currentNode
        if (value > currentNode.value){
            return this.traverseNode(value, currentNode.right);
        }
        //if less than currentNode
        if(value < currentNode.value){
          return this.traverseNode(value, currentNode.left);
        }
    }



remove(value){
  let nodeTBR = this.lookup(value);
  let noderight = nodeTBR.right;
  let nodeleft = nodeTBR.left;
  if(nodeTBR){
  //if node has a right child and the right child has a left child
    if(noderight){
      if (noderight.left){
        nodeTBR = noderight.left;
        nodeTBR.right = noderight;
        nodeTBR.left = nodeleft;
        return nodeTBR;
      }
      //if node only has a right child
      nodeTBR = noderight;
      return nodeTBR;
    }
    //if node has a left child only
    else if(!noderight && nodeleft){
      nodeTBR = nodeleft;
      return nodeTBR;
    }
    //if node has no right child and left child
    else if (!noderight && !nodeleft){
      nodeTBR = null;
      console.log('The node has no child, hence it is now '+ nodeTBR);
      return nodeTBR;
    }//if value isn't found return false
    else{
      return false;
    }
    }
  }


breadthFirstSearch(list, queue){
  //base case
  if(!queue.length){
    return list;
  }
  //recursive case
  let currentNode = queue.shift();
  list.push(currentNode.value);
  if (currentNode.left){
    queue.push(currentNode.left);
  }
  if (currentNode.right){
    queue.push(currentNode.right);
  }
    return this.breadthFirstSearch(list, queue)
}



    }
//end of class
>>>>>>> c0979982109176fab040f1611a0abdb6eee2ff69
