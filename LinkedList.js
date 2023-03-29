# LinkedList

class Node{ // Create a new node class
    constructor (value, nextNode =null){ //constructor for Node class, where value is the value passed on to it and nextNode is null
        this.value = value; //the value of our current this. node is thte value passed to it
        this.nextNode = nextNode; //the value of our nextNode is null by dfault
    }
}

class LinkedList{   //linked list class
    constructor(){  //Constructor
        this.head = null //head is null by default when initialized
        this.size = 0;    //size is zero by default when initialized
    }

    append(data){    //append function
        this.head = new Node(data, this.head);    //create a new Node and set the value to whatever data was passed, sets nextNode as head?
        this.size++   //increases size of linked list var
    }

    prepend(data){
        let tail = new Node (data) //create new Node from data received
        let current;   //Initialize variable
        if (this.size === 0){ this.append(data)}   //if our linkedlist object is empty, append our data as the first element
        else{
            current = this.head  //Otherwise let our current Node be the head of the Linked List
            while (current.nextNode !== null) {   //While the NextNode value is not equal to null
                current = current.nextNode   // Let our current Node be the next Node
            }
            current.nextNode = tail   //When while loop ends (our Linked List found the node with empty value) 
            this.size++                           //append the nextNode value to our locally created tail node
        }
    }

    returnsize(){
        console.log(this.size)
    }

    returnhead(){
        console.log(this.head)
    }

    returntail(){  //Repeat the same methodology as prepend, this time we dont need to do anything to LL
        let final // final node in our LL
        let current = this.head
        while (current.nextNode !== null){
            current = current.nextNode
        }
        final = current
        console.log(final)
        
    }

    atIndex(index){
        // console.log(this.head.value)
        if (index <= 1){return this.head}    ///  node.val = 1     =>     node.val  =2   => node.val = 3 ===>  null                                                        index = 3
        if (index > this.size) {return console.log('Invalid index')}   //If index is greater than LL size
        let current = this.head
        while (current.value !== index){
            current = current.nextNode            
        }
        console.log(current)
        
    }

    pop(){
        let current = this.head;
        let previous
        while (current.nextNode !== null) {
            previous = current
            current = current.nextNode
        }
        previous.nextNode = null
        this.size--
    }

    contains(myValue, current = this.head, count = 0) {
        if (current === null) return console.log(null)
        if (myValue === current.value){
            return console.log(`true, index: ${count}`)
        }
        this.contains(myValue, current.next, ++count)
    }

    toString(){
        let current = this.head
        let counter = 0

        console.log("Your Linked List: ")
        while (counter < this.size) {
            console.log(`(    ${current.value}  ) = >`);
            counter++
            current = current.nextNode
        }
        console.log(' null')
    }
}; 

const myLinkedList = new LinkedList(); // test 
myLinkedList.append(1)  //Works
myLinkedList.prepend(2)  //Works
myLinkedList.prepend(3)
myLinkedList.prepend(4)
myLinkedList.prepend(5)  //Works
myLinkedList.toString();
// myLinkedList.returnsize() //works
// myLinkedList.returnhead()  //Works
// myLinkedList.returntail()   //Works
// myLinkedList.atIndex(4);   //Works
// console.log(myLinkedList)
// myLinkedList.pop()
// myLinkedList.contains(1);   //Doesnt work
// console.log(myLinkedList)


//Missing the find and contains functions
