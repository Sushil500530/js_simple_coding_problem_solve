const jim = 85;
const dela = 97;
const hanny = 75;
if(jim > dela){
    console.log("jim will get the cake!")
}
else{
    console.log('dela will get the cake!')
}

// if(jim > dela && jim > hanny){

//     console.log("jim will get the cake")
// }
// else if(dela > hanny && dela > jim){
//     console.log('dela will get the cake')
// }
// else{
//     console.log('hanny will get the cake')
// }

//  many numbers find of max number use function 
function mx(number){
    console.log(number,'is max number')
    return number;
}
let maxNumber = Math.max(45, 545, 84, 65, 88, 46, 666, 544, 922, 262, 5555);
 mx(maxNumber);
//  find min number in many numbers 
function minNum(number2){
    console.log(number2, 'is min number');
    return number2;
}
const minNumber = Math.min(15, 585, 454, -4, 54, -882, 254, -155);
 minNum(minNumber);
