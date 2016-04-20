'use strict';

export default class ComicView {
  constructor(comic) {
    this.el = document.createElement(`div`);
    this.el.classList.add(`character-list__comics-info`);

    this.el.innerHTML =
     `<img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="" />
      <h3 class="">#${comic.issueNumber}</h3>
      <h4 class=""><p>${comic.title}</p></h4>
      <button class="read-button" type="button" name="button">Read More</button>
      <div class="modal">
        <div class="modal-card">
          <p class="modal-card__content">${comic.description}</p>
        </div>
      </div>`;

    const whatever = this.el.querySelector(`.modal`);

    this.el.querySelector(`.read-button`).addEventListener(`click`, () => {
      // add the class "modal-active" to the modal div
      whatever.classList.add(`modal--active`);
    });
  }
}
