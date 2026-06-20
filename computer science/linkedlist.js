class LinkedList{
    constructor(){
        this.head = null;
    }

    append(value){
        const node = new Node(value);

        if(this.head == null){
            this.head = node;
            return;
        }

        let currentNode = this.head;
        while(currentNode.nextNode != null){
            currentNode = currentNode.nextNode;
        }

        currentNode.nextNode = node;
    }
    prepend(value){
        const node = new Node(value);
        
        node.nextNode = this.head;
        this.head = node;
    }

    size(){
        let count = 0;
        let currentNode = this.head;

        while(currentNode != null){
            count++;
            currentNode = currentNode.nextNode;
        }
        return count;
    }

    heead(){
        if(this.head == null) return undefined;
        return this.head.value;
    }

    tail(){
        let currentNode = this.head;
        while(currentNode.nextNode != null){
            currentNode = currentNode.nextNode;
        }
        return currentNode.value;
    }

    at(index){
        let currentNode = this.head;
        for(let i = 0; i < index; i++){
            if(currentNode == null) return "undefined";
            currentNode = currentNode.nextNode;
            

        }
        return currentNode;
}
    pop(){
        if(this.head == null) return undefined;

        
        let tempValue = this.head;
        this.head = this.head.nextNode;

        tempValue.nextNode = null;

        return tempValue.value;


    }

    contains(value){
        let currentNode = this.head;

        while(currentNode != null){
            if(currentNode.value == value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    findIndex(value){
        let currentNode = this.head;
        let index = 0;

        while(currentNode != null){
            if(currentNode.value == value) return index;
            currentNode = currentNode.nextNode;
            index++;
        }
        return null;    
    }

    toString(){
        let currentNode = this.head;
        let string = "";
        
        while(currentNode != null){
            string += `(${currentNode.value}) -> `;
            currentNode = currentNode.nextNode;
        }
        string += "null";
        return string;
    }

    insertAt(index,...values){

        
        let templast = null;
        let tempcurrent = null;
        
        let currentNode = this.head;
        for(let i = 0;i<= values.length;i++){
            currentNode = currentNode.nextNode;   
        }
            tempcurrent = currentNode.nextNode;
        for(let i = 0;i <values.length;i++){
            const node = new Node(values[i]);
            currentNode.nextNode = node;
            node.values[i].nextNode = node.values[i+1];
            templast = node.nextNode;

        }
        templast.nextNode = tempcurrent;
        
        
        
        
    }
}
 


class Node{
    constructor(value = null){
        this.value = value;
        this.nextNode = null;
    }
}

let test =  new LinkedList();
// test.append(1);
// test.append(2);
// test.append(3);
// test.append(4);
// test.append(5);

// console.log(test.toString());
// console.log(test.size());

// console.log(test.tail());
// console.log(test.at(2));
// console.log(test.pop());
// console.log(test.toString());
// console.log(test.contains(3));
// console.log(test.findIndex(4));
// console.log(test.heead())

console.log(test.insertAt(2, 6, 7, 8));