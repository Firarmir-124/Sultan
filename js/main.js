// atroposJS parameters
// rotateLock: true,
// rotateXMax: 15,
// rotateYMax: 15,
// shadow: true,
// shadowOffset: 10,
// shadowScale: 0.8,
// highlight: false,
// durationEnter: 600,
// activeOffset: 60




let col = ['.my-atropos', '.my-atropos2','.my-atropos3'];
function getAropos() {
    for(let i = 0; i < col.length; i++) {
        let el = col[i]
        const myAtropos = Atropos({
            el,
            rotateLock: true,
            shadow: false,
            shadowOffset: 10,
        });
    }
}
getAropos()

var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

window.onscroll = function() {gOmouse()};
function gOmouse() {
  const circle = document.querySelector('.circle');
  if(document.documentElement.scrollTop > 100) {
    circle.classList.add('active');
  } else {
    circle.classList.remove('active');
  }
}

function scroll() {
  let blocsScroll = ['.bob', '.card1', '.card2', '.swiper', '.logo_secvis', '.contact'];
  for (let i = 0; i < blocsScroll.length; i++) {
    let readyBlock = blocsScroll[i];
    ScrollReveal().reveal
    (readyBlock, 
    {
      scale: 0.5,
      delay: 300,
    },
    );
  }
  
}
scroll()

  const block = document.querySelector('.container_video'),
        btn_vidio = document.querySelector('.play_video'),
        block_body = document.body;
    btn_vidio.onclick = function() {
      if (block.classList.contains('active')) {
        block.classList.remove('active');
        block_body.style.overflow = 'auto'
      } else {
        block.classList.add('active');
        block_body.style.overflow = 'hidden'
      }
    }

    const block_adap_menu = document.querySelector('.adap_menu'),
          btn_adap_menu = document.querySelector('.btn_on_menu');
      btn_adap_menu.onclick = function() {
        block_adap_menu.classList.add('active')
      }
      block_adap_menu.onclick = function() {
        block_adap_menu.classList.remove('active')
      }
