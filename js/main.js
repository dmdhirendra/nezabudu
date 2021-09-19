$(function(){
   $(document).ready(function(){
      if (window.screen.width < 710) {

         $('.slide').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true,
            // autoplay: true,
            autoplaySpeed: 2000,
         });    
      } else if (window.screen.width < 1024) {
         $('.famous-profiles-block.slide').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true,
            // autoplay: true,
            autoplaySpeed: 2000,
         });
         $('.memory-desc-block.slide').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true,
            // autoplay: true,
            autoplaySpeed: 2000,
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

