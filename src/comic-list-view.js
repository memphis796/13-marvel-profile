'use strict';

import ComicView from 'comic-view';

export default class ComicListView {
  constructor(el, comics) {
    this.el = el;
    this.comics = comics;

    this.renderComics();
  }

  renderComics() {
    this.el.innerHTML = ``;
    this.comics.forEach((comic) => {
      const comicView = new ComicView(comic);
      this.el.appendChild(comicView.el);
    });
  }
}
