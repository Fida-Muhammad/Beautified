jQuery(document).ready(function(){

    "use strict";
   $(window).scroll(function(){
    var top= $(window).scrollTop();
    if(top>=90){
        $("header").addClass('secondary');
    }
    else
    if( $("header").hasClass('secondary')){
        $("header").removeClass('secondary');
    }
   });
});