(function () {
    window.addEventListener('scroll', destacaMenu);
    var $menu = document.querySelector('#nav');

    var $links = $menu.querySelectorAll('.link');

    function destacaMenu() {

        var positions = [];
        for (i = 0; i < $links.length; i++) {
            positions[i] = getYScrollPosition($links[i]);
        }
       
        currentLink = getActualLink(positions);
        var linkSelected = $menu.querySelector('.selected');
        if (linkSelected) {
            linkSelected.classList.remove('selected');
        }
        currentLink.classList.add('selected')
        
    }

    function getYScrollPosition(link) {

        var alvo = document.querySelector(link.getAttribute('href'));
        var positionY = alvo.getBoundingClientRect().top;
        return positionY;

    }

    function getActualLink(positions) {

        var length = positions.length;
        while (length) {
            length--;
            if (positions[length] < innerHeight / 3) {
                return $links[length];
            }
        }
        return $links[0];
    }

})()