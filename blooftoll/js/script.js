// =================================
// BLOOFTOLL
// JavaScript principal
// =================================


document.addEventListener(
    "DOMContentLoaded",
    () => {


        // =================================
        // PRODUTOS
        // =================================

        if (
            typeof renderizarProdutos ===
            "function"
        ) {

            renderizarProdutos();

        }



        // =================================
        // FILTROS
        // =================================

        if (
            typeof configurarFiltros ===
            "function"
        ) {

            configurarFiltros();

        }



        // =================================
        // LINKS WHATSAPP
        // =================================

        configurarLinksWhatsApp();

    }
);



// =================================
// CONFIGURAR LINKS WHATSAPP
// =================================

function configurarLinksWhatsApp() {


    const mensagemSuporte =
        "Olá! Preciso de atendimento da BLOOFTOLL.";


    const mensagemDuvidas =
        "Olá! Tenho uma dúvida sobre um produto da BLOOFTOLL.";


    const mensagemContato =
        "Olá! Gostaria de entrar em contato com a BLOOFTOLL.";



    const suporte =
        document.querySelector(
            "#support-link"
        );


    const footerSupport =
        document.querySelector(
            "#footer-support"
        );


    const footerHelp =
        document.querySelector(
            "#footer-help"
        );


    const footerContact =
        document.querySelector(
            "#footer-contact"
        );



    const links = [

        {
            elemento: suporte,
            mensagem: mensagemSuporte
        },

        {
            elemento: footerSupport,
            mensagem: mensagemSuporte
        },

        {
            elemento: footerHelp,
            mensagem: mensagemDuvidas
        },

        {
            elemento: footerContact,
            mensagem: mensagemContato
        }

    ];



    links.forEach(
        ({ elemento, mensagem }) => {


            if (!elemento) {
                return;
            }


            const link =
                gerarLinkWhatsApp(
                    mensagem
                );


            elemento.href = link;


            if (link !== "#") {

                elemento.target =
                    "_blank";

                elemento.rel =
                    "noopener noreferrer";

            }

        }
    );

}