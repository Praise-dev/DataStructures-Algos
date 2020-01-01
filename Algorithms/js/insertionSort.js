// function insertionSort(array) {
//   const length = array.length;
//   for (let i=0; i<length; i++){
//     if(array[i] < array[0]){
//       //move number to the first position
//       array.unshift(array.splice(i,1)[0]);
//     }
//   else{
//     //find where number should go
//     for(let j = 1; j<i; j++){
//       if(array[i] > array[j-1] && array[i] < array[j]){
//         //move number to the right spot
//         array.splice(j,0,array.splice(i,1)[0]);
//       }
//     }
//   }
// }
//   return array;
// }
//

//[5,3,1,8,0,88,19]

function insertionSort(array){
  for (i=1; i < array.length; i++){
    let curr = arr[i];
    let j = i - 1;
    while (j >=0 && arr[j] > curr){
      arr[j+1] = arr[j];
      j--
    }
    arr[j + 1] = curr;
  }
  return array;
}
