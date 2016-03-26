import CreatorView from 'creator-view';

export default class InfoView {
  constructor(el, series) {
    this.el = el;
    this.series = series;

    this.el.querySelector(`.marvel-aside__pic-name`).innerText = this.series.title;
    const creatorList = this.el.querySelector(`.marvel-aside__creator-list`);

    this.series.creators.items.forEach((item) => {
      // Create a new instance of CreatorView & pass in the item
      const creatorView = new CreatorView(item);
      // Append the Element from the CreatorView to the ul for creators
      creatorList.appendChild(creatorView.element);
    });
  }
}
