'use strict';

export default class CharacterView {
  constructor(character) {
    this.el = document.createElement(`div`);
    this.el.classList.add(`marvel-characters__list-item`);

    this.el.innerHTML = `
      <img class="marvel__character" src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="" />
      <h3 class="">${character.name}</h3>`;
  }
}
