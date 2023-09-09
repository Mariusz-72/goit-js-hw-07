import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);
const galleryList = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) => {
  return `
     <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
    `;
};


//galeria z danymi z tablicy galleryItems //
const galleryMarkup = galleryItems
    .map(createGalleryItem)
    .join("");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);


//uruchomienie biblioteki SimpleLightbox//
const lightbox = new SimpleLightbox(".gallery__link", {
    
    
  captionsData: "alt",
  captionDelay: 250,
});
