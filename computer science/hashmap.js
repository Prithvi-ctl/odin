class HashMap{
    constructor(loadfactor){
        this.capacity = 12;
        this.size = 0;
        this.loadfactor = loadfactor;
        this.threshold = Math.floor(this.capacity * this.loadfactor);
        
        
        
        
        this.buckets = new Array(Math.floor(this.capacity)).fill(null);
    }

    hash(key){
        let hash = 0;
        const primeNumber = 31;
        for(let i = 0; i < key.length; i++){
            hash = (hash * primeNumber + key.charCodeAt(i)) % this.capacity;
        }
        return hash;
    }
    resize(){
        this.capacity *= 2;
        this.threshold = Math.floor(this.capacity * this.loadfactor);
        const oldBuckets = this.buckets;
        this.buckets = new Array(this.capacity).fill(null);
    }

    set(key,value){
                const index = this.hash(key);

        if(this.size >= this.threshold){
            this.resize();
        }
            
        let oldvalue = null;
        if(this.buckets[index] != null){
            oldvalue = this.buckets[index].value;
        
        }
        
        
        const newNode = new HashNode(key,value);
        this.buckets[index] = newNode;
        this.size++;
        
        return `old value: ${oldvalue} new value: ${value} key: ${key} Index: ${index}`;
    
    }
    get(key){
        const index  = this.hash(key);
        if(this.buckets[index] != null){
            return this.buckets[index].value;
        }
        return null;    
    }

    has(key){
        const index = this.hash(key);
        if(this.buckets[index] != null){
            return true;
        }
        return false;    
    }
    remove(key){
        const index = this.hash(key);
        if(this.buckets[index] != null){
            this.buckets[index] = null;
            return true;
        }
        return false;    
    }
    length(){
        
        let length = 0;
        for(let i = 0; i < this.capacity; i++){
            if(this.buckets[i] != null){
                length++;
            }
        }
        return length;
    
    }

    clear(){
        this.buckets = new Array(this.capacity).fill(null);
    }

    keys(){
        const keyss = [];
        for(let i = 0;i<=this.capacity;i++){
            if(this.buckets[i] != null){
                keyss.push(this.buckets[i].key);
            }
        }
        return keyss;
    }
    values(){
        const valuess = [];
        for(let i = 0;i<= this.capacity;i++){
            if(this.bucket[i] != null){
                valuess.push(this.buckets[i].value);
            }
        }
        return valuess;
    }
}

class HashNode{
    constructor(key,value){
        this.key = key;
        this.value = value;
        this.nextNode = null;
    }   
}



const hpp =  new HashMap(0.75,16);
console.log(hpp.set("name","John"));
console.log(hpp.get("name"));
console.log(hpp.has("name"));
console.log(hpp.length());
console.log(hpp.remove("name"));
console.log(hpp.has("name"));
console.log(hpp.length());

export default HashMap;

