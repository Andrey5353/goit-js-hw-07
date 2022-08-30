import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = createElements(galleryItems);


// добавляем картинки в список
function createElements(gallery) {
    const imageEl = gallery.map(({ preview, original, description }) =>
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

let instance = null;
let showModalLightbox;


function showModal() {
    showModalLightbox = ({ alt, dataset: { source } }) => {
        instance = basicLightbox.create(`<img src='${source}' alt='${alt}'`,
            {
                onShow: () => window.addEventListener('keydown', onWindowKeyDown)
            },
            {
                onClose: () => window.removeKeyBoardControl('keydown', onWindowKeyDown),
            }
        );

        instance.show();
    };
};


// закрытие по кнопке
const onWindowKeyDown = ({ code }) => {
        if (code !== 'Escape') return;

        instance.close();
};
    
// открываем в том же окне
const onGalleryContainerClick = event => {
        event.preventDefault();

        if (event.target.nodeName !== 'IMG') return;

        showModalLightbox(event.target);
    };

galleryContainer.addEventListener('click', onGalleryContainerClick);
showModal();