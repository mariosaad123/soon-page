var countDownDate = new Date();
countDownDate = new Date(countDownDate.getFullYear() + 1 ,countDownDate.getMonth() - 6 , 1);

var x = setInterval(function() {
 var now = new Date();
 var diff = countDownDate - now;

 // حساب الاشهر بالمللي ثانية
 var months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));

 // حساب الايام
 var days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

 // حساب الساعات
 var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

 // حساب الدقائق
 var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

 // حساب الثواني
 var seconds = Math.floor((diff % (1000 * 60)) / 1000)

 // تحديد كل هذا الوقت داخل سبان
 document.getElementById("months").innerHTML = months;
 document.getElementById("days").innerHTML = days;
 document.getElementById("hours").innerHTML = hours;
 document.getElementById("minutes").innerHTML = minutes;
 document.getElementById("seconds").innerHTML = seconds;
}, 1000);


// لاظهار جملة (يرجى ادخال البريد الالكتروني) عند ادخال نص فارغ او غير صحيح
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()