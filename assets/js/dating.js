$(document).ready(function() {
    // $('button[type="send"]').attr('disabled', true);
    // $('input[type="text"], input[type="password"]').on('keyup',function() {
    //     if($(this).val() != '') {
    //         $('button[type="submit"]').attr('disabled' , false);
    //     }else{
    //         $('button[type="submit"]').attr('disabled' , true);
    //     }
    // });

    $('input[type="checkbox"]').click(function(){
    if($(this).is(':checked')){
        $('button[type="send"]').attr('disabled' , false);
    }else {
        $('button[type="send"]').attr('disabled' , true);
    }

});

$(".carousel").owlCarousel({
         margin: 10,
         loop: true,
         autoplay: true,
         autoplayTimeout: 3000,
         autoplayHoverPause: true,
         responsive: {
           0:{
             items:1,
             nav: false
           },
           600:{
             items:2,
             nav: false
           },
           900:{
             items:4,
             nav: false
            }
         }
       });
       $('.first-button').on('click', function () {
           $('.animated-icon1').toggleClass('open');
 });

 const nav = document.querySelector(".nav-container");

 if (nav) {
   const toggle = nav.querySelector(".nav-toggle");

   if (toggle) {
     toggle.addEventListener("click", () => {
       if (nav.classList.contains("is-active")) {
         nav.classList.remove("is-active");
       }
       else {
         nav.classList.add("is-active");
       }
     });

     nav.addEventListener("blur", () => {
       nav.classList.remove("is-active");
     });
   }
 }

});
