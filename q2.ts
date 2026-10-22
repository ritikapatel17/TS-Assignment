class  Product {
     productID:number
     name:String
      price:number
       category:String

       constructor(productID:number,name:String,price:number,category:String){
        this.productID=productID
        this.name=name
        this.price=price
        this.category=category
       }

        displayInfo(){
            console.log(this.productID+" "+this.name+" "+this.price+" "+this.category);
            
        }
}

const a = new Product(1, "Laptop", 50000, "Electronics")
const b = new Product(2, "T-Shirt", 500, "Clothing");
const c = new Product(3, "Rice", 100, "Grocery");

a.displayInfo();
b.displayInfo();
c.displayInfo();