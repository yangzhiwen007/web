// 获取 DOM 元素
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// 显示指定幻灯片
function showSlide(index) {
  const slidesContainer = document.querySelector('.slides');
  currentIndex = (index + slides.length) % slides.length; // 保证循环播放
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 左右按钮事件
prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
nextButton.addEventListener('click', () => showSlide(currentIndex + 1));

// 自动播放轮播图
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);
