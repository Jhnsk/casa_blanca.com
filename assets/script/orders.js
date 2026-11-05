(() => {
  "use strict";

  /* ========================================
     CONFIGURAÇÕES
  ======================================== */

  const formatPrice = (value) =>
    Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  /* ========================================
     PRODUTOS DE ENCOMENDAS
  ======================================== */

  const orderProducts = {
    bolos: [
      {
        id: "bolo-chocolate",
        name: "Bolo de chocolate",
        description: "Massa de chocolate com recheio cremoso.",
        image: "assets/images/bolodechocolate.jpg",
        price: 85,
        priceLabel: "A partir de",
        type: "bolo",
        options: {
          tamanhos: [
            { name: "Pequeno", detail: "10 fatias", price: 85 },
            { name: "Médio", detail: "20 fatias", price: 120 },
            { name: "Grande", detail: "30 fatias", price: 160 },
          ],
          massas: ["Chocolate", "Baunilha", "Red velvet", "Limão"],
          recheios: ["Brigadeiro", "Ninho", "Doce de leite", "Prestígio"],
          decoracoes: [
            { name: "Simples", detail: "Acabamento tradicional", price: 0 },
            { name: "Especial", detail: "Detalhes especiais", price: 20 },
            {
              name: "Personalizada",
              detail: "Feita sob encomenda",
              quote: true,
            },
          ],
        },
      },
      {
        id: "bolo-ninho",
        name: "Bolo de Ninho",
        description: "Massa fofinha com recheio de leite Ninho.",
        image: "assets/images/bolodeninho.jpg",
        price: 90,
        priceLabel: "A partir de",
        type: "bolo",
        options: {
          tamanhos: [
            { name: "Pequeno", detail: "10 fatias", price: 90 },
            { name: "Médio", detail: "20 fatias", price: 130 },
            { name: "Grande", detail: "30 fatias", price: 170 },
          ],
          massas: ["Baunilha", "Chocolate", "Red velvet"],
          recheios: [
            "Ninho tradicional",
            "Ninho com morango",
            "Ninho com Nutella",
          ],
          decoracoes: [
            { name: "Simples", detail: "Acabamento tradicional", price: 0 },
            { name: "Especial", detail: "Detalhes especiais", price: 20 },
            {
              name: "Personalizada",
              detail: "Feita sob encomenda",
              quote: true,
            },
          ],
        },
      },
      {
        id: "bolo-cenoura",
        name: "Bolo de cenoura",
        description: "Bolo caseiro com cobertura de chocolate.",
        image: "assets/images/bolodecenoura.jpg",
        price: 65,
        priceLabel: "A partir de",
        type: "bolo",
        options: {
          tamanhos: [
            { name: "Pequeno", detail: "Tamanho pequeno", price: 65 },
            { name: "Médio", detail: "Tamanho médio", price: 95 },
            { name: "Grande", detail: "Tamanho grande", price: 130 },
          ],
          massas: ["Cenoura"],
          recheios: ["Sem recheio", "Brigadeiro"],
          decoracoes: [
            { name: "Simples", detail: "Acabamento tradicional", price: 0 },
            { name: "Especial", detail: "Cobertura especial", price: 15 },
            {
              name: "Personalizada",
              detail: "Feita sob encomenda",
              quote: true,
            },
          ],
        },
      },
      {
        id: "bolo-morango",
        name: "Bolo de morango",
        description: "Combinação de morangos e creme especial.",
        image: "assets/images/bolodemorango.jpg",
        price: 95,
        priceLabel: "A partir de",
        type: "bolo",
        options: {
          tamanhos: [
            { name: "Pequeno", detail: "10 fatias", price: 95 },
            { name: "Médio", detail: "20 fatias", price: 140 },
            { name: "Grande", detail: "30 fatias", price: 180 },
          ],
          massas: ["Baunilha", "Chocolate"],
          recheios: ["Creme com morango", "Ninho com morango"],
          decoracoes: [
            { name: "Simples", detail: "Acabamento tradicional", price: 0 },
            { name: "Especial", detail: "Detalhes especiais", price: 20 },
            {
              name: "Personalizada",
              detail: "Feita sob encomenda",
              quote: true,
            },
          ],
        },
      },
    ],

    salgados: [
      {
        id: "coxinha",
        name: "Coxinha",
        description: "Coxinhas de frango para festas e eventos.",
        image: "assets/images/coxinha.jpg",
        price: 75,
        priceLabel: "Cento",
        type: "cento",
        minimum: 1,
      },
      {
        id: "risole",
        name: "Risole",
        description: "Risoles crocantes com recheio saboroso.",
        image: "assets/images/risole.jpg",
        price: 75,
        priceLabel: "Cento",
        type: "cento",
        minimum: 1,
      },
      {
        id: "bolinha-queijo",
        name: "Bolinha de queijo",
        description: "Salgadinho com queijo e massa crocante.",
        image: "assets/images/bolinhodequeijo.jpg",
        price: 80,
        priceLabel: "Cento",
        type: "cento",
        minimum: 1,
      },
      {
        id: "empada",
        name: "Empadinha",
        description: "Empadinhas com massa leve e recheio especial.",
        image: "assets/images/enpadinhas.jpg",
        price: 90,
        priceLabel: "Cento",
        type: "cento",
        minimum: 1,
      },
    ],

    doces: [
      {
        id: "brigadeiro",
        name: "Brigadeiro",
        description: "Brigadeiro tradicional para festas.",
        image: "assets/images/brigadeiro.jpg",
        price: 100,
        priceLabel: "Cento",
        type: "cento",
        minimum: 1,
      },
      {
        id: "beijinho",
        name: "Beijinho",
        description: "Docinho de coco com acabamento especial.",
        image: "assets/images/beijinho.jpg",
        price: 100,
        priceLabel: "Cento",
        type: "cento",
        minimum: 1,
      },
      {
        id: "casadinho",
        name: "Casadinho",
        description: "A combinação de brigadeiro e beijinho.",
        image: "assets/images/casadinho.jpg",
        price: 110,
        priceLabel: "Cento",
        type: "cento",
        minimum: 1,
      },
      {
        id: "docinho-ninho",
        name: "Docinho de Ninho",
        description: "Docinhos delicados de leite em pó.",
        image: "assets/images/docinhodeninho.jpg",
        price: 110,
        priceLabel: "Cento",
        type: "cento",
        minimum: 1,
      },
    ],
  };

  /* ========================================
     ELEMENTOS DO HTML
  ======================================== */

  const elements = {
    categories: document.querySelectorAll(".order-category"),
    products: document.querySelector("#order-products"),
    categoryTitle: document.querySelector("#order-category-title"),
    categoryDescription: document.querySelector("#order-category-description"),

    modal: document.querySelector("#order-modal"),
    modalOverlay: document.querySelector("#order-modal-overlay"),
    modalClose: document.querySelector("#order-modal-close"),
    modalTitle: document.querySelector("#order-modal-title"),
    modalBody: document.querySelector("#order-modal-body"),
    modalTotal: document.querySelector("#modal-product-total"),
    addButton: document.querySelector("#add-order-button"),

    summaryToggle: document.querySelector("#order-summary-toggle"),
    cartCount: document.querySelector("#order-cart-count"),
  };

  /* ========================================
     VALIDAÇÃO DOS ELEMENTOS
  ======================================== */

  const requiredElements = [
    "products",
    "categoryTitle",
    "categoryDescription",
    "modal",
    "modalOverlay",
    "modalClose",
    "modalTitle",
    "modalBody",
    "modalTotal",
    "addButton",
    "summaryToggle",
    "cartCount",
  ];

  const missingElements = requiredElements.filter((key) => !elements[key]);

  if (missingElements.length) {
    console.error(
      "Não foi possível iniciar as encomendas. Elementos ausentes:",
      missingElements
    );
    return;
  }

  /* ========================================
     ESTADO DA APLICAÇÃO
     (o carrinho em si agora é o módulo Cart, do cart.js)
  ======================================== */

  let activeCategory = "bolos";
  let selectedProduct = null;

  let selectedOptions = {
    size: 0,
    mass: 0,
    filling: 0,
    decoration: 0,
    quantity: 1,
  };

  const categoryInformation = {
    bolos: {
      title: "Nossos bolos",
      description: "Escolha seu bolo e personalize do seu jeito.",
    },
    salgados: {
      title: "Nossos salgados",
      description: "Escolha seus salgados e a quantidade desejada.",
    },
    doces: {
      title: "Nossos doces",
      description: "Escolha seus docinhos para sua comemoração.",
    },
  };

  /* ========================================
     RENDERIZAR PRODUTOS
  ======================================== */

  function renderProducts(category) {
    const products = orderProducts[category];

    elements.products.innerHTML = "";

    products.forEach((product) => {
      const card = document.createElement("article");
      card.className = "order-product-card";

      card.innerHTML = `
        <div class="order-product-image">
          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
          >
        </div>

        <div class="order-product-info">
          <h4>${product.name}</h4>
          <p>${product.description}</p>

          <div class="order-product-footer">
            <span class="order-product-price">
              ${formatPrice(product.price)}
              <small>${product.priceLabel}</small>
            </span>

            <button
              type="button"
              class="order-product-add"
              data-product-id="${product.id}"
              aria-label="Personalizar ${product.name}"
            >
              +
            </button>
          </div>
        </div>
      `;

      elements.products.appendChild(card);
    });

    elements.categoryTitle.textContent = categoryInformation[category].title;

    elements.categoryDescription.textContent =
      categoryInformation[category].description;
  }

  /* ========================================
     TROCAR CATEGORIA
  ======================================== */

  elements.categories.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.orderCategory;

      if (!orderProducts[category]) return;

      activeCategory = category;

      elements.categories.forEach((item) => {
        item.classList.toggle("active", item === button);
      });

      renderProducts(activeCategory);
    });
  });

  /* ========================================
     CRIAR GRUPO DE OPÇÕES EM CARDS
  ======================================== */

  function createChoiceGroup({
    title,
    group,
    options,
    selectedIndex = 0,
    showPrice = false,
  }) {
    const cards = options
      .map((option, index) => {
        const isObject = typeof option === "object";
        const name = isObject ? option.name : option;
        const detail = isObject ? option.detail || "" : "";

        let priceText = "";

        if (showPrice && isObject) {
          if (option.quote) {
            priceText = "Sob orçamento";
          } else if (option.price > 0) {
            priceText = `+ ${formatPrice(option.price)}`;
          } else {
            priceText = "Incluso";
          }
        }

        return `
          <button
            type="button"
            class="choice-card ${index === selectedIndex ? "selected" : ""}"
            data-choice-group="${group}"
            data-choice-index="${index}"
            aria-pressed="${index === selectedIndex}"
          >
            <span class="choice-card-content">
              <strong>${name}</strong>
              ${detail ? `<small>${detail}</small>` : ""}
            </span>

            ${
              priceText
                ? `<span class="choice-card-price">${priceText}</span>`
                : ""
            }

            <span class="choice-check" aria-hidden="true">✓</span>
          </button>
        `;
      })
      .join("");

    return `
      <section class="choice-group">
        <div class="choice-group-heading">
          <h4>${title}</h4>
          <span>Escolha uma opção</span>
        </div>

        <div class="choice-grid">
          ${cards}
        </div>
      </section>
    `;
  }

  /* ========================================
     RENDERIZAR PERSONALIZAÇÃO DO MODAL
  ======================================== */

  function renderModalOptions(product) {
    let html = "";

    selectedOptions = {
      size: 0,
      mass: 0,
      filling: 0,
      decoration: 0,
      quantity: product.minimum || 1,
    };

    if (product.type === "bolo") {
      const options = product.options;

      html += createChoiceGroup({
        title: "1. Escolha o tamanho",
        group: "size",
        options: options.tamanhos,
        showPrice: true,
      });

      html += createChoiceGroup({
        title: "2. Escolha a massa",
        group: "mass",
        options: options.massas,
      });

      html += createChoiceGroup({
        title: "3. Escolha o recheio",
        group: "filling",
        options: options.recheios,
      });

      html += createChoiceGroup({
        title: "4. Escolha a decoração",
        group: "decoration",
        options: options.decoracoes,
        showPrice: true,
      });

      html += `
        <div class="order-form-group">
          <label for="order-observation">Observações</label>
          <textarea
            id="order-observation"
            name="observation"
            rows="3"
            placeholder="Quer algum detalhe especial? Conte pra gente..."
          ></textarea>
        </div>
      `;
    }

    if (product.type === "cento") {
      html = `
        <section class="choice-group">
          <div class="choice-group-heading">
            <h4>Quantidade</h4>
            <span>Preço por cento: ${formatPrice(product.price)}</span>
          </div>

          <div class="quantity-selector">
            <div class="quantity-selector-info">
              <strong>Centos desejados</strong>
              <small>1 cento equivale a 100 unidades</small>
            </div>

            <div class="order-quantity-control">
              <button
                type="button"
                data-quantity-action="decrease"
                aria-label="Diminuir quantidade"
              >−</button>

              <span id="order-quantity-value">
                ${product.minimum}
              </span>

              <button
                type="button"
                data-quantity-action="increase"
                aria-label="Aumentar quantidade"
              >+</button>
            </div>
          </div>
        </section>
      `;
    }

    elements.modalBody.innerHTML = html;
  }

  /* ========================================
     ABRIR MODAL
  ======================================== */

  function openModal(product) {
    selectedProduct = product;

    elements.modalTitle.textContent = product.name;

    renderModalOptions(product);
    updateModalTotal();

    elements.modal.classList.add("active");
    elements.modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    elements.modalBody.scrollTop = 0;
  }

  /* ========================================
     FECHAR MODAL
  ======================================== */

  function closeModal() {
    elements.modal.classList.remove("active");
    elements.modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    selectedProduct = null;
  }

  elements.modalClose.addEventListener("click", closeModal);
  elements.modalOverlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && elements.modal.classList.contains("active")) {
      closeModal();
    }
  });

  /* ========================================
     CLIQUE NOS PRODUTOS
  ======================================== */

  elements.products.addEventListener("click", (event) => {
    const button = event.target.closest(".order-product-add");

    if (!button) return;

    const product = orderProducts[activeCategory].find(
      (item) => item.id === button.dataset.productId
    );

    if (product) openModal(product);
  });

  /* ========================================
     EVENTOS DO MODAL
     Delegação: um único listener
  ======================================== */

  elements.modalBody.addEventListener("click", (event) => {
    const choiceButton = event.target.closest("[data-choice-group]");

    if (choiceButton) {
      const group = choiceButton.dataset.choiceGroup;
      const index = Number(choiceButton.dataset.choiceIndex);

      selectedOptions[group] = index;

      elements.modalBody
        .querySelectorAll(`[data-choice-group="${group}"]`)
        .forEach((button) => {
          const isSelected = Number(button.dataset.choiceIndex) === index;

          button.classList.toggle("selected", isSelected);
          button.setAttribute("aria-pressed", String(isSelected));
        });

      updateModalTotal();
      return;
    }

    const quantityButton = event.target.closest("[data-quantity-action]");

    if (quantityButton && selectedProduct?.type === "cento") {
      const minimum = selectedProduct.minimum || 1;

      if (quantityButton.dataset.quantityAction === "increase") {
        selectedOptions.quantity++;
      } else {
        selectedOptions.quantity = Math.max(
          minimum,
          selectedOptions.quantity - 1
        );
      }

      const quantityValue = elements.modalBody.querySelector(
        "#order-quantity-value"
      );

      quantityValue.textContent = selectedOptions.quantity;

      updateModalTotal();
    }
  });

  elements.modalBody.addEventListener("input", (event) => {
    if (event.target.id === "order-observation") {
      updateModalTotal();
    }
  });

  /* ========================================
     OBTER CONFIGURAÇÃO DO PRODUTO
  ======================================== */

  function getModalConfiguration() {
    if (!selectedProduct) return null;

    const product = selectedProduct;

    if (product.type === "bolo") {
      const options = product.options;

      const size = options.tamanhos[selectedOptions.size];
      const mass = options.massas[selectedOptions.mass];
      const filling = options.recheios[selectedOptions.filling];
      const decoration = options.decoracoes[selectedOptions.decoration];

      if (!size || !mass || !filling || !decoration) return null;

      const observation =
        elements.modalBody.querySelector("#order-observation")?.value.trim() ||
        "";

      const quoteRequired = Boolean(decoration.quote);

      // valor base do bolo (tamanho + decoração com preço fixo);
      // se a decoração for sob orçamento, o carrinho mostra "+ orçamento"
      const unitPrice = size.price + (decoration.price || 0);

      return {
        description: [
          `Tamanho: ${size.name}${size.detail ? ` (${size.detail})` : ""}`,
          `Massa: ${mass}`,
          `Recheio: ${filling}`,
          `Decoração: ${decoration.name}`,
          observation ? `Observação: ${observation}` : null,
        ]
          .filter(Boolean)
          .join(" | "),
        quantity: 1,
        unitPrice,
        total: quoteRequired ? null : unitPrice,
        quoteRequired,
      };
    }

    if (product.type === "cento") {
      const quantity = Math.max(product.minimum || 1, selectedOptions.quantity);

      const total = product.price * quantity;

      return {
        description: `${quantity} ${quantity === 1 ? "cento" : "centos"} (${
          quantity * 100
        } unidades)`,
        quantity,
        unitPrice: product.price,
        total,
        quoteRequired: false,
      };
    }

    return null;
  }

  /* ========================================
     ATUALIZAR PREÇO DO MODAL
  ======================================== */

  function updateModalTotal() {
    if (!selectedProduct) return;

    const configuration = getModalConfiguration();

    if (!configuration) return;

    elements.modalTotal.textContent = configuration.quoteRequired
      ? "Sob orçamento"
      : formatPrice(configuration.total);
  }

  /* ========================================
     ADICIONAR PRODUTO AO CARRINHO ÚNICO
  ======================================== */

  elements.addButton.addEventListener("click", () => {
    if (!selectedProduct) return;

    const configuration = getModalConfiguration();

    if (!configuration) return;

    Cart.add({
      sku: `order-${selectedProduct.id}`,
      kind: "encomenda",
      name: selectedProduct.name,
      image: selectedProduct.image,
      details: configuration.description,
      unitPrice: configuration.unitPrice,
      quantity: configuration.quantity,
      quote: configuration.quoteRequired,
    });

    closeModal();
  });

  /* ========================================
     ADICIONAR KITS PRONTOS
  ======================================== */

  document.querySelectorAll(".add-kit").forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const price = Number(button.dataset.price);

      if (!name || !Number.isFinite(price)) return;

      Cart.add({
        sku: `kit-${name}`,
        kind: "encomenda",
        name,
        image: button.dataset.image || "",
        details: "Kit pronto",
        unitPrice: price,
      });
    });
  });

  /* ========================================
     BOTÃO "MEU PEDIDO" -> ABRE O CARRINHO
  ======================================== */

  elements.summaryToggle.addEventListener("click", () => {
    document.querySelector(".cart-sidebar").classList.add("active");
  });

  // contador do botão acompanha o carrinho único
  Cart.subscribe(({ count }) => {
    elements.cartCount.textContent = count;
  });

  /* ========================================
     INICIALIZAÇÃO
  ======================================== */

  renderProducts(activeCategory);
})();