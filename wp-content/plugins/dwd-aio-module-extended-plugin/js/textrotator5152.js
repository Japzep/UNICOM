(function($) {
    var aiotarget = $('.dwd-aio'),
        aiorotator = $('.dwd-aio.et_pb_rotator_effect').not('.dwd-hide-content'),
        aiohover = $('.dwd-hide-content');
    if (aiotarget.hasClass('et_pb_rotator_effect')) {
        $(aiorotator).each(function(index, value) {
            var type = $(".et_pb_aio_container", value).data('rotator-type'),
                auto_speed = $(".et_pb_aio_container", value).data('rotator-speed'),
                rotate = $(".dwd-rotator", value);
            $(this).waypoint(function() {
                $(rotate).Morphext({
                    animation: type,
                    separator: "|",
                    speed: auto_speed
                }).show();
            }, {
                offset: '100%'
            });
        });
    }
    $(aiohover).each(function(index, value) {
        var type = $(".et_pb_aio_container", value).data('rotator-type'),
            auto_speed = $(".et_pb_aio_container", value).data('rotator-speed'),
            rotate = $(".dwd-rotator", value);

        $(this).hover(
            function() {
                $(rotate).Morphext({
                    animation: type,
                    separator: "|",
                    speed: auto_speed
                }).show();
            },
            function() {
                $(rotate).Morphext('stop');
            }
        )
    });
    $('.dwd-aio.dwd-hide-content').hover(
        function() { $('.dwd-aio.dwd-hide-content .et_pb_blurb_content').addClass('animated') },
        function() { $('.dwd-aio.dwd-hide-content .et_pb_blurb_content').removeClass('animated') }
    )
})(jQuery);