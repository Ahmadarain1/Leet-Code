let str = ["eat","tan","bat","abt"];
let value;

function isanagram(str , value){

    for(let i=0 ; i<str.length ; i++){
        for(let j=i+1 ; j<str.length ; j++){
            let word1 = str[i].split("").sort().join("");
            let word2 = str[j].split("").join("");

            if(word1 === word2){
               value =   "["+word1+","+word2+"]";
            }
        }
    }
    return value;
}

let result = isanagram(str);
console.log("["+result+"]");