document.addEventListener("DOMContentLoaded" , () => {


    //// navigation scroll animation   
  
    let nav = document.querySelector(".navigation") ;
    let header = document.querySelector(".header-animation") ;
  
    let options = {
      // root : null 
      // rootMargin : "0px" ,
      // rootMargin : "-100px 20px 20px 20px"
      threshold : 0.9
    }
    
    let observer = new IntersectionObserver(navRemove , options) ;
    
    function navRemove(entries, observer) {
       entries.forEach(e => {
         if (e.isIntersecting) {
           
            nav.classList.remove("navigation--black")
          } else {
           
            nav.classList.add("navigation--black")
         }
       });
    }
   observer.observe(header) ;
  
  })