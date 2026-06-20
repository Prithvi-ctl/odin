import {Tree, prettyPrint} from './balancedBst.js';

// const randomArray = 


function generateRandomArray(size){
    const max = 99;
    const min = 1;
    const array = [];
    for(let  i=0;i<size;i++){
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
}




const tree = new Tree(generateRandomArray(12));
console.log(prettyPrint(tree.root));
console.log(tree.isBalanced());
console.log(tree.preorderTraversal((data) => console.log(data)));
console.log(tree.inodrderTraversal((data) => console.log(data)));
console.log(tree.postorderTraversal((data) => console.log(data)));
tree.insert(101);
console.log(prettyPrint(tree.root));

tree.insert(102);
console.log(prettyPrint(tree.root));

tree.insert(103);
console.log(prettyPrint(tree.root));
console.log(tree.isBalanced());
console.log(tree.rebalance());
console.log(tree.isBalanced());
console.log(prettyPrint(tree.root));
console.log(tree.preorderTraversal((data) => console.log(data)));
console.log(tree.inodrderTraversal((data) => console.log(data)));
console.log(tree.postorderTraversal((data) => console.log(data)));