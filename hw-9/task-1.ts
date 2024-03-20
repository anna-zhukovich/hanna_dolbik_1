class Animal {
    static animalType: string = 'dog';

    name: string;
    constructor(name: string) {
        this.name = name;
    }

    printAnimal () {
        console.log(`This is a ${Animal.animalType}. It's name is ${this.name}`)
    }
}

const animal = new Animal('Pashka');
animal.printAnimal();

const animal2 = new Animal('Vasya');
animal2.printAnimal();