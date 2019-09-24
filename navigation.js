function navigation() {
    let nav = $('.navigation');
    if (nav.length) {
        const CLASS_BODY = 'navigation_open';
        const CLASS_ACTIVE = 'navigation_active';
        let body = $('body');
        let blackout = $('.navigation-blackout');

        nav.each(function () {
            let self = $(this);

            self.css({'min-height': window.innerHeight});

            $(window).on('resize', function () {
                self.css({'min-height': window.innerHeight});
            });
        });

        //close (on blackout)
        $(document).on('click', '.navigation-blackout', function () {
            nav.each(function () {
                $(this).removeClass(CLASS_ACTIVE);
            });
            body.removeClass(CLASS_BODY)
                .css({
                    'padding-right': '',
                    'overflow': ''
                });
            $(this).fadeOut(500);
        });

        //open
        $(document).on('click', '.navigation-open', function () {
            let selfNav = $('#' + $(this).attr('data-navigation'));
            if (selfNav.length) {
                if (!body.hasClass(CLASS_BODY)) {
                    selfNav.addClass(CLASS_ACTIVE);
                    body.addClass(CLASS_BODY)
                        .css({
                            'padding-right': window.innerWidth - document.body.clientWidth,
                            'overflow': 'hidden'
                        });
                    blackout.fadeIn(500);
                }
            }
        });

        //close
        $(document).on('click', '.navigation-close', function () {
            $(this).parents('.navigation').removeClass(CLASS_ACTIVE);
            body.removeClass(CLASS_BODY)
                .css({
                    'padding-right': '',
                    'overflow': ''
                });
            blackout.fadeOut(500);
        });
    }
}

$(function () {
    navigation();
});