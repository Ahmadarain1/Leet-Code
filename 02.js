let word1 = "ahmad";
let word2 = "hamad";

function anagram(word1 ,word2){
    if(word1.length !==  word2.length)
    {
    return false
}else
{
    const str1 = word1.split('').sort().join('');
    const str2 = word2.split('').sort().join('');

    return str1 === str2;
}
}
let result = anagram(word1,word2);
console.log(result);