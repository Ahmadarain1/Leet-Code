let nums = [1,1,1,2,2,3,3]
let k =2;
function frequentele(nums, k){  
  let count=1;
  const countarr=[];
    for (let i=0;i<nums.length ; i++){
       if (nums[i]==k){
            countarr.push(count++);
        }
    }
    return countarr;
}

let result = frequentele(nums,k);
console.log(result);