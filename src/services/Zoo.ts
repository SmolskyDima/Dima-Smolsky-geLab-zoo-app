import { Animal } from '../models/Animal';

export class Zoo{

    private animals: Animal[] = [];

    public addAnimal(animal: Animal): void {
        this.animals.push(animal);
    }

    public removeAnimal(animal: Animal): void {
        this.animals = this.animals.filter(a => a!== animal);
    }

    public displayAnimals(): void {
        this.animals.forEach(animal => animal.displayInfo());
    }

    public makeSounds(): void {
        this.animals.forEach(animal => animal.sound());
    }
}