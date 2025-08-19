// --- Абстрактный класс Animal (базовый) ---
abstract class Animal {
    // Используем public свойства прямо в конструкторе (сокращение кода)
    constructor(public name: string, public age: number, public species: string) { }

    // Абстрактный метод, который должны реализовать все животные
    abstract sound(): void;
}

// --- Класс Lion ---
class Lion extends Animal {
    constructor(name: string, age: number) {
        super(name, age, 'Lion'); // передаём фиксированный вид животного
    }
    sound(): void {
        alert('Roar!'); // изменили: вместо console.log теперь alert для визуального эффекта
    }
}

// --- Класс Elephant ---
class Elephant extends Animal {
    constructor(name: string, age: number) {
        super(name, age, 'Elephant');
    }
    sound(): void {
        alert('The elephant makes a loud growl.'); // визуальный звук
    }
}

// --- Класс Zoo ---
class Zoo {
    private animals: Animal[] = []; // сделано private для инкапсуляции

    addAnimal(animal: Animal) {
        this.animals.push(animal);
    }

    getAllAnimals(): Animal[] {
        return this.animals;
    }
}

// --- Основной код веб-интерфейса ---
window.addEventListener('DOMContentLoaded', () => {
    const zoo = new Zoo();
    zoo.addAnimal(new Lion('Lev', 2));
    zoo.addAnimal(new Elephant('Slon', 5));

    // Получаем контейнер для животных на странице
    const animalsDiv = document.getElementById('animals');
    if (!animalsDiv) return; // защита, если контейнера нет

    zoo.getAllAnimals().forEach(animal => {
        // --- Изменение: теперь создаём карточку для каждого животного ---
        const animalElem = document.createElement('div');
        animalElem.style.border = '1px solid black'; // визуальное оформление
        animalElem.style.margin = '10px';
        animalElem.style.padding = '10px';
        animalElem.style.width = '200px';
        animalElem.style.borderRadius = '5px';
        animalElem.style.backgroundColor = '#f0f0f0';

        // Добавляем текст с информацией
        animalElem.textContent = `Name: ${animal.name}, Age: ${animal.age}, Type: ${animal.species}`;

        // --- Изменение: кнопка для звука ---
        const soundBtn = document.createElement('button');
        soundBtn.textContent = 'Make Sound';
        soundBtn.style.marginTop = '5px';
        soundBtn.onclick = () => animal.sound(); // при клике на alert

        // Добавляем кнопку в карточку
        animalElem.appendChild(document.createElement('br')); // перенос строки
        animalElem.appendChild(soundBtn);

        // Добавляем карточку в контейнер
        animalsDiv.appendChild(animalElem);
    });
});
