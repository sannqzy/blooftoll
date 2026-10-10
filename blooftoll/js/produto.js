// =================================
// BLOOFTOLL
// Página individual do produto
// =================================


const parametros =
    new URLSearchParams(
        window.location.search
    );


const produtoId =
    Number(
        parametros.get("id")
    );


const produto =
    produtos.find(
        (item) => item.id === produtoId
    );


const container =
    document.querySelector(
        "#product-detail"
    );



function formatarPrecoProduto(preco) {

    return preco.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}



function criarPaginaProduto(produto) {

    container.innerHTML = `

        <div class="product-detail-image">

            <div class="product-detail-placeholder">
                IMAGEM DO PRODUTO
            </div>

            <img
                src="../${produto.imagem}"
                alt="${produto.nome}"
                class="product-detail-img"
            >

        </div>


        <div class="product-detail-info">

            <span class="product-detail-category">
                ${produto.categoria}
            </span>


            <h1>
                ${produto.nome}
            </h1>


            <div class="product-detail-price">
                ${formatarPrecoProduto(produto.preco)}
            </div>


            <p class="product-detail-description">
                ${produto.descricao}
            </p>


            <div class="product-detail-divider"></div>


            <p class="product-detail-message">
                Entre em contato para realizar sua compra
                e receber mais informações sobre o produto.
            </p>


            <a
                href="#"
                class="product-buy-button"
                id="product-buy-button"
            >
                Comprar pelo WhatsApp

                <span>
                    →
                </span>
            </a>

        </div>

    `;


    const imagem =
        container.querySelector(
            ".product-detail-img"
        );


    const placeholder =
        container.querySelector(
            ".product-detail-placeholder"
        );


    imagem.addEventListener(
        "error",
        () => {

            imagem.style.display =
                "none";

            placeholder.classList.add(
                "visible"
            );

        }
    );


    configurarWhatsApp(produto);

}



function configurarWhatsApp(produto) {

    const botao =
        document.querySelector(
            "#product-buy-button"
        );


    if (!botao) {
        return;
    }


    const mensagem =
        `Olá! Tenho interesse no produto ${produto.nome}.`;


    const link =
        gerarLinkWhatsApp(mensagem);


    botao.href = link;


    if (link !== "#") {

        botao.target = "_blank";

        botao.rel =
            "noopener noreferrer";

    }

}



function produtoNaoEncontrado() {

    container.innerHTML = `

        <div class="product-not-found">

            <span>
                PRODUTO NÃO ENCONTRADO
            </span>


            <h1>
                Não encontramos esse produto.
            </h1>


            <a
                href="../index.html#produtos"
                class="product-back-button"
            >
                Voltar para produtos
            </a>

        </div>

    `;

}



if (produto) {

    criarPaginaProduto(produto);

} else {

    produtoNaoEncontrado();

}