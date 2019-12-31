
//// navbar transparent bckg change 

document.addEventListener("DOMContentLoaded" , () => {
     

//// section who scroll animations

let whoCards = document.querySelectorAll(".who__card");

let optionsWho = {
  threshold : 0.2
}

let observerWho = new IntersectionObserver(showCard , optionsWho) ;

function showCard(entries, observerWho) {
   entries.forEach(e => {
     if (!e.isIntersecting) {      
        return ; 
        
      } else {
       e.target.classList.add( "who__card--animated" ) ; 
       observerWho.unobserve(e.target)  
     }
   });
}

whoCards.forEach(e => {
   observerWho.observe(e) ;
});

})


////// SWIPER INIT JS CODE AND SETINGS

var mySwiper = new Swiper ('.swiper-container', {
  effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      updateOnWindowResize: true ,
     
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable : true, 
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
  },

})