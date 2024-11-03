const slides = document.querySelectorAll(".carousel");
let counter  = 0;
slides.forEach((carousel, index)=>{
    carousel.style.left = `${index * 100}%`;
});
const goback = () => {
    if (counter>0){
        counter--;
        slideImage();
    }
};
const gonext = () => {
    if (counter< slides.length-1){
        counter++;
        slideImage();
    }
};
const slideImage = ()=> {
    slides.forEach((carousel)=>{
        carousel.style.transform = `translateX(-${counter * 100}%)`;
    });
};