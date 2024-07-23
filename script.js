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
