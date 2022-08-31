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
console.log(imageEl);
    return imageEl;
};


const instance = basicLightbox.create(`<img src='' alt=''`,
            {
                onShow: () => window.addEventListener('keydown', onWindowKeyDown)
            },
            {
                onClose: () => window.removeKeyBoardControl('keydown', onWindowKeyDown),
            }
        );

// закрытие по кнопке
const onWindowKeyDown = ({ code }) => {
        if (code !== 'Escape') return;

        instance.close();
};
    
// открываем в том же окне
const onGalleryContainerClick = event => {
        event.preventDefault();

        if (event.target.nodeName !== 'IMG') return;
        instance.element().querySelector('img').src = event.target.dataset.source;
        instance.show();
    };

// galleryContainer.addEventListener('click', onGalleryContainerClick);
console.log(galleryContainer.addEventListener('click', onGalleryContainerClick)
);