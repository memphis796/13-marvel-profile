'use strict';

export default class CharacterView {

  constructor(series) {
    this.el = document.createElement(`div`);
    this.el.classList.add(`character`);
    this.series = series;


  }
}
