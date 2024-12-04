// *** LIGHTBOX ***
document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll('ul li img');
    const lightbox = document.querySelector('#lightbox');
    const lightboxImage = document.querySelector('#lightbox img');

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener('click', () => {
            const fullImageUrl = thumbnail.getAttribute('data-full-img');
            lightboxImage.setAttribute('src', fullImageUrl);
            lightbox.showModal();
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.close();
    });
});
