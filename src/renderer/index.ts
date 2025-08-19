abstract class Animal {
    constructor(public name: string, public age: number, public species: string) { }

    abstract sound(): void;
}

class Lion extends Animal {
    constructor(name: string, age: number) {
        super(name, age, 'Lion');
    }
    sound(): void {
        alert('Roar!');
    }
}

class Elephant extends Animal {
    constructor(name: string, age: number) {
        super(name, age, 'Elephant');
    }
    sound(): void {
        alert('The elephant makes a loud growl.');
    }
}


class Zoo {
    private animals: Animal[] = [];

    addAnimal(animal: Animal) {
        this.animals.push(animal);
    }

    getAllAnimals(): Animal[] {
        return this.animals;
    }
}


window.addEventListener('DOMContentLoaded', () => {
    const zoo = new Zoo();
    zoo.addAnimal(new Lion('Lev', 2));
    zoo.addAnimal(new Elephant('Slon', 5));

    const animalsDiv = document.getElementById('animals');
    if (!animalsDiv) return;

    zoo.getAllAnimals().forEach(animal => {

        const animalElem = document.createElement('div');
        animalElem.style.border = '1px solid black';
        animalElem.style.margin = '10px';
        animalElem.style.padding = '10px';
        animalElem.style.width = '200px';
        animalElem.style.borderRadius = '5px';
        animalElem.style.backgroundColor = '#f0f0f0';

        animalElem.textContent = `Name: ${animal.name}, Age: ${animal.age}, Type: ${animal.species}`;

        const soundBtn = document.createElement('button');
        soundBtn.textContent = 'Make Sound';
        soundBtn.style.marginTop = '5px';
        soundBtn.onclick = () => animal.sound();

        animalElem.appendChild(document.createElement('br'));
        animalElem.appendChild(soundBtn);

        animalsDiv.appendChild(animalElem);
    });
});
