<<<<<<< HEAD
 let words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  //<-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
]

//O(n) solution
function rotationPoint(arr){
  let wordDict = {};
  let p = 0;
  for (let i=0; i< arr.length; i++){
    wordDict[i] = arr[i];
  }
    for (let j=1; j< arr.length; j++){
        if(arr[j][0] < wordDict[p][0]){
          return j;
        }
        p++;
    }
  }

//log(O(n))
function rotationPointrecur(arr, start= 0, end=arr.length-1){
  let pointer = Math.floor((start + end)/2);
  if (start >= end || (end - start) == 1){
    return;
  }
      if (arr[pointer][0] > arr[pointer-1][0]){
        start = pointer;
        console.log(start, end);
        return rotationPointrecur(arr, start)
    }

      if (arr[pointer][0] === arr[pointer-1][0]){
        start = pointer;
        console.log(start, end);
        return rotationPointrecur(arr, start)
      }

      else if(arr[pointer][0] < arr[pointer-1][0]){
        return pointer;
      }
  }
=======
 let words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  //<-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
]

//O(n) solution
function rotationPoint(arr){
  let wordDict = {};
  let p = 0;
  for (let i=0; i< arr.length; i++){
    wordDict[i] = arr[i];
  }
    for (let j=1; j< arr.length; j++){
        if(arr[j][0] < wordDict[p][0]){
          return j;
        }
        p++;
    }
  }

//log(O(n))
function rotationPointrecur(arr, start= 0, end=arr.length-1){
  let pointer = Math.floor((start + end)/2);
  if (start >= end || (end - start) == 1){
    return;
  }
      if (arr[pointer][0] > arr[pointer-1][0]){
        start = pointer;
        console.log(start, end);
        return rotationPointrecur(arr, start)
    }

      if (arr[pointer][0] === arr[pointer-1][0]){
        start = pointer;
        console.log(start, end);
        return rotationPointrecur(arr, start)
      }

      else if(arr[pointer][0] < arr[pointer-1][0]){
        return pointer;
      }
  }
>>>>>>> c0979982109176fab040f1611a0abdb6eee2ff69
