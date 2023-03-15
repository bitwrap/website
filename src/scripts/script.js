let isExpanded = false;
const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
    if (isExpanded) {
        // open with transition
        menu.style.display = 'none';
        isExpanded = false;
    } else {
        menu.style.display = 'block';
        isExpanded = true;
    }
});

// get width on load of page
const width = window.innerWidth;
if (width < 768) {
    menu.style.display = 'none';
}