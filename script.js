const modal = document.querySelector("#modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalImage = document.querySelector(".modal-image");
const modalDescTitle = document.querySelector(".description-title");
const modalDescDate = document.querySelector(".description-date");
const modalDescArtist = document.querySelector(".description-artist");
const previewContainer = document.querySelector('.preview-container');
const stillLifesBtn = document.querySelector('#stilllifes-btn');
const landscapesBtn = document.querySelector('#landscapes-btn');
const portraitsBtn = document.querySelector('#portraits-btn');
const drawingsBtn = document.querySelector('#drawings-btn');

// close modal button
modalCloseBtn.addEventListener("click", function () {
  this.parentNode.style.display = "none";
});

// create preview divs
async function createPreviews(id) {
  let url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id;
  try {
    // fetch data from API
    let res = await fetch(url);
    const data = await res.json();
    // create preview div
    const elDiv = document.createElement('div');
    elDiv.classList.add('preview');
    elDiv.style.backgroundImage = `url("${data.primaryImageSmall}")`;
    // add event listener to the div
    elDiv.addEventListener("click", function () {
      modal.style.display = "block";
      // pass data to the modal
      modalImage.style.backgroundImage = `url("${data.primaryImageSmall}")`;
      modalDescTitle.textContent = data.title;
      modalDescDate.textContent = data.objectDate;
      modalDescArtist.textContent = data.artistDisplayName;
    });
    // append the div to the container
    previewContainer.append(elDiv);
  } catch (error) {
    console.log(error);
  }
}

const stillLifes = ['11737', '11734', '435882', '437053', '827660', '10997', '436485'];
const landscapes = ['10501', '436575', '10983', '18354', '11227', '10482', '437299', '10786', '11907'];
const portraits = ['459106', '437430', '505722', '440723', '459088', '459080', '435876', '438112', '435984', '435802'];
const drawings = ['459184', '459186', '337088', '337062', '459210', '337489', '337894', '337494', '334710'];

// create previews (of still lifes onload)
for (let id of stillLifes) {
  createPreviews(id);
}

// recreate the previews when a menu is clicked
stillLifesBtn.addEventListener('click', function() {
  while(previewContainer.firstChild) {
    previewContainer.firstChild.remove();
  }
  for (let id of stillLifes) {
    createPreviews(id);
  }
})

landscapesBtn.addEventListener('click', function() {
  while(previewContainer.firstChild) {
    previewContainer.firstChild.remove();
  }
  for (let id of landscapes) {
    createPreviews(id);
  }
})

portraitsBtn.addEventListener('click', function() {
  while(previewContainer.firstChild) {
    previewContainer.firstChild.remove();
  }
  for (let id of portraits) {
    createPreviews(id);
  }
})

drawingsBtn.addEventListener('click', function() {
  while(previewContainer.firstChild) {
    previewContainer.firstChild.remove();
  }
  for (let id of drawings) {
    createPreviews(id);
  }
})