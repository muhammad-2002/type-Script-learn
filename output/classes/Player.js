export class Player {
    constructor(name, age, dept) {
        this.name = name;
        this.age = age;
        this.dept = dept;
    }
    getAge() {
        return this.age;
    }
    Play() {
        console.log(`${this.name} is a ${this.dept} his ${this.age}`);
    }
}
