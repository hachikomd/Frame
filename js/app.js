const navSlide = () =>{
    const burger = document.querySelector('burger');
    const nav = document.querySelector('nav-link');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');

    //burger animation
        burger.classList.toggle('bar1');
    });
}

