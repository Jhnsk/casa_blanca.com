document.addEventListener("DOMContentLoaded", () => {
  // ELEMENTOS
  const cakePrice = document.querySelector("#cake-price");
  const dateOptions = document.querySelector("#date-options");
  const continueButton = document.querySelector("#continue-order");
  const feedback = document.querySelector("#order-feedback");

  // ESTADO DO PEDIDO
  const order = {
    flavor: "Chocolate",
    size: "M - 20 fatias",
    price: 120,
    date: null,
    time: "Manhã · 8h–12h",
  };

  // FORMATAR PREÇO
  function formatPrice(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    });
  }

  // SELEÇÃO DE SABOR E TAMANHO
  document.querySelectorAll("[data-option-group]").forEach((group) => {
    group.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        group.querySelectorAll("button").forEach((option) => {
          option.classList.remove("active");
        });

        button.classList.add("active");

        const groupName = group.dataset.optionGroup;
        const value = button.dataset.value;

        if (groupName === "flavor") {
          order.flavor = value;
        }

        if (groupName === "size") {
          order.size = value;
          order.price = Number(button.dataset.price);

          cakePrice.textContent = formatPrice(order.price);
        }

        if (groupName === "time") {
          order.time = value;
        }
      });
    });
  });

  // GERAR CALENDÁRIO
  function generateDates() {
    const today = new Date();

    for (let i = 2; i < 9; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const day = date
        .toLocaleDateString("pt-BR", {
          weekday: "short",
        })
        .replace(".", "");

      const number = date.getDate();

      const button = document.createElement("button");

      button.classList.add("date-choice");
      button.type = "button";

      button.innerHTML = `
                <small>${day}</small>
                <strong>${number}</strong>
            `;

      button.addEventListener("click", () => {
        document.querySelectorAll(".date-choice").forEach((item) => {
          item.classList.remove("active");
        });

        button.classList.add("active");

        order.date = date.toLocaleDateString("pt-BR");
      });

      dateOptions.appendChild(button);
    }
  }

  generateDates();

  // CONFIRMAR ENCOMENDA
  continueButton.addEventListener("click", () => {
    if (!order.date) {
      feedback.textContent = "Escolha uma data para continuar.";
      return;
    }

    feedback.textContent = `${order.flavor} · ${order.size} · ${order.date} · ${
      order.time
    } · ${formatPrice(order.price)}`;

    // Evento para futura integração com o carrinho
    window.dispatchEvent(
      new CustomEvent("bakery:add-to-cart", {
        detail: {
          name: `Bolo ${order.flavor}`,
          size: order.size,
          date: order.date,
          time: order.time,
          price: order.price,
          quantity: 1,
        },
      })
    );
  });

  // ADICIONAR KITS
  document.querySelectorAll(".add-kit").forEach((button) => {
    button.addEventListener("click", () => {
      const product = {
        name: button.dataset.name,
        price: Number(button.dataset.price),
        quantity: 1,
      };

      window.dispatchEvent(
        new CustomEvent("bakery:add-to-cart", {
          detail: product,
        })
      );

      const originalText = button.textContent;

      button.textContent = "✓";

      setTimeout(() => {
        button.textContent = originalText;
      }, 800);
    });
  });
});
