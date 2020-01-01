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
