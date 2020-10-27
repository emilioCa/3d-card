const container = document.querySelector('.container');
const card = document.querySelector('.card');

const title = document.querySelector('.title');
const header = document.querySelector('.card-header img');
const actions = document.querySelector('.actions');
const sizes = document.querySelector('.sizes');

container.addEventListener('mousemove', (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 25;
    let y = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

container.addEventListener('mouseenter', (e) => {
    card.style.transition = "none";

    title.style.transform = "translateZ(150px)";
    header.style.transform = "translateZ(200px) rotateZ(-45deg)";
    actions.style.transform = "translateZ(75px)";
    sizes.style.transform = "translateZ(100px)";
});

container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    title.style.transform = "translateZ(0px)";
    header.style.transform = "translateZ(0px) rotateZ(0deg)";
    actions.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
});