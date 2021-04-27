
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', toggleClick));
panels.forEach(panel => panel.addEventListener('transitionend', startTransition));

function toggleClick(e) {
    const classArray = Array.from(e.target.classList);
    if (!classArray.includes('open')) panels.forEach(panel => panel.classList.remove('open'))
    e.target.classList.toggle('open');
}

function startTransition(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}
