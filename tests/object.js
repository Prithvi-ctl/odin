const object = analyzeArray([1,8,3,4,2,6]);

object == {
   average: 4,
   min: 1,
   max: 8,
   length: 6
};


function analyzeArray(array){
    let sum = 0;
    let min = array[0];
    let max = array[0];

    for(let i = 0; i < array.length; i++){
        sum += array[i];
        if(array[i] < min){
            min = array[i];
        }
        if(array[i] > max){
            max = array[i];
        }
}

let average = sum/array.length;

return {
    average: average,
    min: min,
    max: max,
    length: array.length}
    

}
module.exports= analyzeArray;
