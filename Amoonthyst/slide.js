var cont = 1; 
const MAX_SLIDES = 3; 
const MIN_SLIDES = 1; 

const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');

const radios = document.querySelectorAll('.manual-btn'); 


function moverSlide() {
    
    if (cont > MAX_SLIDES) {
        cont = MAX_SLIDES; 
    } else if (cont < MIN_SLIDES) { 
        cont = MIN_SLIDES; 
    }

    document.getElementById('radio' + cont).checked = true;
}

document.getElementById('radio1').checked = true;

setInterval(() => {
    cont++; 
    
    if (cont > MAX_SLIDES) {
        cont = 1; 
    }
    
    moverSlide();
}, 3000); 

if (prevButton && nextButton) { 
    
    nextButton.addEventListener('click', () => {
        cont++; 
        moverSlide();
    });

    prevButton.addEventListener('click', () => {
        cont--; 
        moverSlide();
    });
}

radios.forEach((radioElement, index) => {
    radioElement.addEventListener('click', () => {
        cont = index + 1; 
        
        moverSlide(); 
    });
});