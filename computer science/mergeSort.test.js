const {mergeSort, merge} = require('./mergeSort');

test("merge sort",()=>{
    expect((mergeSort([38, 27, 43, 3, 9, 82, 10]))).toEqual([3, 9, 10, 27, 38, 43, 82]);

    
})