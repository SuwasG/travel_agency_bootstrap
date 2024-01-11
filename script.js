




   //#region - start of - number counter animation
        const counterAnimation = (querySelector, start = 0, end, duration = 1000) => {
          const target = document.querySelector(querySelector);
          let startTimestamp = null;
          const step = (timestamp) => {
           if (!startTimestamp) startTimestamp = timestamp;
           const progress = Math.min((timestamp - startTimestamp) / duration, 1);
           target.innerText = Math.floor(progress * (end - start) + start);
           if (progress < 1) {
            window.requestAnimationFrame(step);
           }
          };
          window.requestAnimationFrame(step);
         };
         //#endregion - end of - number counter animation
         
         document.addEventListener("DOMContentLoaded", () => {
          counterAnimation("#count1", 0, 10, 1000);
          counterAnimation("#count2", 500, 205050, 1100);
          counterAnimation("#count3", 0, 12550, 1050);
          counterAnimation("#count4", 0, 50, 1000);
         });

// testimonial
var splide = new Splide( '.splide', {
                
    perPage: 4,
    gap    : '1rem',
    focus:0,
    breakpoints: {
      991: {
        perPage: 3,
        gap    : '.7rem',
      
      },
      900:{
        perPage:2,
        gap:'.7rem',
      },
      767:{
          perPage:2,
          gap:'.7rem'
      },
  
  
      450: {
        perPage: 1,
        gap    : '.7rem',
      
      },
    },
  } );
  
  splide.mount();



