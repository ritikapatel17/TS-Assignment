"use strict";
class Emp {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log(this.name + "" + this.id);
    }
}
const e = new Emp(1, "tom");
e.display();
