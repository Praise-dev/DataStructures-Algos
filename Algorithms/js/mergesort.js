<<<<<<< HEAD
function mergeSort (array){
  if(array.length === 1){
    return array;
  }
  const length = array.length;
  const middle = Math.floor(length/2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  console.log('left', left);
  console.log('right', right);

    return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.index){
    if (left[leftIndex] < right[rightIndex]){
      result.push(left[leftIndex]);
      leftIndex;
    }else {
      result.push(right[rightIndex]);
      rightIndex++
    }
  }
    return result.concat(left.slice(leftindex)).concat(right.slice(rightIndex));
}
=======
function mergeSort (array){
  if(array.length === 1){
    return array;
  }
  const length = array.length;
  const middle = Math.floor(length/2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  console.log('left', left);
  console.log('right', right);

    return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.index){
    if (left[leftIndex] < right[rightIndex]){
      result.push(left[leftIndex]);
      leftIndex;
    }else {
      result.push(right[rightIndex]);
      rightIndex++
    }
  }
    return result.concat(left.slice(leftindex)).concat(right.slice(rightIndex));
}
>>>>>>> c0979982109176fab040f1611a0abdb6eee2ff69
