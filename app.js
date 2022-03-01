const allPhones = () => {
  document.getElementById('phone-container').innerHTML = " ";
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
            <h4>Phone Brand : ${phone.brand} </h4>
           
            <div class="button">
              <button onclick=" phonedetails ('${phone.slug}')" class="btn btn-dark  text-white roundedss">Explore Details</button>
            </div>
          </div>
 `
    parent.appendChild(div);
    // console.log(phone);

  }
};
searchValu.value = " ";

/* Explore details */
const phonedetails = (id) => {
  const url = ` https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => mainFeatures(data.data));
};
/*  Explore details call*/
const mainFeatures = (infoDetails) => {
  // console.log(infoDetails)
  document.getElementById('details-container').innerHTML = `
  <div class="cards card border">
  <img class="p-10" src="${infoDetails.image}" alt="">
    <p>Released date : ${infoDetails.releaseDate}</p>
    <p>Storage : ${infoDetails.mainFeatures.storage}</p>
    <p>DisplaySize : ${infoDetails.mainFeatures.displaySize}</p>
    <p>ChipSet : ${infoDetails.mainFeatures.chipSet}</p>
    <p>Memory : ${infoDetails.mainFeatures.memory}</p>
    <a href="https://dnr.wisconsin.gov/topic/hunt/wildwiapp.html">See more</a>
  </div>
 `
}