let nums = [1,2,3,4,5]
let target = 9;

function sum(nums , target){

for(let i=0; i<=nums.length;i++){
    for(let j=i+1;j<=nums.length;j++){
        if( nums[i]+ nums[j] === target){
            return [i,j]; 
        }
    }
}
}
let result = sum(nums , target)
console.log(result);
