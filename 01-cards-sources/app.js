let slides = document.querySelectorAll('.slide');

for(let slide of slides) {
    slide.addEventListener('click', ()=>{

        allSliderClassRemove('active')
        slide.classList.add('active')
    })
}

function allSliderClassRemove(className) {
    slides.forEach(slide => {
        slide.classList.remove(className)
    })
}