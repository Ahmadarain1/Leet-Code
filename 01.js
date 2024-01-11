let nums = [4,9,8,6,7,3,4,5,2,9];

function checknum(nums){
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1 ; j<nums.length ; j++){
        if(nums[i] === nums[j]){
            return true;
        }
    }
}
    return false
}

let result = checknum(nums);
console.log(result);