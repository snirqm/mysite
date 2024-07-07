document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const cardImg = document.querySelector('.card-img');
    const maxScale = 1.5; // Maximum zoom scale
    const scrollThreshold = window.innerHeight * 0.5; // Scroll threshold for max zoom

    function updateZoom() {
        const scrollPosition = window.pageYOffset;
        let scale = 1 + (scrollPosition / scrollThreshold) * (maxScale - 1);
        scale = Math.min(maxScale, Math.max(1, scale)); // Clamp scale between 1 and maxScale

        card.style.transform = `scale(${scale})`;
        cardImg.style.transform = `scale(${scale})`;
    }

    window.addEventListener('scroll', updateZoom);
    updateZoom(); // Initial call to set correct scale on page load
});
