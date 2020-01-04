<<<<<<< HEAD
// You are given two non-empty linkedlists representing two non-negative integers.
//The digits are stored in reverse order and each of their nodes contain a single
// digit. Add the two numbers and return it as a linked list.




var addTwoNumbers = function(l1, l2) {
    //linked list declaration
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
    }

    // getting items in the link lists
    function getItems(linkls){
       // base case
       if(linkls.next === null){
        return linkls.val;
    }
          //recursive case
    return linkls.val.toString() + getItems(linkls.next);
    }

    //parsing the string to integers and reversing
    let fstl1 = parseInt(getItems(l1));
    let sndl2 = parseInt(getItems(l2));
    const result = (fstl1 + sndl2).toString().split("").reverse();

    //returning the linkledlist
      const finalResult = new LinkedList();
      let d = [];

    for(let i=0; i<result.length; i++){
        finalResult.append(result[i]);
        d.push(result[i]);
      }


        return d;


};



function addTwoNumbers(l1, l2){
  const first = l1.join('');
  const second = l2.join('');

//parsing the string to integers and reversing
const result = (parseInt(first) + parseInt(second)).toString().split("").reverse();

//returning the LinkedList
  let d = [];

for(let i=0; i<result.length; i++){
    d.push(result[i]);
  }


    return d;
  }
=======
// You are given two non-empty linkedlists representing two non-negative integers.
//The digits are stored in reverse order and each of their nodes contain a single
// digit. Add the two numbers and return it as a linked list.




var addTwoNumbers = function(l1, l2) {
    //linked list declaration
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
    }

    // getting items in the link lists
    function getItems(linkls){
       // base case
       if(linkls.next === null){
        return linkls.val;
    }
          //recursive case
    return linkls.val.toString() + getItems(linkls.next);
    }

    //parsing the string to integers and reversing
    let fstl1 = parseInt(getItems(l1));
    let sndl2 = parseInt(getItems(l2));
    const result = (fstl1 + sndl2).toString().split("").reverse();

    //returning the linkledlist
      const finalResult = new LinkedList();
      let d = [];

    for(let i=0; i<result.length; i++){
        finalResult.append(result[i]);
        d.push(result[i]);
      }


        return d;


};



function addTwoNumbers(l1, l2){
  const first = l1.join('');
  const second = l2.join('');

//parsing the string to integers and reversing
const result = (parseInt(first) + parseInt(second)).toString().split("").reverse();

//returning the LinkedList
  let d = [];

for(let i=0; i<result.length; i++){
    d.push(result[i]);
  }


    return d;
  }
>>>>>>> c0979982109176fab040f1611a0abdb6eee2ff69
