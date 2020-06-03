(function($) {
    window.hmm = {
        init: function() {
            this.eventHandlers();
        },
        mouseOverDescription: function(e) { 
            if (e.target.className === 'services-image') {
                $(e.target).find('.services-desc').fadeIn(500);
            }
        },
        mouseAwayDescription: function(e) {
            console.log(e.target)
            // console.log(e.target.parentNode.className === 'services-image')
            // if (e.target.parentNode.className === '.services-image') {
                $(e.target).find('.services-desc').fadeOut(500);
                // e.target.querySelector('.services-desc').style.display = 'none';
            // }
        },
        eventHandlers: function() {
            $('.services-wrapper').on('mouseover', function(e) {window.hmm.mouseOverDescription(e)});
            $('body').on('mouseover', function(e) {window.hmm.mouseOverDescription(e)});
        },
    }
    $(document).ready(function() {
        window.hmm.init();
    });

})(jQuery);