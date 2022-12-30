
let slides = Array.from(document.querySelectorAll('.img-container img')),
slidecount = slides.length,
currentSlide = 1;

let navigationUl = document.querySelector('.navigation ul')

for (i in slides){
    let currli = document.createElement('li')
    currli.setAttribute("data-count", +i+1)
    currli.appendChild(document.createTextNode(+i+1))
    navigationUl.appendChild(currli)
}

let navigationBullets = Array.from(navigationUl.children)

navigationBullets.forEach(element => {
    element.addEventListener('click', () => {
        currentSlide = element.getAttribute('data-count')
        adjust()
    }
    )
});


let nextButton = document.querySelector('#nextbtn'),
    prevButton = document.querySelector('#prevbtn')

nextButton.addEventListener('click', goNext)
prevButton.addEventListener('click', goPrev)

function goNext(){
    if (currentSlide != slidecount) {
        currentSlide++
        adjust()
    }
}

function goPrev(){
    if (currentSlide != 1) {
        currentSlide--
        adjust()
        }
    }

adjust()

function adjust(){

    document.querySelector('.current-slide-counter').innerText = `slide ${currentSlide} of ${slidecount}`
    slides.forEach(e => e.classList.remove('active'))
    navigationBullets.forEach(e => e.classList.remove('active'))

    slides[currentSlide-1].classList.add('active')
    navigationBullets[currentSlide-1].classList.add('active')

    if (currentSlide != slidecount) {
        nextButton.classList.remove('disabled')
    }
    else {
        nextButton.classList.add('disabled')
    }
    if (currentSlide != 1) {
        prevButton.classList.remove('disabled')
    }
    else {
        prevButton.classList.add('disabled')
    }
}