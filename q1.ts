class Emp{
    id:number
    name:String

    constructor(id:number,name:String){
        this.id=id
        this.name=name
    }
    display(){
        console.log(this.name+ ""+this.id);
        
    }
}

const e = new Emp(1,"Tom")
e.display();