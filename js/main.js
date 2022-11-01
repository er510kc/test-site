'use strict';
{
// ------------------------
// ハンバーガーメニュー
// ------------------------
  const btn = document.querySelector('.toggle_btn');
  const header = document.getElementById('header');
  const mask = document.getElementById('mask');
  const navi = document.querySelector('#navi')

console.log(navi);
  
  btn.addEventListener('click',()=> {
    header.classList.toggle('show');
  });
  
   // // #maskのエリアをクリックした時にメニューを閉じる
  mask.addEventListener('click',()=> {
    header.classList.remove('show');
  });

  // リンクをクリックした時にメニューを閉じる
  navi.addEventListener('click',()=> {
      header.classList.remove('show');
  });



// ------------------------
// Slick
// ------------------------
  $(document).ready(function(){
    $('.pickup-content').slick({
      arrows: false,
      centerMode:true,
      centerPadding: '100px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '50px',
            slidesToShow: 1
          }
        }
      ]
    });
  });
  
  // --------------------
  // フェードイン
  // --------------------
  const targets = document.querySelectorAll('.fadein');
  
  function callback(entries, obs) {
    console.log(entries);

    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
  
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.4,
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });
}


