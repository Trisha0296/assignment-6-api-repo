const allPhones = () => {
  // document.getElementById('phone-container').innerHTML = " ";


  const searchValu = document.getElementById('search-box').value;

  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValu}`
  fetch(url)
    .then(response => response.json())
    .then((data) => showphoneDetails(data.data.slice(0, 20)));

  document.getElementById('search-box').value = ''
};

const showphoneDetails = (phones) => {
  const parent = document.getElementById('phone-container');
  parent.textContent = ''
  phones.forEach(phone => {
    const div = document.createElement('div');
    div.innerHTML = `
          <div class="card p-4 text-center ">
             
                <img class="img-fluid" src="${phone.image}" alt="">
             
              <h5 class='pt-4'>Name : ${phone.phone_name} </h5>
              <h6>Phone Brand : ${phone.brand} </h6>
             
              <div class="py-3">
                <button onclick=" phonedetails ('${phone.slug}')" class="btn btn-dark  text-white roundedss">Explore Details</button>
              </div>
            </div>
   `

    parent.appendChild(div)

  });

};

/* Explore details */
const phonedetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => mainFeatures(data.data));
};
/*  Explore details call*/
const mainFeatures = (infoDetails) => {

  const parent = document.getElementById('details-container')
  parent.textContent = ''

  const div = document.createElement('div');
  div.innerHTML = `
  <div class=" card border p-3 mx-auto my-3 w-50">
  <img class="img-fluid" src="${infoDetails.image}" alt="">
    <p>Released date : ${infoDetails.releaseDate}</p>
    <p>Storage : ${infoDetails.mainFeatures.storage}</p>
    <p>DisplaySize : ${infoDetails.mainFeatures.displaySize}</p>
    <p>ChipSet : ${infoDetails.mainFeatures.chipSet}</p>
    <p>Memory : ${infoDetails.mainFeatures.memory}</p>
    <a href="https://dnr.wisconsin.gov/topic/hunt/wildwiapp.html">See more</a>
  </div>
 `
  parent.appendChild(div)

}