import Swal from 'sweetalert2';

//Components
let slideIndex = {}
export function renderSlider(name) {
   if (!slideIndex[name]) {
      slideIndex[name] = 0
   }
   let i;
   let slider = document.getElementById(name).childNodes;
   for (i = 0; i < slider.length; i++) {
      if (slider[i].classList) {
         slider[i].classList.remove('show');
      }
   }
   slideIndex[name]++;
   if (slideIndex[name] > slider.length) { slideIndex[name] = 1 }
   //for (i = 0; i < dots.length; i++) {
   //  dots[i].className = dots[i].className.replace(" active", "");
   //}
   slider[slideIndex[name] - 1].classList.add('show');
   return setTimeout(() => renderSlider(name), 2000);// Change image every 2 seconds
}
export function popUp() {
   Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
   })
}
export function toolTip(id) {
   // eslint-disable-next-line
   $('#' + id).tooltip('show')
}
//Data