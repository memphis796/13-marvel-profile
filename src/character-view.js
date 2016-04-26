'use strict';

export default class CharacterView {
  constructor(character) {
    this.el = document.createElement(`div`);
    this.el.classList.add(`marvel-characters__list-item`);

    this.el.innerHTML = `
      <div class="marvel-character__container">
        <img class="marvel__character" src=
        "${character.thumbnail.path}.${character.thumbnail.extension}"
         alt="" />
      </div>
      <h3 class="">${character.name}</h3>`;
  }
}
