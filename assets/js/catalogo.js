let produtosGlobal = []; // Variável global para armazenar todos os produtos

function exibirCatalogo(categoria = "") {
    const container = document.querySelector("#catalogo-container");
    container.innerHTML = ""; // Limpa o conteúdo antes de exibir novos itens

    let produtosFiltrados = produtosGlobal;

    if (categoria !== "") {
        produtosFiltrados = produtosGlobal.filter(item => item.categoria === categoria);
    }

    const produtosAleatorios = escolherAleatorios(produtosFiltrados, 8);

    produtosAleatorios.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = item.imagem;
        img.alt = item.nome;

        const titulo = document.createElement("h3");
        titulo.textContent = item.nome;

        const span = document.createElement("p");
        span.textContent = `Preço: ${item.preco}`;

        const btnCard = document.createElement("button");
        btnCard.textContent = "Comprar";
        btnCard.id = `meuBotao${index}`;
        btnCard.addEventListener("click", function() {
            adicionarAoCarrinho(item);
        });

        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(span);
        card.appendChild(btnCard);
        container.appendChild(card);
    });
}

function escolherAleatorios(array, quantidade) {
    const copiaArray = [...array];
    const resultados = [];

    for (let i = 0; i < quantidade; i++) {
        const indiceAleatorio = Math.floor(Math.random() * copiaArray.length);
        resultados.push(copiaArray.splice(indiceAleatorio, 1)[0]);
    }

    return resultados;
}

function carregarProdutos() {
    fetch('catalogo.json')
        .then(response => response.json())
        .then(produtos => {
            produtosGlobal = produtos;
            exibirCatalogo();
        });
}

carregarProdutos();

// Adiciona eventos de clique para as categorias
const categorias = document.querySelectorAll('.categoria');
categorias.forEach(categoria => {
    categoria.addEventListener('click', function(event) {
        event.preventDefault();
        const categoriaSelecionada = categoria.textContent.toLowerCase();
        exibirCatalogo(categoriaSelecionada);
    });
});
