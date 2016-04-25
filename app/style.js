/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function ($) {
    /*$.fn.greenify = function (options) {
     var that = this;
     var attr = this.attr("toggle-element");
     
     if(attr){
     $()
     }
     
     return this;
     };*/

    $("body").on("click", "[toggle-element]", function () {
        var attr = $(this).attr("toggle-element");
        $("[toggable-element=" + attr + "]").toggleClass("inactive");
    });

}(jQuery));