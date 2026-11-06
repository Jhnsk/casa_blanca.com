const carousel = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
const indicators = document.querySelector(".carousel-indicators");
const productsList = document.querySelector(".products-list");
const cartCount = document.querySelector(".cart-count");

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

let currentIndex = 0;
let autoplay;

/* ==============================
   CARROSSEL
============================== */

// Criar indicadores automaticamente
items.forEach((item, index) => {
  const button = document.createElement("button");

  button.setAttribute("aria-label", `Ir para o banner ${index + 1}`);

  if (index === 0) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    goToSlide(index);
  });

  indicators.appendChild(button);
});

const dots = indicators.querySelectorAll("button");

// Atualizar indicador ativo
function updateIndicators(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  currentIndex = index;
}

// Ir para um banner específico
function goToSlide(index) {
  carousel.scrollTo({
    left: index * carousel.clientWidth,
    behavior: "smooth",
  });

  updateIndicators(index);
}

// Detectar quando o usuário arrasta o carrossel
carousel.addEventListener("scroll", () => {
  const index = Math.round(carousel.scrollLeft / carousel.clientWidth);

  updateIndicators(index);
});

// Próximo banner
function nextSlide() {
  goToSlide((currentIndex + 1) % items.length);
}

// Iniciar autoplay
function startAutoplay() {
  stopAutoplay();

  autoplay = setInterval(nextSlide, 4000);
}

// Parar autoplay
function stopAutoplay() {
  clearInterval(autoplay);
}

// Pausar quando o usuário interagir
carousel.addEventListener("pointerdown", stopAutoplay);
carousel.addEventListener("mouseenter", stopAutoplay);
carousel.addEventListener("focusin", stopAutoplay);

// Retomar quando o usuário terminar de interagir
carousel.addEventListener("mouseleave", startAutoplay);
carousel.addEventListener("focusout", startAutoplay);
carousel.addEventListener("touchend", startAutoplay); // celular: mouseleave nunca dispara

// Respeitar preferência por movimento reduzido
if (!reduceMotion) {
  startAutoplay();
}

/* ==============================
   CATEGORIAS
============================== */

const categories = document.querySelectorAll(".category_item");

categories.forEach((category) => {
  category.addEventListener("click", (event) => {
    event.preventDefault();

    categories.forEach((item) => {
      item.classList.toggle("active", item === category);
    });

    const selectedCategory = category.getAttribute("href").replace("#", "");

    const filteredProducts = products.filter((product) => {
      return product.category === selectedCategory;
    });

    renderProducts(filteredProducts, "carousel");
  });
});

/* ==============================
   MENU HAMBÚRGUER
============================== */

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menuLinks = menu.querySelectorAll("a");

function openMenu() {
  menu.hidden = false;

  requestAnimationFrame(() => {
    menu.classList.add("is-open");
    menuToggle.classList.add("active");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Fechar menu");
  });
}

function closeMenu() {
  menu.classList.remove("is-open");
  menuToggle.classList.remove("active");

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");

  // Sem animação não existe transitionend, então esconde na hora
  if (reduceMotion) {
    menu.hidden = true;
  }
}

// Esconde o menu só quando a animação do próprio menu terminar
// (o evento também borbulha dos <li>, por isso o filtro por target)
menu.addEventListener("transitionend", (event) => {
  if (
    event.target === menu &&
    event.propertyName === "opacity" &&
    !menu.classList.contains("is-open")
  ) {
    menu.hidden = true;
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !menu.hidden) {
    closeMenu();
    menuToggle.focus();
  }
});

document.addEventListener("click", (event) => {
  if (
    !menu.hidden &&
    !menu.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    closeMenu();
  }
});

/* ==============================
   ANIMAÇÃO AO ROLAR
============================== */

// Cards de produto entram em sequência
document.querySelectorAll(".product-card").forEach((card, i) => {
  card.style.setProperty("--delay", `${i * 0.1}s`);
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target); // anima só uma vez
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealItems.forEach((el) => observer.observe(el));
} else {
  // navegador antigo: mostra tudo sem animar
  revealItems.forEach((el) => el.classList.add("is-visible"));
}

const cartToggle = document.querySelector(".cart-toggle");
const cartSidebar = document.querySelector(".cart-sidebar");
const cartClose = document.querySelector(".cart-close");

cartToggle.addEventListener("click", () => {
  cartSidebar.classList.add("active");
});

cartClose.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
});

function createProductCard(product) {
  return `
        <article class="product-card ">

            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                
            </div>

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.description}</p>


                <div class="product-footer">

                    <span class="product-price">
                        R$ ${product.price.toFixed(2)}
                    </span>

                    <button
                        class="add-to-cart"
                        data-id="${product.id}"
                        aria-label="Adicionar ${product.name} ao carrinho">
                        +
                    </button>

                </div>

            </div>

        </article>
    `;
}

function renderProducts(productsToRender, layout = "grid") {
  productsList.classList.remove("masonry-active", "carousel");

  if (layout === "carousel") {
      productsList.classList.add("carousel");
  }

  productsList.innerHTML = productsToRender
      .map((product) => createProductCard(product))
      .join("");
}

// Produtos em destaque ao carregar a página
const featuredProducts = products.filter((product) => product.featured);

renderProducts(featuredProducts);

/* ==============================
   CARRINHO (usa o módulo Cart do cart.js)
============================== */

const cartProducts = document.querySelector(".cart-products");
const cartSubtotal = document.querySelector(".cart-subtotal");
const cartDiscount = document.querySelector(".cart-discount");
const cartTotal = document.querySelector(".cart-total");

// Número do WhatsApp da loja. Exemplo: 5575999999999
const WHATSAPP_NUMBER = "5511961156268";

// Formatar valores em reais
function formatPrice(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// Texto do valor de cada linha do carrinho
function getItemPriceHTML(item) {
  if (item.quote && !item.unitPrice) {
    return "Sob orçamento";
  }

  const price = formatPrice(item.unitPrice * item.quantity);

  if (item.quote) {
    return `${price}<small style="display:block;font-size:9px;font-weight:400;color:#888;">+ orçamento</small>`;
  }

  return price;
}

// Desenhar o carrinho sempre que o estado mudar
function renderCart({ items: cartItems, count, subtotal, hasQuote }) {
  // contador do ícone do carrinho
  cartCount.textContent = count;
  cartCount.hidden = count === 0;

  if (cartItems.length === 0) {
    cartProducts.innerHTML = "<p>Seu carrinho está vazio.</p>";
  } else {
    cartProducts.innerHTML = cartItems
      .map((item) => {
        return `
          <div class="cart-product">

              <div class="cart-product-image">
                  ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}
              </div>

              <div class="cart-product-info">

                  <h3>${item.name}</h3>

                  <p>${item.details}</p>

                  <div class="cart-product-quantity">

                      <button type="button" data-action="decrease" data-uid="${item.uid}">
                          −
                      </button>

                      <span>${item.quantity}</span>

                      <button type="button" data-action="increase" data-uid="${item.uid}">
                          +
                      </button>

                  </div>

              </div>

              <div class="cart-product-price">
                  ${getItemPriceHTML(item)}
              </div>

          </div>
      `;
      })
      .join("");
  }

  const discount = 0;

  cartSubtotal.textContent = formatPrice(subtotal);
  cartDiscount.textContent = formatPrice(discount);
  cartTotal.textContent = hasQuote
    ? `${formatPrice(subtotal - discount)} + orçamento`
    : formatPrice(subtotal - discount);
}

// Controlar quantidade dos produtos no carrinho
cartProducts.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");

  if (!button) return;

  Cart.changeQuantity(
    button.dataset.uid,
    button.dataset.action === "increase" ? 1 : -1
  );
});

// Escutar os cliques nos botões dos produtos (Popular Picks)
productsList.addEventListener("click", (event) => {
  const button = event.target.closest(".add-to-cart");

  if (!button) return;

  const product = products.find(
    (item) => item.id === Number(button.dataset.id)
  );

  if (!product) return;

  Cart.add({
    sku: `menu-${product.id}`,
    kind: "menu",
    name: product.name,
    image: product.image,
    details: product.description,
    unitPrice: product.price,
  });

  button.classList.add("added");

  setTimeout(() => {
      button.classList.remove("added");
  }, 800);
});

// Finalizar pedido (cardápio + encomendas na mesma mensagem)
document.querySelector(".cart-checkout").addEventListener("click", () => {
  const { items: cartItems, subtotal, hasQuote } = Cart.getState();

  if (!cartItems.length) return;

  const formatLine = (item) => {
    const price =
      item.quote && !item.unitPrice
        ? "Sob orçamento"
        : formatPrice(item.unitPrice * item.quantity) +
          (item.quote ? " + orçamento" : "");

    return [
      `• ${item.quantity}x ${item.name}`,
      item.details ? `  ${item.details}` : "",
      `  Valor: ${price}`,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const menuItems = cartItems.filter((item) => item.kind === "menu");
  const orderItems = cartItems.filter((item) => item.kind === "encomenda");

  const message = [
    "Olá! Gostaria de fazer um pedido:",
    menuItems.length
      ? `\n*Pedido do cardápio*\n${menuItems.map(formatLine).join("\n")}`
      : "",
    orderItems.length
      ? `\n*Encomendas*\n${orderItems.map(formatLine).join("\n")}`
      : "",
    `\nTotal estimado: ${formatPrice(subtotal)}`,
    hasQuote ? "Alguns itens precisam de orçamento." : "",
  ]
    .filter(Boolean)
    .join("\n");

  if (!WHATSAPP_NUMBER) {
    alert(
      "O pedido está montado! Configure o WHATSAPP_NUMBER no início da seção CARRINHO do script.js para enviar pelo WhatsApp."
    );

    console.log(message);
    return;
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank", "noopener,noreferrer");
});

// Estado inicial + atualização automática
Cart.subscribe(renderCart);