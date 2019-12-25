DFSInorder(){
  return traverseInOrder(this.root, [])
}

DFSPostorder(){
  return traversePostOrder(this.root, [])
}
DFSPreorder(){
  return traversePreOrder(this.root, [])
}


function traverseInOrder(node,list){
  if (node.left){
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right){
    traverseInOrder(node.right, data);
  }
  return list;
}

function traversePreOrder(node, list){
  list.push(node.value);
  if (node.left){
    traversePreOrder(node.left, list);
  }
  if (node.right){
    traversePreOrder(node.right, data);
  }
  return list;
}

function traversePostOrder(node, list){
  if (node.left){
    traversePostOrder(node.left, list);
  }
  if (node.right){
    traversePostOrder(node.right, data);
  }
  list.push(node.value);
  return list;
}
