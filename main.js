window.onload = () => {
    window.addEventListener('resize', changeWidth);
    changeWidth();
    function changeWidth() {
        if(window.matchMedia('(max-width:520px)').matches) {
            document.querySelector('.hero-section img').setAttribute('src', './images/martelli-rock-hero-mobile.png');
        } else {
            document.querySelector('.hero-section img').setAttribute('src', './images/martelli-rock-hero.png');
        }
    }
    const heroSec = document.querySelector('.hero-section');
    // console.log(heroSec);
    heroSec.classList.add('rotate-in-hor');
    document.getElementById('bands-li').addEventListener('click',scrollBands);
    document.getElementById('buy-li').addEventListener('click', appearScrollForm);
    document.forms[0].addEventListener('submit', ()=> getData(event));
    document.getElementById('up-arrow').addEventListener('click',scrollBack);
        
    function scrollBack() {
        document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
        const buyFormSection = document.querySelector('.buy-form-section');
        setTimeout(()=> buyFormSection.classList.toggle('display-none'),1000);
    }
    function scrollBands() {
        const carouselSect = document.getElementById('carousel-section');
        carouselSect.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    function appearScrollForm() {
        const buyFormSection = document.querySelector('.buy-form-section');
        buyFormSection.classList.toggle('display-none'); 
        buyFormSection.scrollIntoView({behavior:'smooth', block: 'start'});
    }

    function getData(event) {
        event.preventDefault();
        let inputs = document.querySelectorAll('#buy-form input');
        console.log(inputs);
        let objectData = {};
        inputs.forEach((item,index) => objectData[item.id] = item.value);
        console.log(objectData);
        let name = document.getElementById('name').value;
        let lastName = document.getElementById('lastname').value;
        let email = document.getElementById('email').value;
        let amount = document.getElementById('amount').value;
        alert(`Gracias ${name} ${lastName} por tu compra. Tenés ${amount} entrada(s)!`)
        
      
    }    

}