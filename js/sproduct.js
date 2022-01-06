const mainImg = document.getElementById('mainImg');
const smallImg = document.getElementsByClassName('small-img');

[...smallImg].forEach((item, index) => {
  item.addEventListener('click', () => {
    mainImg.src = smallImg[index].src;
  });
});
