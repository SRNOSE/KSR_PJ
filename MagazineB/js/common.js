//제이쿼리 기본 JS - common.js

///제이쿼리 로드구역////////////
$(function(){
     
    //1.변수할당
    let all = $("#all");

    let clo = $("#close");

    let smsub = $(".smsub");

    //기능2: #all메뉴 누르면 #all메뉴 사라지고 #close, .smsub right값 주기
  
   all.click(function(){
        all.hide(300),
        clo.show(300)
        smsub.css({
            right:"0%"
        });
    });

    //기능3 : #close클릭하면 #close, .smsub 없어지고 #all보이기

    clo.click(function(){
      clo.hide(300),
      all.show(300),
      smsub.css({
        right:"-200%"
      });
    });

});///////////제이쿼리 로드구역/////////////