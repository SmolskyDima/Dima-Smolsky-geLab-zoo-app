import { Animal } from './Animal';

export class Elephant extends Animal {
    constructor(name: string, age: number) {
        super(name, age, 'Elephant');
    }
    
    public sound(): void {
        console.log('The elephant makes a loud growl.');
    }

     public displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Animal Type: ${this.species}`);
    }
}