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
    document.querySelectorAll('.up-arrow').forEach((item,index)=>item.addEventListener('click',()=>scrollBack(index)));
    document.getElementById('info-li').addEventListener('click', appearscrollInfo);
    
    function appearscrollInfo() {
        const infoSection = document.querySelector('.info-section');
        infoSection.classList.remove('display-none');
        setTimeout(()=>infoSection.classList.remove('hidden'),1000);
        infoSection.scrollIntoView({behavior:'smooth', block: 'start'});
    }
    function scrollBack(index) {
        document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
        if(index===0) {
            const infoSection = document.querySelector('.info-section');
            infoSection.classList.toggle('hidden')
            setTimeout(()=> infoSection.classList.toggle('display-none'),1000)
        } else if(index===1) {
            const buyFormSection = document.querySelector('.buy-form-section');
            setTimeout(()=> buyFormSection.classList.toggle('display-none'),1000);
        }
    }
    function scrollBands() {
        const carouselSect = document.getElementById('carousel-section');
        carouselSect.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    function appearScrollForm() {
        const buyFormSection = document.querySelector('.buy-form-section');
        buyFormSection.classList.remove('display-none'); 
        buyFormSection.scrollIntoView({behavior:'smooth', block: 'start'});
    }

    function getData(event) {
        event.preventDefault();
        let inputs = document.querySelectorAll('#buy-form input');
        
        let objectData = {};
        inputs.forEach((item) => objectData[item.id] = item.value);
        
        let name = document.getElementById('name').value;
        let lastName = document.getElementById('lastname').value;
        let email = document.getElementById('email').value;
        let amount = document.getElementById('amount').value;
        alert(`Gracias ${name} ${lastName} por tu compra. Tenés ${amount} entrada(s)!`)
        
      
    }    

}