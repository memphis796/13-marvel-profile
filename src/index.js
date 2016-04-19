'use strict';

import SeriesInfoView from 'series-info-view';

export default function () {
  const id = 9906;

  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}?apikey=1a7f07a0041223c5b84268a690293b2e`)
  .then((response) => response.json())
  .then((series) => {
    // this fetch is for the full sidebar,
    //  meaning everything that I will use in the fetch,
    //   I can reference it from  here.
    const sidebar = document.querySelector(`.marvel-aside__column`);
    // First argument is where we want things to go,
    //  the second argument is what we want to go there.
    const marvelAside = new SeriesInfoView(sidebar, series.data.results[0]);
  });

  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}/characters?apikey=1a7f07a0041223c5b84268a690293b2e
`).then((response) => response.json())
  .then((series) => {
    const characters = document.querySelector(`marvel-characters__list`);
    const characterList = new CharacterListView(characters, series.data.results);
  });

  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}/comics?apikey=1a7f07a0041223c5b84268a690293b2e`)
  .then((response) => response.json())
  .then((series) => {
    const comics = document.querySelector(`comic-views`);
    const comicList = new ComicView(comics, series.data.results)
  });
}
