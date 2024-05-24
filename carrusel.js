let slideIndices = [0, 0];
showSlides(1);
showSlides(2);

function showSlides(carousel) {
    let slides = document.querySelectorAll(`#carousel${carousel} .slide`);
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndices[carousel - 1]++;
    if (slideIndices[carousel - 1] > slides.length) {
        slideIndices[carousel - 1] = 1;
    }

    slides[slideIndices[carousel - 1] - 1].style.display = "block";
    setTimeout(() => showSlides(carousel), 5000); // Cambia la imagen cada 5 segundos
}

function nextSlide() {
    for (let i = 1; i <= 2; i++) {
        let slides = document.querySelectorAll(`#carousel${i} .slide`);

        for (let j = 0; j < slides.length; j++) {
            slides[j].style.display = "none";
        }

        slideIndices[i - 1]++;
        if (slideIndices[i - 1] > slides.length) {
            slideIndices[i - 1] = 1;
        }

        slides[slideIndices[i - 1] - 1].style.display = "block";
    }
}

function prevSlide() {
    for (let i = 1; i <= 2; i++) {
        let slides = document.querySelectorAll(`#carousel${i} .slide`);

        for (let j = 0; j < slides.length; j++) {
            slides[j].style.display = "none";
        }

        slideIndices[i - 1]--;
        if (slideIndices[i - 1] < 1) {
            slideIndices[i - 1] = slides.length;
        }

        slides[slideIndices[i - 1] - 1].style.display = "block";
    }
}