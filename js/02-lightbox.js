import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

const elemnt = galleryItems.map(el => {
   
    return `<a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`
   
});

list.insertAdjacentHTML("beforeEnd", elemnt);