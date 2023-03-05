import { galleryItems } from "./gallery-items.js";
// Change code below this line

function addMarkUp(galleryItems) {
  return galleryItems.map(
    ({ original, preview, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
    .join('');
};

const gallery = document.querySelector('.gallery');
const cardMarkUp = addMarkUp(galleryItems);

gallery.insertAdjacentHTML('beforeend', cardMarkUp);


gallery.addEventListener('click', scaleUpPhoto);

function scaleUpPhoto(e) {
  
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  disableLink(e); 

  createModalWithBiggerPhoto(e);
};


const disableLink = (e) => {
  if ('.gallery__link') {
    e.preventDefault();
  }
};

const createModalWithBiggerPhoto = (e) => {
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)

  return instance.show();
};
