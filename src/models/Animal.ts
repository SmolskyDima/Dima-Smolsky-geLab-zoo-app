export abstract class Animal{
    public name:string;
    public age:number;
    public species:string;

    constructor(name: string, age: number, species: string){
        this.name = name;
        this.age = age;
        this.species = species;
    }
    public abstract sound():void;
    
    public displayInfo():void{
        console.log(`Name: ${this.name}, Age: ${this.age}, Animal Type: ${this.species}`);
    }
}