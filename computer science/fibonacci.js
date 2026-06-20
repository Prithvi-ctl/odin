function fibonacci(n){
    let a = 0;
    let b = 1;
    const result = [];


    for(let i = 0; i <= n; i++){
        result.push(a);
        let c = a + b;
        a = b;
        b = c;
    }
    console.log(result);
    return result;  


}
fibonacci(10);



function fiboRes(n){
    if(n===0 || n===1){
        return n;
    }
    return fiboRes(n-1) + fiboRes(n-2);
}
module.exports = { fibonacci, fiboRes };