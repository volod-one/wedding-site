
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

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbzR1fBzReEFieEoCBf9tQpNhrvdtwLxS6Ljt8f3tHMbQBOJUhe4ikt8CjJcdBV5Ua0k8Q/exec"

    var formData = new FormData(this);

    fetch(googleScriptUrl, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Форма успешно отправлена!'); // Display success message
            // Optionally reset the form
             this.reset();
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});