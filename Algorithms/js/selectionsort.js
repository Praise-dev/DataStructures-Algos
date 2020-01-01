//selection sort
// function selectionSort(array){
//   for (let i=0; i<array.length; i++){
//     let min = i;
//     let currentVar = array[i];
//     for(let j=1; j<array.length; j++){
//       if(array[min] > array[j]){
//         min = j;
//       }
//     }
//     array[i] = array[min];
//     array[min] = currentVar;
//   }
//   return array;
// }
//[8,2,4,1]
function selectionSort(array){
  for (let i=0; i<array.length; i++){
    let min = i;
    let currentVar = array[i];
    for(let j=i+1; j<array.length; j++){
      if(array[min] > array[j]){
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = currentVar;
  }
  return array;
}
