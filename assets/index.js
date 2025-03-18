window.addEventListener('load', function () {
    document.querySelector('.preload-message').innerHTML = '<strong>Aplicação inicializada com sucesso.</strong>';
    document.querySelector('.btStart').classList.remove('hidden')
    document.querySelector('.btStart').addEventListener('click', function() {
        this.parentNode.parentNode.classList.add('hidden')
        document.querySelector('#unity-canvas').requestFullscreen();
    })
})
