duplicateNumbers((nums, i=1) =>{
    if(i > nums.length){
      return nums;
    }
    if (nums[i] === nums[i-1]) {
      nums.splice(i,1);
      i++;
      console.log(nums)
      return duplicateNumbers(nums, i);
    }
});
