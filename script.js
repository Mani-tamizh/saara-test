
let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;
    currentIndex += step;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    const newTransformValue = -currentIndex * 102 + '%';
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue})`;
}

let btn = document.getElementById("btn");
let list = document.querySelector(".list");

btn.addEventListener('click',()=>{
    list.classList.add('li');

list.addEventListener('click',()=>{
    list.classList.remove('li');
})
});


        let sections = document.querySelectorAll('.pd1');
        window.onscroll=()=>{
            sections.forEach(sec=>{
                let top = window.scrollY;
                let offset =sec.offsetTop;
                let height = sec.offsetHeight;

                if(top>=offset && top<offset + height)
                {
                    sec.classList.add('show-animate');
                }
            });
        } 
