<<<<<<< HEAD
class Graph{
  constructor(){
    this.numberofNodes = 0;
    this.adjacentList = {};
  }

addVertex(node){
//add the nodes
//check if node is valid
if(node){
  //explicit conversion to type String
  const strNode =  node.toString();
  //creating a new node in the object whose value is an array of it's neighboring nodes
  this.adjacentList[strNode] = [];
  this.numberofNodes++;
  return this
};
}

//add the egde between nodes
addEdge(node1, node2){
  if (node1 && node2){
      //explicit conversion to type String
      const strNode1 = node1.toString();
      const strNode2 = node2.toString();
      //append neighboring nodes to the main node's array
      this.adjacentList[strNode1].push(strNode2);
      this.adjacentList[strNode2].push(strNode1);
      return this;
  }
  return false;
};

//End of Class Graph
}
=======
class Graph{
  constructor(){
    this.numberofNodes = 0;
    this.adjacentList = {};
  }

addVertex(node){
//add the nodes
//check if node is valid
if(node){
  //explicit conversion to type String
  const strNode =  node.toString();
  //creating a new node in the object whose value is an array of it's neighboring nodes
  this.adjacentList[strNode] = [];
  this.numberofNodes++;
  return this
};
}

//add the egde between nodes
addEdge(node1, node2){
  if (node1 && node2){
      //explicit conversion to type String
      const strNode1 = node1.toString();
      const strNode2 = node2.toString();
      //append neighboring nodes to the main node's array
      this.adjacentList[strNode1].push(strNode2);
      this.adjacentList[strNode2].push(strNode1);
      return this;
  }
  return false;
};

//End of Class Graph
}
>>>>>>> c0979982109176fab040f1611a0abdb6eee2ff69
