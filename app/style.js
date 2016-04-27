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

    $("body").on("click", ".dropdown, *", function (event) {
        var that = this;
        if($(that).hasClass("dropdown")){
            $(".dropdown").removeClass("js__dropdown--open");
            $(this).addClass("js__dropdown--open");
            event.stopPropagation();
        }else{
            $(".dropdown").removeClass("js__dropdown--open");
        }
        //console.log(that, $(that).hasClass("dropdown"));
        $(".dropdown").each(function (k, v) {
            if (v !== that && !$(v).hasClass("js__dropdown--open")) {
                $("[type=checkbox]", v).each(function () {
                    if (!$(this).is(':checked')) {
                        $(this).prop('checked', true).attr('checked', true);
                    }
                });
            }else{
                $("[type=checkbox]", v).removeAttr("checked");
            }
        });
    });
    
    $("body").on("click", ".dropdown, *", function (event) {
        //console.warn("entra");
    });

}(jQuery));