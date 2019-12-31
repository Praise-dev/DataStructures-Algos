
function recurring(arr) {
  if (arr){
  map = {}
  for(let i=0; i < arr.length; i++){
    if(map[arr[i]]){
      console.log("Recurring number = " + map[arr[i]] +': '+ i);
      break;
    }
    map[arr[i]]= arr[i];
  }
  }
}

recurring([2,5,1,2,3,5,1,2,4])


//second solution

function recurr(arr){
  if (arr){
    for(let i=0; i<arr.length; i++){
      for(let j= i+1; j<arr.length; j++){
        if( arr[i] === arr[j]){
          console.log("Recurring number = " + arr[j] +':' + j);
          break;
        }
      }
    }
  }
}
recurring([2,5,1,2,3,5,1,2,4])
