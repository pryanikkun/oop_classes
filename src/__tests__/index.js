import {
    Character, Swordsman, Bowerman, Magician, Zombie, Undead, Daemon
} from "../index";


test('should create new Character', () => {
    const character = new Character('John', 'Bowerman');
    expect(character).toEqual({
        name: 'John',
        type: 'Bowerman',
        health: 100,
        level: 1
    });
})

test('should create new Bowerman', () => {
    const character = new Bowerman('John');
    expect(character).toEqual({
        name: 'John',
        type: 'Bowerman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });
});

test('should create new Swordsman', () => {
    const character = new Swordsman('John');
    expect(character).toEqual({
        name: 'John',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });
});

test('should create new Magician', () => {
    const character = new Magician('John');
    expect(character).toEqual({
        name: 'John',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });
});

test('should create new Daemon', () => {
    const character = new Daemon('John');
    expect(character).toEqual({
        name: 'John',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });
});

test('should create new Undead', () => {
    const character = new Undead('John');
    expect(character).toEqual({
        name: 'John',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });
});

test('should create new Zombie', () => {
    const character = new Zombie('John');
    expect(character).toEqual({
        name: 'John',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });
});

test ('should throw error if name is not string', () => {
    expect(() => new Character(1, 'Bowerman')).toThrow('Имя должно быть строкой');
});

test ('should throw error if name is less than 2', () => {
    expect(() => new Character('J', 'Bowerman')).toThrow('Имя должно содержать от 2 до 10 символов');
});

test ('should throw error if name is more than 10', () => {
    expect(() => new Character('JohnJohnJohn', 'Bowerman')).toThrow('Имя должно содержать от 2 до 10 символов');
});

test ('should throw error if type is not valid', () => {
    expect(() => new Character('John', 'Bowman')).toThrow('Тип должен быть одним из следующих: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie');
});

