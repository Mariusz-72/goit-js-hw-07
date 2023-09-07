

import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);
const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
    return `
    <li class="gallery__item">
     <a class="gallery__link" href="${original}>
        <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}" />
                </a>
    </li>
    `;
};

const galleryMarkup = galleryItems
    .map(createGalleryItem)
    .join('');
    
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);    

//otwieranie okna modalnego z dużym obrazkiem//
galleryList.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.nodeName === 'IMG') {            //jeśli zdarzenie jest na obrazku//
        const imageUrl = event.target.dataset.source; //to masz pobrać dane większego obrazka//
        const modalWindow = basicLightbox.create(`
        <img src="${imageUrl}" alt="${event.target.alt}" />`);  //basicLightbox tworzy okno z obrazkiem - jest ono przypisane do modalWindow//

        modalWindow.show(); //wyświetlenie tego okna //
    }
});

//zamykanie okna modalnego przyciskiem escape//
document.addEventListener('keydown', (event) => {
    const modalWindow = basicLightbox.getInstance();   // uzyskanie dostępu do aktualnie otwartego okna modalnego//

    if (event.key === 'Escape' && modalWindow) {
        modalWindow.close();
    }
});