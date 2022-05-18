(function(){

    var me = {};
    // console.log(document.querySelectorAll('.nav__link'))
    me.toggleToActiveLink = function(target) {
        var links = document.querySelectorAll('.nav__link');
        var showedSection = target.dataset.link;
        
        
        // console.log(links)
        for (var i = 0; i < links.length; i++) {
            if (links[i].classList.contains('nav__link--active')) {
                links[i].classList.remove('nav__link--active');
            }
        }
        target.classList.add('nav__link--active');
        scrollToActiveSection(showedSection)
    };

    function scrollToActiveSection(showedSection) {
        var section = document.querySelector('.' + showedSection);
        var coords = section.getBoundingClientRect();
        console.log(coords);

       

        var timerId = setInterval(function() {
            if (document.documentElement.scrollTop < coords.top) {
                window.scrollBy(0, 7);
            } else {
                clearInterval(timerId);
            }
        }, 1)
    }

    block.navigation = me;

}());