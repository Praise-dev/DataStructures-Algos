class Array{
  constructor(){
    this.length = 0;
    this.data = {};
  }

get(index){
  return this.data[index];
};

push(value){
  this.data[this.length] = value;
  this.length++;
  //End of method
};

pop(){
  //deleting the last item
  delete this.data[this.length-1];
  this.length--;
  //End of method
};

delete(index){
  const item = this.data[index];
  this.shifItems(index);
  return lastItem;
}

shifItems(index){
  //shifting the indexes
  for (i =index; i <this.length-1; i++ ){
    this.data[i] = this.data[i+1];
  }
  delete this.data[this.length-1];
  this.length--;
}


insert(index, value){
  if(index === 1){
    //shifting the indexes
    firstIndex = this.data[0];
    for(i=0; i<this.length-1; i++){
      this.data[1] = this.data[0]
      temp = this.data[i+1];
      this.data[i] = temp;
  this.data[this.length-1] = this.data[length]
    }
    this.data[i] = value;
  }
  this.data[index] = value;

  this.length++;
  return this;

  //End of method
};


  //End of Class
}
