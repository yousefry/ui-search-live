jQuery(document).ready(function ($) {
    $('.search-live-input').click(function (e) {
        $('.sl-loading').removeClass("disable");
        $('.sl-loading').addClass("enable");
        $('.sl-items').addClass("show");
        $('.sl-box').addClass("bg-white");
    });

    $(document).click(function (e) {
        if ($(e.target).closest('.search-live').length < 1) {
            $('.sl-loading').removeClass("enable");
            $('.sl-loading').addClass("disable");
            $('.sl-items').removeClass("show");
            $('.sl-box').removeClass("bg-white");
        }
    });
})

