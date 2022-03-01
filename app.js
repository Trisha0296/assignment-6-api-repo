const allPlayers = () => {
  const searchValu = document.getElementById('search-box').value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValu}`
  // console.log(url)
  fetch(url)
    .then(response => response.json())
    .then((data) => showphoneDetails(data.data));
}
const showphoneDetails = (phones) => {

  for (const phone of phones) {
    const parent = document.getElementById('phone-container');
    const div = document.createElement('div');
    div.innerHTML = `
  <div class="cards card border">
            <div class="pro-pick">
              <img class="w-30 m-10" src="${phone.image}" alt="">
            </div>
            <h2>Name : ${phone.phone_name} </h2>
            <h4>Phone Brand :${phone.brand} </h4>
            <p>Phone slug :  ${phone.slug} </p>
            <div class="button">
              <button class="btn btn-dark  text-white roundedss">Explore</button>
            </div>
          </div>
 `
    parent.appendChild(div);
    // console.log(phone)
  }

}