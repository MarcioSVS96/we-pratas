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

// Função para criar o texto com os itens do pedido para enviar via WhatsApp
function criarTextoPedido() {
    const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    let texto = 'Pedido We Pratas:\n\n';

    carrinhoItens.forEach((item, index) => {
        texto += `${index + 1}. ${item.nome} - ${item.preco}\n`;
    });

    return texto;
}

// Função para exibir os itens no carrinho e calcular o total
function exibirCarrinho() {
    const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];
    const cartItemsElement = document.getElementById('cartItems');
    const cartCounter = document.getElementById('cartCounter');
    const cartTotal = document.querySelector('.cartTotal'); // Seleciona o elemento do total

    cartItemsElement.innerHTML = '';
    cartCounter.textContent = carrinhoItens.length;

    let totalPrice = 0; // Variável para armazenar a soma dos preços

    carrinhoItens.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.nome} - ${item.preco}`;
        listItem.classList.add('liProducts');
    
        const removeButton = document.createElement('button');
    
        const ionIcon = document.createElement('ion-icon');
        ionIcon.setAttribute('name', 'trash-outline'); // Define o nome do ícone como 'trash-outline'
        removeButton.appendChild(ionIcon); // Adiciona o ícone como filho do botão
    
        removeButton.addEventListener('click', () => {
            removerDoCarrinho(index);
        });
    
        listItem.appendChild(removeButton);
        cartItemsElement.appendChild(listItem);
    
        // Convertendo o preço para um número para somar ao total
        const price = parseFloat(item.preco.replace('R$', '').replace(',', '.'));
        totalPrice += price;
    });
    
    

    // Exibe o total no carrinho
    cartTotal.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
}

// Função para enviar o pedido via WhatsApp
function enviarPedidoViaWhatsApp() {
    const textoPedido = criarTextoPedido();
    const carrinhoItens = JSON.parse(localStorage.getItem('carrinho')) || [];

    let totalPrice = 0; // Variável para armazenar a soma dos preços

    carrinhoItens.forEach((item) => {
        // Convertendo o preço para um número para somar ao total
        const price = parseFloat(item.preco.replace('R$', '').replace(',', '.'));
        totalPrice += price;
    });

    const textoPedidoComTotal = `${textoPedido}\n\nTotal: R$ ${totalPrice.toFixed(2)}`;

    const seuNumero = '5581984572161'; // Adicione o seu número de telefone aqui
    const linkWhatsApp = `https://wa.me/${seuNumero}/?text=${encodeURIComponent(textoPedidoComTotal)}`;
    window.open(linkWhatsApp);
}

// Função para fechar o carrinho
function fecharCarrinho() {
    const cartOverlay = document.getElementById('cartOverlay');
    cartOverlay.style.display = 'none';
}

// Adicionando evento ao botão "Enviar Pedido via WhatsApp"
document.getElementById('enviarPedido').addEventListener('click', enviarPedidoViaWhatsApp);

// Adicionando evento ao botão do carrinho para exibir o carrinho ao ser clicado
document.getElementById('cart-btn').addEventListener('click', () => {
    exibirCarrinho();
    const cartOverlay = document.getElementById('cartOverlay');
    cartOverlay.style.display = 'flex';
});

// Chame exibirCarrinho() para exibir os itens no carrinho quando a página carregar
exibirCarrinho();
