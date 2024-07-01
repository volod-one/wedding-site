
document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.reveal');

    function checkReveal() {
        const windowHeight = window.innerHeight;
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            const revealPoint = 150; // Adjust this value to control when the text appears

            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Initial check in case some elements are already in view
});


document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.reveal-left');

    function checkReveal() {
        const windowHeight = window.innerHeight;
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            const revealPoint = 150; // Adjust this value to control when the text appears

            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Initial check in case some elements are already in view
});


document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.reveal-right');

    function checkReveal() {
        const windowHeight = window.innerHeight;
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            const revealPoint = 150; // Adjust this value to control when the text appears

            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Initial check in case some elements are already in view
});
