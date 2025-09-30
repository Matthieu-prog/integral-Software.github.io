// Mobile nav & year
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if(toggle){
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
const yearEl = document.getElementById('year');
if(yearEl){ yearEl.textContent = new Date().getFullYear(); }
