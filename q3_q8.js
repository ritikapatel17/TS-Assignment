"use strict";
// Q3
class Product {
    productID;
    name;
    price;
    category;
    static companyName = "SmartTech";
    constructor(productID, name, price, category) {
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    displayInfo() {
        console.log("Product Details: ");
        console.log("ID: " + this.productID);
        console.log("Name: " + this.name);
        console.log("Price: " + this.price);
        console.log("Category: " + this.category);
    }
    // Q4
    static displayCompany() {
        console.log("Company Name: " + this.companyName);
    }
    // Q5
    calculateDiscount() {
        const discountAmt = this.price * 0.05;
        console.log("Product Name: " + this.name);
        console.log("Discount will be of : " + discountAmt);
    }
}
const p = new Product(101, "Face Wash", 350, "Skincare");
const p1 = new Product(102, "Smartphone", 25000, "Electronics");
const p2 = new Product(103, "Teddy Bear", 1200, "Toys");
p.displayInfo();
p1.displayInfo();
p2.displayInfo();
// Q3
const p3 = new Product(104, "Bicycle", 12000, "Sports");
const p4 = new Product(105, "Laptop", 65000, "Electronics");
Product.displayCompany();
p3.displayInfo();
p4.displayInfo();
// Q4
class ElectronicProduct extends Product {
    display() {
        console.log("Product Details: ");
        console.log("ID: " + this.productID);
        console.log("Name: " + this.name);
        console.log("Category: " + this.category);
    }
    // Q5
    calculateDiscount() {
        const discount = this.price - (this.price * 0.10);
        console.log("Product name: " + this.name);
        console.log("Discount availed! New price: " + discount);
    }
}
const e = new ElectronicProduct(106, "Bluetooth Speaker", 3000, "Electronics");
e.display();
console.log("ID: " + e.productID);
// console.log("Price: " + e.price);
// Q5
class ClothingProduct extends Product {
    calculateDiscount() {
        const discount = this.price - (this.price * 0.15);
        console.log("Product name: " + this.name);
        console.log("Discount availed! New price: " + discount);
        this.price = discount;
    }
}
const p5 = new Product(107, "JavaScript Book", 800, "Books");
const e1 = new ElectronicProduct(108, "Wireless Mouse", 1200, "Electronics");
const e2 = new ElectronicProduct(109, "Keyboard", 2500, "Electronics");
const c = new ClothingProduct(110, "Cotton Shirt", 900, "Clothing");
const c1 = new ClothingProduct(111, "Jeans", 1800, "Clothing");
const c2 = new ClothingProduct(112, "Jacket", 3500, "Clothing");
p3.calculateDiscount();
p4.calculateDiscount();
p5.calculateDiscount();
e.calculateDiscount();
e1.calculateDiscount();
e2.calculateDiscount();
c.calculateDiscount();
c1.calculateDiscount();
c2.calculateDiscount();
// Q6
class Product1 {
    productID;
    name;
    price;
    category;
    constructor(productID, name, price, category) {
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
class ElectronicProduct1 extends Product1 {
    displayInfo() {
        console.log("Product Details: ");
        console.log("ID: " + this.productID);
        console.log("Name: " + this.name);
        console.log("Price: " + this.price);
        console.log("Category: " + this.category);
    }
    // Q5
    calculateDiscount() {
        const discountAmt = this.price * 0.10;
        console.log("Product Name: " + this.name);
        console.log("Discount will be of : " + discountAmt);
    }
    calculateFinalPrice() {
        const discount = this.price - (this.price * 0.10);
        console.log("Product name: " + this.name);
        console.log("Discount availed! New price: " + discount);
        this.price = discount;
    }
}
class ClothingProduct1 extends Product1 {
    displayInfo() {
        console.log("Product Details: ");
        console.log("ID: " + this.productID);
        console.log("Name: " + this.name);
        console.log("Price: " + this.price);
        console.log("Category: " + this.category);
    }
    calculateFinalPrice() {
        const discount = this.price - (this.price * 0.05);
        console.log("Product name: " + this.name);
        console.log("Discount availed! New price: " + discount);
        this.price = discount;
    }
}
const ep = new ElectronicProduct1(201, "Smart TV", 45000, "Electronics");
const ep1 = new ElectronicProduct1(202, "Tablet", 22000, "Electronics");
const ep2 = new ElectronicProduct1(203, "Headphones", 4000, "Electronics");
const cp = new ClothingProduct1(204, "Formal Shirt", 1500, "Clothing");
const cp1 = new ClothingProduct1(205, "Sneakers", 3200, "Footwear");
const cp2 = new ClothingProduct1(206, "Backpack", 1800, "Accessories");
ep.calculateFinalPrice();
ep.displayInfo();
ep1.calculateFinalPrice();
ep1.displayInfo();
ep2.calculateFinalPrice();
ep2.displayInfo();
cp.calculateFinalPrice();
cp.displayInfo();
cp1.calculateFinalPrice();
cp1.displayInfo();
cp2.calculateFinalPrice();
cp2.displayInfo();
class Product2 {
    productID;
    name;
    price;
    category;
    constructor(productID, name, price, category) {
        this.productID = productID;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    printProduct() {
        console.log("Product Details: ");
        console.log("ID: " + this.productID);
        console.log("Name: " + this.name);
        console.log("Price: " + this.price);
        console.log("Category: " + this.category);
    }
    prodDetails = [];
    displayProducts(prodDetails) {
        return prodDetails;
    }
    getFirstElement(prodDetails) {
        return prodDetails[0];
    }
}
const p6 = new Product2(301, "TypeScript Guide", 750, "Books");
const p7 = new Product2(302, "Python Course", 5000, "Education");
p6.printProduct();
p7.printProduct();
// Q8
console.log("Q8");
const products = [];
products.push(p6);
products.push(p7);
console.log(p6.displayProducts(products));
console.log(p6.getFirstElement(products));
