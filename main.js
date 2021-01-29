//Animation logic
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase');

//Animation event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    // console.log(xAxis, yAxis);
});

//Reset card 
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotate(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    console.log("mouseleave");
});

//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    title.style.transform = "translateZ(120px)";
    sneaker.style.transform = "translateZ(120px) rotate(-45deg)";
    description.style.transform = "translateZ(100px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(100px)";
    console.log("mouse inrter");
});
