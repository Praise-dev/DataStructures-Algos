<<<<<<< HEAD
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function bubbleSort(array){
  const length = array.length
  for(let i=0; i < length; i++){
    for(let j=0; j< length; j++){
      if (array[j] >= array[j+1]){
        let holdingVar = array[j];
        array[j] = array[j+1];
        array[j+1] = holdingVar;
    }
    }
  }
  return array;
}
=======
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
function bubbleSort(array){
  const length = array.length
  for(let i=0; i < length; i++){
    for(let j=0; j< length; j++){
      if (array[j] >= array[j+1]){
        let holdingVar = array[j];
        array[j] = array[j+1];
        array[j+1] = holdingVar;
    }
    }
  }
  return array;
}
>>>>>>> c0979982109176fab040f1611a0abdb6eee2ff69
