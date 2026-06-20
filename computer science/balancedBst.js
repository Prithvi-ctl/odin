class Node{
    constructor(data)
{
    this.data = data;
    this.left = null;
    this.right = null   ;
}}

class Tree {
    constructor(array){
        this.array = array;
        this.root = this.buildTree(array,0,array.length-1);

    }

    buildTree(array,start,end){
           
        if(start > end) return null;

        const mid = Math.floor((start + end) / 2);
    //function that returns the height of the node 
        const node = new Node(array[mid]);

        node.left = this.buildTree(array,start,mid-1);
        node.right = this.buildTree(array,mid+1,end);

        return node;
    }

    includes(value){

        let current = this.root;
        while(current !== null){
            if(value === current.data) return true;
            else if(value < current.data) current = current.left;
            else current = current.right;
        }
        return false;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return;
        }

        let current = this.root;
        while(true){
            if(value < current.data){
                if(current.left === null){
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    successorFinder(node){
        let current = node.right;
        while(current.left !== null){
            current = current.left;
    }     return current;
    }
    deleteItem(value){
        this.root = this._deleteRec(this.root,value);
    }
       
        _deleteRec(node,value){
            if(node === null) return null;

            if(value < node.data){
                node.left = this._deleteRec(node.left,value);
            }
            else if(value > node.data){
                node.right = this._deleteRec(node.right,value);
            }
            else{
            if(node.left === null && node.right === null){
                return null;
            }
            else if(node.left === null){
                return node.right;
            }
            else if(node.right === null){
                return node.left;
            }
            else{
                const sucessor = this.successorFinder(node);
                node.data = sucessor.data;
                node.right = this._deleteRec(node.right,sucessor.data);
            }
        }
        return node;
        

       
    }
    levelorderTraversal(callback){
        if(this.root === null) return;

        
        const queue =[this.root];

        while(queue.length !== 0){
            const current = queue.shift();
           
           
            callback(current.data);

            if(current.left !== null) queue.push(current.left);
            if(current.right !== null) queue.push(current.right);
            
        }
    
        
    }

    inodrderTraversal(callback){
        if(!callback) throw "super error";
        function traverse(node){
            if(node === null ) return;
            traverse(node.left);
            callback(node.data);
            traverse(node.right);
        }
        traverse(this.root);
    }

    preorderTraversal(callback){
        if(!callback) throw "super error";

        function traverse(node){
            if(node === null ) return;

            callback(node.data);
            traverse(node.left);
            traverse(node.right);
        }
        traverse(this.root);    
    }

    postorderTraversal(callback){
        if(!callback) throw "super error";

        function traverse(node){
            if(node === null ) return;

            traverse(node.left);
            traverse(node.right);
            callback(node.data);
        }
        traverse(this.root);        
    }

//           8
//         /   \
//        4     12
//       /
//      2
    height(value){  
        const node = this.search(value);
        if(node === null) return -1;

        const left = this.height(node.left);  //4 -> 2 -> null -> return -1 -> removes 2 from callstack, goes back to 4 left is -1 since we just returned that,
        //then goes to 4 right which is null , returns -1, the we are back to 4 and we return 1 + max(-1,-1) which is 0, then we are back to 8 it checks left = this.height(node.left) which is 0, a
        // nd we go to 8 right which is 12, then we go to 12 left which is null, returns -1, then we go to 12 right which is null, returns -1, then we are back to 12 and we return 1 + max(-1,-1) which is 0, then we are back to 8 and we return 1 + max(0,0) which is 1
        const rightHeight = this.height(node.right);

        return 1 + Math.max(left,rightHeight);

    }

    depth(value){
        const node = this.root;
        let depth = 0;
        if(node === null) return -1;
        while(node !== null){
            if(value === node.data) return depth;
            else if(value < node.data) node = node.left;
            else node = node.right;
            depth++;
        }
        return -1;
        
    }
    isBalanced(node = this.root){
      


        if(node == null) return true;

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        if(Math.abs(leftHeight - rightHeight) > 1) return false;

        return this.isBalanced(node.left ) && this.isBalanced(node.right);

        
    }

    isBalanced(node = this.root){
        function checkBalance(node){
            if(node === null) return 0;

            const leftheight = checkBalance(node.left);
            if(leftheight === -1) return -1;


            const rightheight = checkBalance(node.right);
            if(rightheight === -1) return -1;

            if(Math.abs(leftheight - rightheight) > 1) return -1;

            return 1 + Math.max(leftheight,rightheight);
        }
        return checkBalance(node) !== -1;
    }

    rebalance(){
  
        const array = [];
        this.inodrderTraversal((value) => array.push(value));
        this.root = this.buildTree(array,0,array.length-1);
        return array;
    }
}





const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null || node === undefined) {
    return;
  }

  prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
}





export {Tree, prettyPrint};