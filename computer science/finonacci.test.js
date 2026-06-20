    const {fibonacci,fiboRes}  = require('./fibonacci');

    test("fibonacci of 10",()=>{
        expect(fibonacci(10)).toEqual([0,1,1,2,3,5,8,13,21,34,55])
    }
    )


    test("fibonacci of 10 using recursion",()=>{
        expect(fiboRes(10)).toBe(55);
    }
    )