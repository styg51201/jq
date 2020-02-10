// $.fn.my = function () {
//     this.css({
//         'color': 'red',
//         'font-size': '100px'
//     })
//     return this;
// }

//可以自訂參數
$.fn.my = function (options) {
    // extend->建立物件?
    // 
    var settings = $.extend({ color: "red", backgroundColor: "pink" }, options); return this.css({ color: settings.color, backgroundColor: settings.backgroundColor });
}