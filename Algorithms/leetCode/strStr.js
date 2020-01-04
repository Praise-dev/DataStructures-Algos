function strStr(needle, haystack){
    //me, omega
    if(needle.length > haystack.length){
        return -1;
    }
    else if(!needle || !haystack){
        return 0;
    }else{
        let start = 0;
       for (let i=0; i<= haystack.length; i++){
           if (haystack.charAt(i) == needle.charAt(0)){
               if(haystack.slice(i, i+1) == needle){
                   return i;
               }
               for (let j=1; j<needle.length; j++){
                   if (haystack.charAt(i+j) == needle.charAt(j)){
                       if(haystack.slice(i, i+j+1) == needle){
                           return i;
                       }
                       continue;
                   }
               }
           }
       }
    }//end of else
      return false;

}
