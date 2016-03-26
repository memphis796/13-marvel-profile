import InfoView from 'info-view';

export default function () {
  const id = 9906;

  fetch(`http://gateway.marvel.com:80/v1/public/series/${id}?apikey=1a7f07a0041223c5b84268a690293b2e`)
    .then((res) => res.json())
    .then((info) => {
      const series = info.data.results[0];
      const asidebar = document.querySelector(`.marvel-aside__column`);
      const infoView = new InfoView(asidebar, series);
    });
}
