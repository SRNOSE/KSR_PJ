
function afterLoad(){
var bigPic = document.querySelector(".big");
var smallPics = document.querySelectorAll(".small");

for(var i = 0; i < smallPics.length; i++){
    smallPics[i].addEventListener("click",changepic);

}

function changepic(){
    var smallPicAttribute = this.getAttribute("src");
    bigPic.setAttribute("src", smallPicAttribute);
}
}
window.addEventListener('load', afterLoad);

function gnbMenuFnc() {
    $('.btn-allmenu').on('click', function() {
        $(this).toggleClass('on');
        if ($(this).hasClass('on')) {
            $('html').addClass("ovh");
        } else {
            $('html').removeClass("ovh");
        }
    });

    $('#gnb-menu-wrap .gnb > li > a').on('click', function() {
        $('#gnb-menu-wrap .on').removeClass('on');
        $(this).addClass('on');
    });
}

$(function() {
    gnbMenuFnc();
    // 꼭 호출하기
});