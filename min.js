///this is alll about method overriding  where a child class overrides the parent class with new content as show below
class cars {
    constructor(passangers){
        this._passanger =passangers;
    }
    motion(){
        console.log(`${this._passanger} passagers use this vechicle`);
    }
}
class BMW  extends cars{
    speed(){
        console.log(`moves at 200Km/hr`);
    }
    motion(){

        
        // super.motion() if u wish to asses the parent method  uncommet this line  and run it

        console.log(`moves from Mbale to kampala with ${this._passanger} people`)
    }
}

let bmw1 = new BMW(20);
//this is all about overriding the method
bmw1.motion() // moves from Mbale to kampala with 20 people 
console.log(bmw1._passanger)