'use strict';
{
  const btn = document.querySelector('.toggle_btn');
  const header = document.getElementById('header');

  btn.addEventListener('click',()=> {
    header.classList.toggle('show');
  });

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

}