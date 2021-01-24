//Animation logic
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');

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
});

//Animate In
container.addEventListener("mouseinter", (e) => {
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotate(-45deg)";
});
