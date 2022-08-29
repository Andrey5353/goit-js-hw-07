import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const list = document.querySelector(".gallery");
list.innerHTML = elemnt(galleryItems);


function elemnt(gallery) {
    const imageEl = gallery.map(
        ({ preview, original, description }) =>
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
    ).join('');

    return imageEl;
};


let modalWindow = null;


function showModal() {
    const modalLightbox = ({ alt, dataset: { source } }) => {
        modalWindow = basicLightbox.create(
            `<img style='color: #fff' src='${source}' alt='${alt}' width='800' height='600'`, {
            onShow: addKeyBoardControl,
            onClose: removeKeyBoardControl,
        }
        );

        modalWindow.show();
    };

    const addKeyBoardControl = () => window.addEventListener('keydown', onWindowKeyDown);
    const removeKeyBoardControl = () => window.addEventListener('keydown', onWindowKeyDown);

    const onWindowKeyDown = ({ code }) => {
        if (code !== 'Escape') return;
        
        modalWindow.close();
    };

    const onGalleryListClick = event => {
        event.preventDefault();

        if (event.target.nodeName !== 'IMG') return;

        modalLightbox(event.target);
    };

    list.addEventListener('click', onGalleryListClick);
};

showModal();