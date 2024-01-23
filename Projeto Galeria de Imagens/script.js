function showImage(index) {
    const fullImg = document.getElementById('fullImage');
    const container = document.getElementById('fullImageContainer')

    fullImg.src = `img/image${index}.jpg`;

    container.style.display = 'flex';

}

function closeImage() {
    const container = document.getElementById('fullImageContainer')

    container.style.display = 'none';
}