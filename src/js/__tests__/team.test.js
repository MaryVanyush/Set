import Character from '../character';
import Team from '../team';

test('check clase Team function add(character)', () => {
  const character2 = new Character('Oleg', 'Swordsman');
  const character3 = new Character('Olga', 'Magician');
  const character4 = new Character('Vasya', 'Daemon');
  const received = new Team();
  received.add(character2);
  received.add(character3);
  received.add(character4);
  const arr = [
    {
      type: 'Swordsman', name: 'Oleg', health: 100, level: 1, attack: undefined, defence: undefined,
    },
    {
      type: 'Magician', name: 'Olga', health: 100, level: 1, attack: undefined, defence: undefined,
    },
    {
      type: 'Daemon', name: 'Vasya', health: 100, level: 1, attack: undefined, defence: undefined,
    },
  ];
  const expected = new Set(arr);
  expect(received.members).toEqual(expected);
});

test('check clase Team with error function add(character)', () => {
  const character2 = new Character('Oleg', 'Swordsman');
  const received = new Team();
  received.add(character2);
  expect(() => received.add(character2)).toThrow('персонаж Oleg уже в команде');
});

test('check clase Team function addAll', () => {
  const character1 = new Character('Ivan', 'Bowerman');
  const character4 = new Character('Vasya', 'Daemon');
  const character5 = new Character('Igor', 'Daemon');
  const received = new Team();
  received.addAll(character1, character1, character4, character4, character5);
  const arr = [
    {
      type: 'Bowerman', name: 'Ivan', health: 100, level: 1, attack: undefined, defence: undefined,
    },
    {
      type: 'Daemon', name: 'Vasya', health: 100, level: 1, attack: undefined, defence: undefined,
    },
    {
      type: 'Daemon', name: 'Igor', health: 100, level: 1, attack: undefined, defence: undefined,
    },
  ];
  const expected = new Set(arr);
  expect(received.members).toEqual(expected);
});

test('check clase Team function toArray', () => {
  const character1 = new Character('Ivan', 'Bowerman');
  const character2 = new Character('Oleg', 'Swordsman');
  const character3 = new Character('Olga', 'Magician');
  const character4 = new Character('Vasya', 'Daemon');
  const character5 = new Character('Igor', 'Daemon');
  const received = new Team();
  received.addAll(character1, character2, character3, character4, character5);
  received.toArray(received.members);
  const expected = [
    {
      type: 'Bowerman', name: 'Ivan', health: 100, level: 1, attack: undefined, defence: undefined,
    },
    {
      type: 'Swordsman', name: 'Oleg', health: 100, level: 1, attack: undefined, defence: undefined,
    },
    {
      type: 'Magician', name: 'Olga', health: 100, level: 1, attack: undefined, defence: undefined,
    },
    {
      type: 'Daemon', name: 'Vasya', health: 100, level: 1, attack: undefined, defence: undefined,
    },
    {
      type: 'Daemon', name: 'Igor', health: 100, level: 1, attack: undefined, defence: undefined,
    },
  ];
  expect(received.arrayFromSet).toEqual(expected);
});
