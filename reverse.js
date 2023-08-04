//  akti string er index ber kore punoray bam dik theke sajano 
function isCorrect(string){
    let result = '';
    for(let i = 0; i < string.length; i++){
        const element = string[i];
        result = result + element;
        console.log(element , result)
    }
  return result;
}
const correctString =' i am a good boy';
const correct = isCorrect(correctString); 
console.log(correct);
//  akti string er index ulto dik theke ber kore ulto dik theke sajano
function isReverse(text){
    let resurved = '';
    for(let i = text.length-1; i >= 0; i--){
        const element = text[i];
        resurved = resurved + element;
        console.log(element , resurved);
    }
  return resurved;
}
const reversString1 =' i am a good boy';
const reverse1 = isReverse(reversString1); 
console.log("reverse output: " , reverse1)