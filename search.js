const lyrics = "tumi bondhu kala pakhi ami jeno ki bosonto kale jeno bolte pari ni, sada sada kala kala rong jomeche sada kala";
const searhStr = 'pakhi';
const searStrLower = searhStr.toLowerCase();
const searchLower = lyrics.toLowerCase();
// console.log(searchLower);
console.log(searStrLower);
const toExistStr = searchLower.includes(searStrLower)
// console.log(toExistStr);
// akliner moddhe korar jnoo 
const toExistStrOneLine = lyrics.toLowerCase().includes(searhStr.toLowerCase());
// console.log(toExistStrOneLine)

// indexOf
console.log(lyrics.indexOf("kala"))

// kono string er moddhe kono word ace ki na setar jonno othoba string er moddhe kono word na thakle setar value : -1 jeno na dey setar jonoo if condition use korte pari.............

if(lyrics.indexOf('sadada') !== -1){
    console.log('exist find the string')
}
else{
    console.log('cannot find the string')
}

// startWith---surute kono string er word ace ki na setar jnno-- thakle :true-
console.log(lyrics.startsWith('2mi'));

const bookEx = "fevourite.pdf";
const otherFile = 'photo.png';
console.log(bookEx.endsWith('pdf'))