const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);

const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");

const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

// slides[0].style.left = 0;
// slides[1].style.left = slideWidth +"px";

const setSlidePosition = function (slide,index){
    slide.style.left = slideWidth * index + "px";
}
slides.forEach(setSlidePosition)

const moveToSlide = (track,currentSlide,targetSlide)=>{
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

prevButton.addEventListener("click", e =>{
    const  currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    console.log("next slide left " + prevSlide.style.left);
    console.log("current slide width " + currentSlide.clientWidth);
    console.log("current slide left " + currentSlide.style.left);
    console.log("==================================================");
    moveToSlide(track,currentSlide,prevSlide);
});

nextButton.addEventListener("click",e =>{
    const  currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    console.log("next slide left " + nextSlide.style.left);
    console.log("current slide width " + currentSlide.clientWidth);
    console.log("current slide left " + currentSlide.style.left);
    console.log("==================================================");
    moveToSlide(track,currentSlide,nextSlide);
})
