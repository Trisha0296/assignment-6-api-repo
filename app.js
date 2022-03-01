const allPlayers = () => {
  const searchValu = document.getElementById('search-box').value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValu}`
  console.log(url)
  fetch(url)
    .then(response => response.json())
    .then((data) => showphoneDetails(data.data));
  /* iPhone 12 */
}
const showphoneDetails = (phones) => {
  // console.log(phones)
}