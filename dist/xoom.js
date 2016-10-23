/* XOOM! (alpha 1.0) | MIT
 * Build: 
 */

var dropDown = document.querySelectorAll('.dropDown');
var dropDownArray = Array.prototype.slice.call(dropDown,0);

dropDownArray.forEach(function(el){
    var div = el.querySelector("div.nav-box");
    el.onmouseover=function(){
        TweenMax.to(div, .12, {
            opacity: 1,
            top: 59,
            autoAlpha: 1,
            scaleX: 1,
            scaleY: 1,
            repeat: 0,
            ease: Power1.easeInOut
        });
    };
    el.onmouseleave=function(){
        TweenMax.to(div, .12, {
            opacity: 0,
            autoAlpha:0,
            scaleX: 0.9,
            scaleY: 0.95,
            top: 40,
            repeat: 0,
            ease: Power1.easeInOut
        });
    };
});