//[9,11,8,2,3,4]
function maxProfit(stockPrice){
  let maxdict = [];

function findMaxofEachPrice(index){
    let difference = [];
    let price = stockPrice[index];

    for(let i = index +1; i< stockPrice.length; i++){
        difference.push(Math.floor(Math.abs(price - stockPrice[i])));
      }
      maxdict.push(max(difference));
    }
  function max(arr){
      let max = arr[0];
      for (i=0; i<arr.length; i++){
          if( max <= arr[i]){
            max = arr[i];
          }
      }
      return max;
    }
for (let j= 0; j < stockPrice.length-1; j++){
    findMaxofEachPrice(j);
}
    return max(maxdict);
}
