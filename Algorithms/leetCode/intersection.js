<<<<<<< HEAD
function intersection(arr1, arr2){
  let intersec = [];
  let numMap = {}
  for(num of arr1){
    numMap[num] = num;
  }

  for (let i=0; i<arr2.length; i++){
    if(numMap[arr2[i]]){
      intersec.push(arr2[i]);
    }
  }
    return intersec;
}
=======
function intersection(arr1, arr2){
  let intersec = [];
  let numMap = {}
  for(num of arr1){
    numMap[num] = num;
  }

  for (let i=0; i<arr2.length; i++){
    if(numMap[arr2[i]]){
      intersec.push(arr2[i]);
    }
  }
    return intersec;
}
>>>>>>> c0979982109176fab040f1611a0abdb6eee2ff69
