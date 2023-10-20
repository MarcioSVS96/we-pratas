function exibirCatalogo() {
    fetch('catalogo.json') 
        .then(response => response.json())
        .then(produtos => {
            const container = document.querySelector("#catalogo-container")

            produtos.map((item, index) => {
                const card = document.createElement("div")
                card.classList.add("card")

                const img = document.createElement("img")
                img.src = item.imagem
                img.alt = item.nome

                const titulo = document.createElement("h3")
                titulo.textContent = item.nome

                const span = document.createElement("p")
                span.textContent = `Preço: ${item.preco}`

                const btnCard = document.createElement("button");
                btnCard.textContent = "Comprar";
                btnCard.id = `meuBotao${index}`; // Cada botão recebe um ID único
                btnCard.addEventListener("click", function() {
                    alert(`Você clicou no botão para comprar o produto: ${item.nome}`);
                });

                card.appendChild(img)
                card.appendChild(titulo)
                card.appendChild(span)
                card.appendChild(btnCard);
                container.appendChild(card)
            })
        })
}

exibirCatalogo()