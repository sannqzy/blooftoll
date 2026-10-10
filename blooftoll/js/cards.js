// =================================
// BLOOFTOLL
// Sistema de cards de produtos
// =================================


function formatarPreco(preco) {

    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}



function criarCardProduto(produto) {

    const card = document.createElement("article");

    card.className = "product-card";


    card.innerHTML = `

        <div class="product-image-wrap">

            <div class="product-image-placeholder">
                IMAGEM DO PRODUTO
            </div>

            <img
                class="product-image"
                src="${produto.imagem}"
                alt="${produto.nome}"
                loading="lazy"
            >

        </div>


        <div class="product-info">

            <span class="product-category">
                ${produto.categoria}
            </span>


            <h3>
                ${produto.nome}
            </h3>


            <p>
                ${produto.descricao}
            </p>


            <div class="product-bottom">

                <strong class="product-price">
                    ${formatarPreco(produto.preco)}
                </strong>


                <a
                    href="pages/produto.html?id=${produto.id}"
                    class="product-button"
                >
                    Ver produto

                    <span>
                        →
                    </span>
                </a>

            </div>

        </div>

    `;


    const imagem =
        card.querySelector(".product-image");


    const placeholder =
        card.querySelector(".product-image-placeholder");


    imagem.addEventListener("error", () => {

        imagem.style.display = "none";

        placeholder.classList.add("visible");

    });


    return card;

}



function renderizarProdutos(filtro = "todos") {

    const container =
        document.querySelector("#product-grid");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    const produtosFiltrados =
        filtro === "todos"
            ? produtos
            : produtos.filter(
                (produto) =>
                    produto.categoria === filtro
            );


    produtosFiltrados.forEach((produto) => {

        const card =
            criarCardProduto(produto);


        container.appendChild(card);

    });

}