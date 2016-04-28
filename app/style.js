/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function ($) {
    var dropdown_close = function (htmlElement) {
        $(".dropdown").each(function () {
            if (this !== htmlElement && !$(this).hasClass("js__dropdown--open")) {
                $("[type=checkbox]", this).each(function () {
                    if (!$(this).is(':checked')) {
                        $(this).prop('checked', true).attr('checked', true);
                    }
                });
            } else {
                $("[type=checkbox]", this).removeAttr("checked");
            }
        });
    };

    var boolean_and_array_join = function (array) {
        var resp = !!(array.length);
        $.each(array, function (k, v) {
            resp = (!!v && resp);
            if (!resp) {
                return false;
            }
        });
        return resp;
    };

    $("body").on("click", "[toggle-element]", function () {
        var attr = $(this).attr("toggle-element");
        $("[toggable-element=" + attr + "]").toggleClass("inactive");
    });

    $("body").on("click", ".dropdown", function (event) {
        $(".dropdown").not(this).removeClass("js__dropdown--open");
        $(this).toggleClass("js__dropdown--open");
        dropdown_close();
    });

    $("body").on("click", "*", function (event) {
        if ($(".js__dropdown--open").length) {
            var dropdown_checks = [
                !$(event.target).closest('.dropdown').length,
                !$(event.target).is('.dropdown')
            ];
            if ($(".js__dropdown--open").length &&
                    !$(event.target).closest('.dropdown').length &&
                    !$(event.target).is('.dropdown')) {
                $(".dropdown").removeClass("js__dropdown--open");
                dropdown_close();
            }
        }
    });

}(jQuery));