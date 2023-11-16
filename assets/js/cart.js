// Função para adicionar item ao carrinho
function adicionarAoCarrinho(produto) {
    const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinhoItens.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinhoItens));
    exibirCarrinho();
}

// Função para remover item do carrinho
function removerDoCarrinho(index) {
    const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinhoItens.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinhoItens));
    exibirCarrinho();
}

// Função para exibir os itens no carrinho
function exibirCarrinho() {
    const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    const cartItemsElement = document.getElementById('cartItems');
    const cartCounter = document.getElementById('cartCounter');

    cartItemsElement.innerHTML = '';
    cartCounter.textContent = carrinhoItens.length;

    carrinhoItens.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.nome} - ${item.preco}`;
        listItem.classList.add('liProducts');
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', () => {
            removerDoCarrinho(index);
        });

        listItem.appendChild(removeButton);
        cartItemsElement.appendChild(listItem);
    });
}

// Função para fechar o carrinho
function fecharCarrinho() {
    const cartOverlay = document.getElementById('cartOverlay');
    cartOverlay.style.display = 'none';
}

// Adicione um event listener ao botão de carrinho para exibir o carrinho ao ser clicado
document.getElementById('cart-btn').addEventListener('click', () => {
    exibirCarrinho();
    const cartOverlay = document.getElementById('cartOverlay');
    cartOverlay.style.display = 'flex';
});

// Chame exibirCarrinho() para exibir os itens no carrinho quando a página carregar
exibirCarrinho();
