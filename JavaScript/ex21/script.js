

        (function () {

            var $menu = document.querySelector('header');
            window.addEventListener('scroll', changeMenu);

            function changeMenu() {
                var scrolledY = getYscroll();

                if (scrolledY > 30 && !hasClassShort()) {

                    document.body.classList.add('short');
                }
                if (scrolledY <= 40 && hasClassShort()) {
                    document.body.classList.remove('short');
                }
            }

            function getYscroll() {
                return pageYOffset;
            }

            function hasClassShort() {
                return !!document.querySelector('.short')
            }
        })()
