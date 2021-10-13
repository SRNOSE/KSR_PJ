//제이쿼리 기본 JS - common.js

///제이쿼리 로드구역////////////
$(function(){
    // 대상:.smsub 
    //기능1 : 평소에 안보이기
    $(".smsub").hide(),
    $("#close").hide();

    //기능2 : #all클릭하면 #all안보이고 .smsub,#close 보이기
  
   $("#all").click(function(){
    $("#all").hide(500),
    $(".smsub").show(500),
    $("#close").show(500)
    });

    //기능3 : #close클릭하면 #close, .smsub 없어지고 #all보이기

    $("#close").click(function(){
        $("#close").hide(500),
        $(".smsub").hide(500),
        $("#all").show(500)
    });

});///////////제이쿼리 로드구역/////////////