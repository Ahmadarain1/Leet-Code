let nums = [100,4,200,1,3,2];

function lc(nums){
    const myset  = new Set(nums);
    let count = 1;
    for(let num of myset){
        if(myset.has(num-1)){
            continue;
        }
        //let count2 = 1;
        while(myset.has(num+1)){
            count++;
            num++;

        }
        count = Math.max(count);
    }
    return count;
}

let result = lc(nums);
console.log(result);