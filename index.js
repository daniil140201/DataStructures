class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(data){
        const node = new Node(data, null);
        if(this.tail){
            this.tail.next = node;
        }
        if(!this.head){
            this.head = node;
        }
        this.tail = node;
    }
    prepend(data){
        const node = new Node(data, this.head);
        this.head = node;
        if(!this.tail){
            this.tail = node;
        }
    }
    toArray(){
        let current = this.head;
        let result = [];
        while(current !== null){
            result.push(current);
            current = current.next;
        }
        return result
    }
}
