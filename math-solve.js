const number =Math.pow(2, 8);
// console.log(number)

const male = 28;
const female = 38;
const gap =Math.abs( male - female);
// console.log(gap)
if(gap < 5){
    // console.log('you guys can be friends!')
}
else{
    // console.log('you guys stay apart!')
}

// console.log()


// round---dosomik songkha thakle seta ke purno songkhay rupantor
const number1 = 2.500;
const fullNumber = Math.round(number1);
// console.log(fullNumber);
// ceil---dosomik er por kono songkha thakle seta k purno songkhay rupantor kore
const number2 = Math.ceil(2.000001);
// console.log(number2);
const number3 = 4.0001;
// console.log(Math.floor(number3)) 

//random--- kotha poriborton korar moto akta sorto palon kore 
// console.log(Math.random(number3))
for(let i = 0; i < 20; i++){
    const random = Math.round(Math.random()*100);
    console.log(random);
};