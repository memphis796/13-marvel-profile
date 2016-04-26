'use strict';

export default class SeriesInfoView {
  constructor(el, series) {
    // this el and the info inside the constructor is just a
    // place holder, when I use this. el I'm saying this el is this el,
    // what ever el i put in that place, this will be that el.
    this.el = el;
    this.series = series;

    this.renderCreator();
    // pay attention to the detail, there's alot of info there goes here
    // to make this fetch work. alot back ticks, semicolons.
    this.el.querySelector(`.marvel-aside__pic`).innerHTML = `
    <img class="marvel-aside__pic-main" src =
    "${this.series.thumbnail.path}.${this.series.thumbnail.extension}" alt="" />`;
    // each elementis being found in the html and repopulated with data from the marvel API
    this.el.querySelector(`.marvel-aside__pic-name`).innerText = this.series.title;

    this.el.querySelector(`.marvel-aside__date`).innerText
     = `${this.series.startYear} - ${this.series.endYear}`;
  }
  // I made a function to run everything instead of constantly writing,
  //  it all out when i can call a function to do it do.
  renderCreator() {
    this.series.creators.items.forEach((creator) => {
      const creatorsListItems = document.querySelector(`.marvel-aside__creator-list`);
      const creatorsLi = document.createElement(`li`);
      creatorsLi.innerText = creator.name;
      creatorsListItems.appendChild(creatorsLi);
    });
  }
}
// Finally!!!!! it works, yes.
