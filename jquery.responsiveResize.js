
(function ($) {
    $.fn.responsiveResize = function (params) {
        var defaults = {
            resizingDelay: 500,
            callback: function (resizing) {}
        };
        params = $.extend (defaults, params);

        var resizing        = false,
            resizingTimeout = null,
            resizingDelay   = params.resizingDelay;

        var resizeAction = function () {
            resizing = true;
            setTimeout (function () {defaults.callback (resizing);}, resizingDelay);
            if (resizingTimeout !== null) clearTimeout (resizingTimeout);
            resizingTimeout = setTimeout (function () {resizing = false; resizingTimeout = null}, resizingDelay - 20);
        }; // resizeAction ();

        $(this).on ('resize', resizeAction);
        resizeAction ();

        return this;
    }; // responsiveResize ();
})(jQuery);
