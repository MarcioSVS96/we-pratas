// Função para rolar suavemente até o topo da página
document.getElementById('topoPagina').addEventListener('click', function(event) {
    event.preventDefault();

    // Rola suavemente até o topo da página
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  