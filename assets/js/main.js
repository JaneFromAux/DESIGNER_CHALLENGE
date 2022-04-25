

let email = document.getElementById('inputEmail');
let overlay = document.getElementById('overlay');

function showOverlay() {
    console.log('function runs');
    overlay.style.display = "block";
}
function hideOverlay() {
    console.log('function closes');
    overlay.style.display = 'none';
}