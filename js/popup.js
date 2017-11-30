$(document).ready(function() {
   $('#Popup').click(function() {
     var NWin = window.open($(this).prop('href'), '', 'height=800,width=800');
     if (window.focus)
     {
       NWin.focus();
     }
     return false;
    });
});​
