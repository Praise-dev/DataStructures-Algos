function  rotateArray(arr, k){
    for(let i=0; i<= k; i++){
            let curr = arr[i];
            arr[i] = arr[k+1 +i];
            arr[k+1+i] = curr;
    }
    return arr;
};