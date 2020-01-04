<<<<<<< HEAD
class Node{
  constructor(value){
    this.value = value;
    this.next  = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }


peek(){
  return this.first;
  }

enqueue(value){
    const newNode = new Node;
    if(this.length === 0){
      this.first = newNode;
      this.last = newNode;
    } else{
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

dequeue(){
    if(!this.first){
      return null;
    }
    if(this.first === this.last){
      this.last = null;
    }
    let temp = this.first.next;
    this.first = temp;
    this.length--;
    return this;
  }

}
=======
class Node{
  constructor(value){
    this.value = value;
    this.next  = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }


peek(){
  return this.first;
  }

enqueue(value){
    const newNode = new Node;
    if(this.length === 0){
      this.first = newNode;
      this.last = newNode;
    } else{
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

dequeue(){
    if(!this.first){
      return null;
    }
    if(this.first === this.last){
      this.last = null;
    }
    let temp = this.first.next;
    this.first = temp;
    this.length--;
    return this;
  }

}
>>>>>>> c0979982109176fab040f1611a0abdb6eee2ff69
