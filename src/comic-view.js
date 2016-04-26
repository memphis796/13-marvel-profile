'use strict';

export default class ComicView {
  constructor(comic) {
    this.el = document.createElement(`div`);
    this.el.classList.add(`marvel-characters__list-item`);

    this.el.innerHTML = `
     <div class="comic-character__container">
      <img class="marvel__character" src="${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="" />
      <h3 class="comic-issue">#${comic.issueNumber}</h3>
      <h4 class="comic-info"><p>${comic.title}</p></h4>
      <button class="read-button">Read More</button>
      <div class="modal">
        <div class="modal-card">
         <button class="close-button">X</button>
          <p class="modal-card__title">${comic.title}</p>
          <p class="modal-card__content">${comic.description}</p>
        </div>
      </div>
    </div>`;


    this.showModal();
  }
  showModal() {
    const close = this.el.querySelector(`.close-button`);
    const open = this.el.querySelector(`.modal`);
    this.el.querySelector(`.read-button`).addEventListener(`click`, () => {
    // add the class "modal-active" to the modal div
      open.classList.add(`modal--active`);
    });
    close.addEventListener(`click`, () => {
    // closes read button
      open.classList.toggle(`modal--active`);
    });
  }
}
