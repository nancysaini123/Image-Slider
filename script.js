const images = [
      { src: 'images/img1.jpeg', caption: 'Island' },
      { src: 'images/img2.jpeg', caption: 'Forest' },
      { src: 'images/img3.jpeg', caption: 'SeaSide' },
      { src: 'images/img4.jpeg', caption: 'Grassland' },
      { src: 'images/img5.jpeg', caption: 'Lake view' },
    ];
let currentIndex = 0;
const imgElement = document.getElementById('slider-image');
const captionElement = document.getElementById('caption');
const dotsContainer = document.getElementById('dots');
function updateSlider() {
    imgElement.src = images[currentIndex].src;
    captionElement.textContent = images[currentIndex].caption;
    document.querySelectorAll('.dot').forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
    });
}
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}
// Buttons
document.querySelector('.next').addEventListener('click', nextImage);
document.querySelector('.prev').addEventListener('click', prevImage);
// Auto Slide
let slideInterval = setInterval(nextImage, 3000);
// Pause on hover
imgElement.addEventListener('mouseover', () => clearInterval(slideInterval));
imgElement.addEventListener('mouseout', () => slideInterval = setInterval(nextImage, 3000));
// Dots
images.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        currentIndex = idx;
        updateSlider();
    });
    dotsContainer.appendChild(dot);
});
// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});
// Dark mode toggle
const toggleButton = document.querySelector('.theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
// Initial load
updateSlider();