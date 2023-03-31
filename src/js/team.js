export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`персонаж ${character.name} уже в команде`);
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
    return this.members;
  }

  toArray(set) {
    this.arrayFromSet = Array.from(set);
  }
}
