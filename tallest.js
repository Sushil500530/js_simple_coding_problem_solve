// find the maximum number in array use function 
function maxInArray (number){
    let largest = number[0];
    console.log('inside the array', number);
    for(let i = 0; i < number.length; i++){
        
        const index = i;
        const element = number[index];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const arrayNumber = [167, 190, 120, 165, 137,220, 451, 252, 52, 300, 41, 99];
const tallestNumber = maxInArray(arrayNumber);
console.log("tallest person is: ", tallestNumber);
//  find min number in arrays used function 
function minInArray (number){
    let lowest = number[0];
    console.log('inside the array', number);
    for(let i = 0; i < number.length; i++){
        
        const index = i;
        const element = number[index];
        if(lowest > element ){
            lowest = element;
        }
    }
    return lowest;
}
const arrayNumber1 = [167, 190, 120, 165, 137,220, 10,  451, 252, 52, 300, 41, 99, 15,55];
const tallestNumber1 = minInArray(arrayNumber1);
console.log("tallest person is: ", tallestNumber1);