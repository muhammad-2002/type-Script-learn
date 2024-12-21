import { myOptionss } from "./gggg/myOptionss";

export class Player implements myOptionss {
  constructor(public name: string, private age: number, public dept: string) {}

  getAge() {
    return this.age;
  }

  Play() {
    console.log(`${this.name} is a ${this.dept} his ${this.age}`);
  }
}
