function reverseWords(str){
    let words = str.split(' ')
    // console.log(words)
    let result = [];
  
    for(let i = words.length-1; i>= 0; i--){
        let element = words[i];
        // console.log(element)
        result.push(element);
    }
    console.log(result)
    const reverse = result.join(' ')
    console.log(reverse)
    return reverse;
}
const myString = 'i am a good boy';
reverseWords(myString);