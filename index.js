document.querySelectorAll('.image-card').forEach(card => {
    card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', card.id);
    });
});

const container = document.querySelector('.image-grid');
container.addEventListener('dragover', (e) => {
    e.preventDefault();
});

container.addEventListener('drop', (e) => {
    const id = e.dataTransfer.getData('text');
    const draggedElement = document.getElementById(id);
    container.appendChild(draggedElement);
});

document.querySelectorAll('.grid-image').forEach(image => {
    image.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        lightbox.style.display = 'flex';
        lightboxImage.src = image.src;
    });
});

document.getElementById('close-lightbox').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});
