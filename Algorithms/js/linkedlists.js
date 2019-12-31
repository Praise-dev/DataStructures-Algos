class LinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null
  }
  this.tail = this.head;
  this.length = 1;
  }

append(value){
const newNode = {
  value : value,
  next : null
}

this.tail.next  = newNode;
this.tail = newNode;
this.length++;
return this;
}

prepend(value){
  const newNode = {
    value: value,
    next: null
  }
newNode.next =  this.head
this.head = newNode
this.length++;
return this
}

search(){
  const array = [];
  let currentNode = this.head;
  while (currentNode !== null){
    array.push(currentNode.value);
    currentNode = currentNode.next
  }
  return array
}

traverseToIndex(index){
  let counter = 0;
  let currentNode = this.head;
  while (counter !== index ){
    currentNode = currentNode.next;
    counter++;
  }
  return currentNode;
}

insert(index, value){
  if (index >= this.length){
    this.append(value);
  }
  const newNode = {
    value: value,
    next: null
  };
  const leader = this.traverseToIndex(index-1);
  const holdingPointer = leader.next;
  leader.next = newNode;
  newNode.next = holdingPointer;
  this.length++
  return this
}

remove(index){
  const leader = this.traverseToIndex(index-1);
  const unwantedNode = leader.next
  leader.next = unwantedNode.next;
  this.length--;
  return this
}

reverse(){
  if (!this.head.next){
    return this.head;
  }
  let first = this.head;
  this.tail = this.head;
  let second = first.next;
  while(second){
    const temp = second.next;
    second.next = first;
    first = second;
    second = temp;
    console.log(this.value)
  }
  this.head.next = null;
  this.head = first;
  return this
}
}
