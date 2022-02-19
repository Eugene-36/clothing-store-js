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

//* ===================SHOW SCROLL UP===================================
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 460) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
  console.log('scrollUp', scrollUp);
}
window.addEventListener('scroll', scrollUp);

//*=======================SCROLL======================
document.querySelector('.active').onclick = () => {
  window.scrollTo(pageYOffset, 0);
};
