// Dados dos produtos (descrição e valor) associados às imagens
const productData = {
    "primeiro.jpg": {
        description: "Fone de Ouvido Bluetooth com Cancelamento de Ruído",
        price: "R$299,00"
    },
    "segundo.jpg": {
        description: "Fone de Ouvido Bluetooth com Som Surround",
        price: "R$349,00"
    },
    "terceiro.jpg": {
        description: "Fone de Ouvido Bluetooth com Alta Definição e Microfone Integrado",
        price: "R$399,00"
    }
};

// Função para alterar a imagem principal, descrição e valor ao clicar nas miniaturas
document.addEventListener("DOMContentLoaded", function () {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const mainImage = document.querySelector(".product-image");
    const descriptionElem = document.querySelector(".product-description");
    const priceElem = document.querySelector(".product-price");

    thumbnails.forEach((thumbnail) => {
        // Garantindo que todas as miniaturas fiquem no mesmo tamanho e proporção
        thumbnail.style.width = "80px";
        thumbnail.style.height = "80px";

        thumbnail.addEventListener("click", function () {
            mainImage.src = thumbnail.src;
            
            // Atualiza a descrição e o valor do produto conforme a miniatura selecionada
            const productKey = thumbnail.src.split('/').pop();
            if (productData[productKey]) {
                descriptionElem.textContent = productData[productKey].description;
                priceElem.textContent = productData[productKey].price;
            }
            
            // Efeito de transição suave para a imagem principal
            mainImage.classList.add("fade");
            setTimeout(() => {
                mainImage.classList.remove("fade");
            }, 300);
        });
    });
});

// Função para exibir as seções de recursos conforme o usuário rola a página
window.addEventListener("scroll", revealFeaturesOnScroll);

function revealFeaturesOnScroll() {
    const features = document.querySelectorAll(".feature");

    features.forEach((feature) => {
        const featureTop = feature.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (featureTop < triggerPoint) {
            feature.classList.add("feature-visible");
        }
    });
}

// Validação do formulário antes do envio
const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", function (event) {
    const name = orderForm.elements["nome"].value;
    const email = orderForm.elements["email"].value;
    const phone = orderForm.elements["telefone"].value;

    if (!name || !email || !phone) {
        event.preventDefault();
        alert("Por favor, preencha todos os campos para finalizar a compra.");
    } else {
        alert("Compra realizada com sucesso!");
    }
});
