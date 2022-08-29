import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");
list.innerHTML = elemnt(galleryItems);

function elemnt(gallery) {
    const imageEl = gallery.map(
        ({ preview, original, description }) =>
            `<a class="gallery__item" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
 </a>`
    ).join('');

    return imageEl;
};

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionsDelay: 250 });
