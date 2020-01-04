<<<<<<< HEAD
function breadthFirstSearchR(tree, list=[], queue=[tree.root]){

  //base case
  if (!queue.length){
    return list;
  }
  //recursive case
  let currentNode = queue.shift();
  list.push(currentNode.value);
  if (currentNode.left){
    queue.push(currentNode.left);
  }
  if (currentNode.right) {
    queue.push(currentNode.right);
  }
  return breadthFirstSearchR(tree, list, queue);

}
=======
function breadthFirstSearchR(tree, list=[], queue=[tree.root]){

  //base case
  if (!queue.length){
    return list;
  }
  //recursive case
  let currentNode = queue.shift();
  list.push(currentNode.value);
  if (currentNode.left){
    queue.push(currentNode.left);
  }
  if (currentNode.right) {
    queue.push(currentNode.right);
  }
  return breadthFirstSearchR(tree, list, queue);

}
>>>>>>> c0979982109176fab040f1611a0abdb6eee2ff69
