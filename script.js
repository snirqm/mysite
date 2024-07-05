const imageSection = document.getElementById('imageSection');
const zoomImage = document.getElementById('zoomImage');
const scrollArrow = document.getElementById('scrollArrow');
const contentSection = document.getElementById('contentSection');

window.addEventListener('scroll', () => {
    const scrollPercentage = window.scrollY / (imageSection.offsetHeight - window.innerHeight);
    const zoomLevel = 1 + scrollPercentage;
    zoomImage.style.transform = `scale(${zoomLevel})`;
});

scrollArrow.addEventListener('click', () => {
    contentSection.scrollIntoView({ behavior: 'smooth' });
});