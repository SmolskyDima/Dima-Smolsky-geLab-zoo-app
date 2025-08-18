import { Lion } from './models/Lion';
import { Elephant } from './models/Elephant';
import { Zoo } from './services/Zoo';

const zoo = new Zoo();

const lev = new Lion('Lev', 2);
const slon = new Elephant('Slon', 5);

zoo.addAnimal(lev);
zoo.addAnimal(slon);

zoo.displayAnimals();
zoo.makeSounds();
zoo.removeAnimal(lev);