window.onload = () => {
    const heroSec = document.querySelector('.hero-section');
    // console.log(heroSec);
    heroSec.classList.add('rotate-in-hor');
    document.getElementById('bands-li').addEventListener('click',scrollBands);
    document.getElementById('buy-li').addEventListener('click', appearScrollForm);

    function scrollBands() {
        const carouselSect = document.getElementById('carousel-section');
        carouselSect.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    function appearScrollForm() {
        const buyFormSection = document.querySelector('.buy-form-section');
        buyFormSection.classList.toggle('display-none'); 
        buyFormSection.scrollIntoView({behavior:'smooth', block: 'start'});
    }


}