'use strict';

import CharacterView from 'character-view';

export default class CharacterListView {
  constructor(el, characters) {
    this.el = el;
    this.characters = characters;

    this.renderCharacter();
  }

  renderCharacter() {
    this.el.innerHTML = ``;
    this.characters.forEach((character) => {
      const characterView = new CharacterView(character);
      this.el.appendChild(characterView.el);
    });
  }
}
