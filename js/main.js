$(function(){
   $(document).ready(function(){

        // const swiper = new Swiper('.swiper', {
        //     loop: true,
        //     pagination: '.swiper-pagination',
        //     slidesPerView: 1,
        //     paginationClickable: true,
        //     spaceBetween: 30,
        //     observer: true ,
        //     observeParents: true,

        // });
      let dots = true;
      let speed = 100;
      let autoplay = false;
      let autoplaySpeed = 2000;
      let infinite = true;
      let arrows = false;


      let touchMove = true;
      let mobileFirst = true;
      let waitForAnimate = false;
      let pauseOnFocus = true;
      let pauseOnHover = true;
      let swipeToSlide = false;
      let swipe = true;
      let touchThreshold = 7;
      let slidesToScroll = 1;
      


      if (window.screen.width < 710) {
         $('.slide').slick({
            // arrows: arrows,
            mobileFirst: mobileFirst,
            waitForAnimate: waitForAnimate,
            swipeToSlide: swipeToSlide,
            slidesToScroll: slidesToScroll,
            swipe: swipe,
            touchThreshold: touchThreshold,
            pauseOnHover: pauseOnHover,
            pauseOnFocus: pauseOnFocus,

            dots: dots,
            infinite: infinite,
            speed: speed,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true,
            autoplay: autoplay,
            autoplaySpeed: autoplaySpeed,
         });    
      } else if (window.screen.width < 1024) {
         $('.famous-profiles-block.slide', '.memory-desc-block.slide').slick({
            // arrows: arrows,
            mobileFirst: mobileFirst,
            waitForAnimate: waitForAnimate,
            swipeToSlide: swipeToSlide,
            slidesToScroll: slidesToScroll,
            swipe: swipe,
            touchThreshold: touchThreshold,
            pauseOnHover: pauseOnHover,
            pauseOnFocus: pauseOnFocus,

            dots: dots,
            infinite: infinite,
            speed: speed,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true,
            autoplay: autoplay,
            autoplaySpeed: autoplaySpeed,
         });

      }

      let languages = [
         "Русский",
         "Українська",
         "English"

      ];
      autocomplete(document.getElementById("select-language"), languages);
 

      let work_type = [
         "Работа с музеями",
         "Написание статей о личностях",
         "Интервьюирование ветеранов",
         "Уборка захоронений ветеранов",
         "Возложение цветов ветеранам",
         "Сотрудничество с гос. организациями",
         "Сотрудничество с общинами",
         "Работа по уборке на кладбище",
         "Оцифровка архивов",
         "Оцифровка данных с памятников",
         "Партнерство по установке памятнико",
         "Партнерство по уходу за захоронениями"
      ];
      autocomplete(document.getElementById("volunteer-work"), work_type)

      function autocomplete(inp, arr) {
         
         let currentFocus;
 

         inp.addEventListener("click", showAutocompleteList);

         function addActive(x) {
             if (!x) return false;
             removeActive(x);
             if (currentFocus >= x.length) currentFocus = 0;
             if (currentFocus < 0) currentFocus = (x.length - 1);
             x[currentFocus].classList.add("autocomplete-active");
         }
         function removeActive(x) {
             for (var i = 0; i < x.length; i++) {
                 x[i].classList.remove("autocomplete-active");
             }
         }
         
 
         function showAutocompleteList(e) {
            
             inp.selectionStart = inp.value.length;
             let a, b, i, k, val = this.value;
            if (document.getElementById(this.id + "autocomplete-list")) {
             closeAllLists();
            //  if (!val) { return false; }
            } else {
             currentFocus = -1;
             a = document.createElement("DIV");
             a.setAttribute("id", this.id + "autocomplete-list");
             a.setAttribute("class", "autocomplete-items");
             this.parentNode.appendChild(a);
             for (i = 0; i < arr.length; i++) {
                         b = document.createElement("DIV");
                         b.innerHTML = "<string>" + arr[i] + "</string>";
                         b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                         b.addEventListener("click", function(e) {
                             inp.value = this.getElementsByTagName("input")[0].value;
                             closeAllLists();
                         });
                         a.appendChild(b);
             }
            }
         }
         document.addEventListener("click", function (e) {
             if (e.target != inp) {
                 closeAllLists(e.target);
                 if (valueFromArrOnly && !arr.includes(inp.value)) {
                     inp.value = defaultValue;
                 }
             }
         }, true);
         function closeAllLists(elmnt) {
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
     }

   });
});

