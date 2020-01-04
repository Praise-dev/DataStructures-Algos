<<<<<<< HEAD
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
=======
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
>>>>>>> c0979982109176fab040f1611a0abdb6eee2ff69
