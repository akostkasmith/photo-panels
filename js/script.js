
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', toggleClick));

function toggleClick(e) {
    panels.forEach(panel => panel.classList.remove('open'))
    e.target.classList.add('open');
}
