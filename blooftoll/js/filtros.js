// =================================
// BLOOFTOLL
// Sistema de filtros
// =================================


function configurarFiltros() {

    const botoes =
        document.querySelectorAll(".filter-button");


    if (!botoes.length) {
        return;
    }


    botoes.forEach((botao) => {

        botao.addEventListener("click", () => {

            const filtro =
                botao.dataset.filter;


            botoes.forEach((item) => {
                item.classList.remove("active");
            });


            botao.classList.add("active");


            renderizarProdutos(filtro);

        });

    });

}