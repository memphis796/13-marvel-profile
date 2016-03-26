export default class creatorView {
  constructor(creator) {
    // Make an element to represent a creator
    const li = document.createElement(`li`);
    // Add class to element for styling
    li.classList.add(`marvel-aside__creator-list_items`);
    // Fill the element with the creator name

    li.innerText = creator.name;

    this.element = li;
  }
}
