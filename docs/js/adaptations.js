document.addEventListener('DOMContentLoaded',() => {

    const toggleContent = document.getElementById('menu-content');

    document.getElementById('mobile-icon').addEventListener('click', (event) => {
        event.preventDefault();

        if (!toggleContent.classList.contains('show')) {
            toggleContent.classList.add('show');
            toggleContent.style.height = 'auto';

            const height = toggleContent.clientHeight + 'px';

            toggleContent.style.height = '0px';

            setTimeout(function () {
                toggleContent.style.height = height;
            }, 0);
        } else {
            toggleContent.style.height = '0px';

            toggleContent.addEventListener('transitionend',
                function () {
                    toggleContent.classList.remove('show');
                }, {
                    once: true
                });
        }
    });

})