<<<<<<< HEAD
class HashTable{
constructor(size){
  this.data = new Array(size);
}


_hash(key){
  let hash = 0;
  for (let i =0; i < key.length; i++){
    hash = (hash + key.lenght[i] *  i) % this.data.length
  }
    return hash;
}

set(key, value) {
  let address = this._hash(key);
  if (!this.data[address]){
    this.data[address] = [];
  }
  this.data[address].push([key, value])
}

get(key){
  let address = this._hash(key);
  const currentBucket = this.data[address];
  if (currentBucket){
    for(let i =0; i<currentBucket.length; i++){
      if(currentBucket[i][0] === key){
        return currentBucket[i][1];
      }
    }
  }
}

keys(){
  const All_keys = []
  this.data.forEach(function(key) {
    All_keys.push(key[0][0])
  }
  return All_keys
  }
}
=======
class HashTable{
constructor(size){
  this.data = new Array(size);
}


_hash(key){
  let hash = 0;
  for (let i =0; i < key.length; i++){
    hash = (hash + key.lenght[i] *  i) % this.data.length
  }
    return hash;
}

set(key, value) {
  let address = this._hash(key);
  if (!this.data[address]){
    this.data[address] = [];
  }
  this.data[address].push([key, value])
}

get(key){
  let address = this._hash(key);
  const currentBucket = this.data[address];
  if (currentBucket){
    for(let i =0; i<currentBucket.length; i++){
      if(currentBucket[i][0] === key){
        return currentBucket[i][1];
      }
    }
  }
}

keys(){
  const All_keys = []
  this.data.forEach(function(key) {
    All_keys.push(key[0][0])
  }
  return All_keys
  }
}
>>>>>>> c0979982109176fab040f1611a0abdb6eee2ff69
