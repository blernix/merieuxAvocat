function toggleDescription(element) {
    let dropdownContent = element.querySelector('.dropdown-content');
    let arrow = element.querySelector('.arrow');

    // Fermer tous les autres dropdowns
    let allDropdowns = document.querySelectorAll('.nav-links .dropdown');
    allDropdowns.forEach(function(dropdown) {
        if (dropdown !== element) {
            let otherDropdownContent = dropdown.querySelector('.dropdown-content');
            let otherArrow = dropdown.querySelector('.arrow');
            otherDropdownContent.style.maxHeight = 0;
            otherDropdownContent.style.opacity = 0;
            otherArrow.style.transform = '';
            dropdown.classList.remove('active');
        }
    });

    if (element.classList.contains('active')) {
        dropdownContent.style.maxHeight = 0;
        dropdownContent.style.opacity = 0;
        arrow.style.transform = '';
        element.classList.remove('active');
    } else {
        dropdownContent.style.display = 'block';
        setTimeout(() => {
            dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
            dropdownContent.style.opacity = 1;
        }, 10);
        arrow.style.transform = 'rotate(180deg)';
        element.classList.add('active');
    }
}

                            // NAVBAR

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('open');

    // Fermer tous les dropdowns lorsque la navbar est fermée
    if (!document.getElementById('nav-links').classList.contains('open')) {
        closeAllDropdowns();
    }
});

window.addEventListener('scroll', function() {
    // Fermer la navbar et tous les dropdowns lors du scroll
    if (document.getElementById('nav-links').classList.contains('open')) {
        document.getElementById('nav-links').classList.remove('open');
        closeAllDropdowns();
    }

    onScroll();
});

function closeAllDropdowns() {
    let allDropdowns = document.querySelectorAll('.nav-links .dropdown');
    allDropdowns.forEach(function(dropdown) {
        let dropdownContent = dropdown.querySelector('.dropdown-content');
        let arrow = dropdown.querySelector('.arrow');
        dropdownContent.style.maxHeight = 0;
        dropdownContent.style.opacity = 0;
        arrow.style.transform = '';
        dropdown.classList.remove('active');
    });
}

function onScroll() {
  const paragraphs = document.querySelectorAll('.main-content p');
  paragraphs.forEach(paragraph => {
    if (isElementInViewport(paragraph)) {
      paragraph.classList.add('visible');
    }
  });
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener('DOMContentLoaded', onScroll);



                        // CARROUSEL
                       document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const pagination = document.querySelector('.pagination');
    let currentIndex = 0;

    function createDots() {
        cards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
            pagination.appendChild(dot);
        });
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function goToSlide(index) {
        currentIndex = index;
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
        updateDots();
    }

    createDots();

    carousel.addEventListener('touchstart', handleTouchStart, false);
    carousel.addEventListener('touchmove', handleTouchMove, false);

    let x1 = null;
    let y1 = null;

    function handleTouchStart(evt) {
        const firstTouch = evt.touches[0];
        x1 = firstTouch.clientX;
        y1 = firstTouch.clientY;
    }

    function handleTouchMove(evt) {
        if (!x1 || !y1) {
            return false;
        }

        let x2 = evt.touches[0].clientX;
        let y2 = evt.touches[0].clientY;

        let xDiff = x2 - x1;
        let yDiff = y2 - y1;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                if (currentIndex > 0) {
                    goToSlide(currentIndex - 1);
                }
            } else {
                if (currentIndex < cards.length - 1) {
                    goToSlide(currentIndex + 1);
                }
            }
        }

        x1 = null;
        y1 = null;
    }
});


// Anime.js animations
const paragraphs = document.querySelectorAll('.main-content p');

function animateParagraphs() {
    paragraphs.forEach((paragraph, index) => {
        const rect = paragraph.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            paragraph.classList.add('visible');
        } else {
            paragraph.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', animateParagraphs);
animateParagraphs(); // Initial call to animate paragraphs on page load

// Parallax effect
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax-background');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});


