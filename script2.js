document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    const images = document.querySelectorAll('.image-container img');
    const span = document.getElementsByClassName('close')[0];

    images.forEach(image => {
        image.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = image.src;
            captionText.innerHTML = image.alt;
        });
    });

    span.onclick = () => {
        modal.style.display = 'none';
    }
});