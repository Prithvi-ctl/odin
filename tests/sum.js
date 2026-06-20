function sum(a,b){
    return a+b;
}

function capitalize(str){
    return str.toUpperCase();
}
function reverse(str){
    let rev = str.split("").reverse().join("");
    return rev;
}

const calculator = {
    add: function(a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a-b; 
    },
    multiply: function(a,b){
        return a*b;
    }

}

module.exports = {
    sum: sum,
    capitalize: capitalize,
    reverse:reverse,
    calculator: calculator
};