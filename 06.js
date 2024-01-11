let nums = [-1,1,0,-3,3];

function check(nums){
    let count = 1;
    let values = [];
    for (let i=0;i<nums.length;i++){
      
        values.push(count);
        count = count*nums[i];
    }
    let count2 = 1;
    for(let i=nums.length-1 ; i>=0 ;i--){
        values[i] = count2*values[i];
        count2 = count2*nums[i];
    }
    return values;
}

let result = check(nums);
console.log(result);