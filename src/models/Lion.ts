import { Animal } from './Animal';

export class Lion extends Animal {
    constructor(name: string, age: number) {
        super(name, age, 'Lion');
    }

     public sound(): void {
        console.log('Roar!');
    }

    public displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Animal Type: ${this.species}`);
    }
}