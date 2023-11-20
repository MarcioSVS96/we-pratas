// Verifica se a URL atual contém "formulario.html"
if (window.location.href.includes("formulario.html")) {
    // Esconde os elementos quando a página for carregada
    window.addEventListener('DOMContentLoaded', function() {
        // Seleciona os elementos a serem escondidos
        var navBot = document.querySelector('.nav-bot');
        var redesSociais = document.querySelector('.redes-sociais');
        var topo = document.querySelector('.topo');

        // Verifica se os elementos foram encontrados antes de tentar escondê-los
        if (navBot && redesSociais && topo) {
            // Esconde os elementos
            navBot.style.display = 'none';
            redesSociais.style.display = 'none';
            topo.style.display = 'none';
        }
    });
}