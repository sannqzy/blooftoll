// =================================
// BLOOFTOLL
// Configurações principais
// =================================


// =================================
// WHATSAPP
// =================================

// Coloque aqui o número oficial da BLOOFTOLL.
// Somente números.
// Exemplo:
// 5593999999999

const WHATSAPP_BLOOFTOLL =
    "559391149102";



// =================================
// FUNÇÃO WHATSAPP
// =================================

function gerarLinkWhatsApp(mensagem) {

    if (WHATSAPP_BLOOFTOLL === "SEU_NUMERO_AQUI") {

        return "#";

    }


    const mensagemCodificada =
        encodeURIComponent(mensagem);


    return `https://wa.me/${WHATSAPP_BLOOFTOLL}?text=${mensagemCodificada}`;

}