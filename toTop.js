 // Hiển thị nút "To Top" khi cuộn xuống dưới 20px
 window.onscroll = function() {scrollFunction()};
  
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     document.getElementById("toTopButton").style.display = "block";
   } else {
     document.getElementById("toTopButton").style.display = "none";
   }
 }
 
 // Cuộn về đầu trang khi nhấp vào nút "To Top"
 function goToTop() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 }