


(function ($) {

})(jQuery);

    function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('c-hamburger_line_btn');

    hamburger.addEventListener('click', function() {
      body.classList.toggle('nav_open'); //メニュークリックでnav-openというクラスがbodyに付与
    });
    blackBg.addEventListener('click', function() {
      body.classList.remove('nav_open'); //もう一度クリックで解除
    });
}
toggleNav();














