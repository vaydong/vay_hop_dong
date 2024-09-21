// Delay the display of the message after 10 seconds
setTimeout(function() {
    document.querySelector('.loader').style.display = 'none';
    document.getElementById('message').style.display = 'block';
}, 10000);  // 10 seconds delay
