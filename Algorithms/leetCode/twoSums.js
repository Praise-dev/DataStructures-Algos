//Given an array of integers, return indices of two elements that sum up to a target integers

//[1,2,3,4], 4
function twoSums(array, target){
  const length = array.length;
  if(typeof(array) === 'object' && target){
    for(i=0; i<length; i++){
      for(j=i+1; j<length; j++){
        if(array[i] + array[j] === parseInt(target)){
          let indices =  '['+ i + ', ' + j + ']'
          return indices;
        }
      }
    }
      return ('Oops! no element sums the target');
  }
  return ('Check if input is of JS type array');
}
