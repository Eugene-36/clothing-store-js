const bar = document.getElementById('bar');
const closeBar = document.getElementById('close');
const nav = document.getElementById('navbar');

console.log(nav);
if (bar) {
  bar.addEventListener('click', (e) => {
    nav.classList.add('active');
  });
}

if (closeBar) {
  closeBar.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}
