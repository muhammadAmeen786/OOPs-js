class Ameen {
    #a = 23; // this is the private variable and can't be accessed outside this class.
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
print(){
    console.log(this.a +" " + this.b+"'s" + " age is " + this.#a);
    // this will print ameen dar's age is 23.
}
}

let obj1 = new Ameen('ameen','dar'); // this will create a new object.
obj1.print(); // if this print was declared like #print() it would have been not possible. to access it.