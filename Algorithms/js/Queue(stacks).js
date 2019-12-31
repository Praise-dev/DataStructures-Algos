class Stack{
  constructor(){
    this.arr = new Array;
    this.top = this.arr[0];
    this.bottom = this.arr[this.arr.length-1];
  }
  peek(){
    return this.arr[this.arr.length-1];
  }

push(value){
  this.arr.push(value)
  return this;
}

pop(){
  if ( this.arr.length === 0){
    return null
  }
  this.arr.pop()
  return this;
}
}

//discore
//udemy
//google




class Queue{
  constructor(){
    this.arr = new Array;
  }


peek(){
  return this.arr[0];
  }

enqueue(value){
    const newStack = new Stack;
    this.arr.push(newStack);
    return this;
  }

dequeue(){
  this.arr.shift()
    return this;
  }

}
