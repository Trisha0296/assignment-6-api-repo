const allPlayers = () => {
  const searchValu = document.getElementById('search-box').value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValu}`
  // console.log(url)
  fetch(url)
    .then(response => response.json())
    .then((data) => showphoneDetails(data.data));
  /* iPhone 12 */
}
const showphoneDetails = (phones) => {

  for (const phone of phones) {
    const parent = document.getElementById('phone-container');
    const div = document.createElement('div');
    div.innerHTML = `
  <div class="cards card border">
            <div class="pro-pick">
              <img class="w-25" src="" alt="">
            </div>
            <h2>Name : heloo </h2>
            <h2>Phone Brand : </h2>
            <div class="button">
              <button class="btn btn-dark  text-white roundedss">Explore</button>
            </div>
          </div>

 `
    parent.appendChild(div);
  }

}