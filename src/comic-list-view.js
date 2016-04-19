'use strict';

import ComicView from 'comic-view';

export default class ComicListView {
  contructor(el, comic) {
    this.el = el;
    this.comic = comic;

    this.comics.forEach((comic) => {
      const comicView = ComicView(comic);
      this.el.appendChild(comicView, el)
    })
  }
}
