const lyrics = "tumi bondhu kala pakhi ami jeno ki bosonto kale jeno bolte pari ni, sada sada kala kala rong jomeche sada kala";
const spl = lyrics.split(' ');
const split = lyrics.split('.');
const sentence = lyrics.split('')
// console.log(spl);
// console.log(split);
// console.log(sentence)
const partial = lyrics.slice(2,8);
// console.log(partial)

// join()
const newSong = [
    'tumi bondhu kala pakhi ami jeno ki',
    'bosonto kale jeno bolte pari ni', 'sada sada kala kala rong jomeche sada kala'
  ];
  const newJoin = newSong.join('. ');
//   console.log(newJoin)

let str = "Hello world!";
let result = str.substring(2, 3);