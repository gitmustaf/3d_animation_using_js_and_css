//Animation logic
const card = document.querySelector('.card');
const container = document.querySelector('.container');


//Animation event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    console.log(xAxis, yAxis);
});

//Reset card 
container.addEventListener("mouseleave", (e) => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

