const bloco = document.getElementById('bloco');
bloco.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        bloco.style.color = 'blue';
        bloco.style.background = 'black';
    }
});