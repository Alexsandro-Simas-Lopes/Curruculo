// swiper js 
const swiper = new Swiper('.swiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });

// show/hide skill items
const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
    skill.querySelector('.items').classList.toggle('show-items');
    })
})

// ======= CAROUSEL SECTION ======
const imgs = getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function projects(){idx++;

if(idx >= imgs.length - 1){
  idx = 0;}

imgs.style.transform = 'translateX($(-idx * 500)px)';}

setInterval(projects, 2000)
