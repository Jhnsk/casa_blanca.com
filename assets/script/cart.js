/* ==============================
   CARRINHO ÚNICO
   Todo o site (cardápio, encomendas e kits) adiciona itens aqui.
   Formato do item:
   { sku, kind: "menu" | "encomenda", name, image, details,
     unitPrice, quantity, quote }
============================== */

const Cart = (() => {
  const STORAGE_KEY = "casablanca-cart";
  const listeners = new Set();
  let items = [];

  try {
    items = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    items = [];
  }

  function getState() {
    const count = items.reduce((total, item) => total + item.quantity, 0);

    const subtotal = items.reduce(
      (total, item) => total + (item.unitPrice || 0) * item.quantity,
      0
    );

    const hasQuote = items.some((item) => item.quote);

    return { items: [...items], count, subtotal, hasQuote };
  }

  function commit() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* localStorage indisponível: o carrinho continua em memória */
    }

    listeners.forEach((listener) => listener(getState()));
  }

  function add(item) {
    const quantity = item.quantity ?? 1;
    const details = item.details || "";

    // mesmo produto + mesmos detalhes = soma a quantidade
    // (bolo com opções diferentes vira uma linha separada)
    const existing = items.find(
      (current) => current.sku === item.sku && current.details === details
    );

    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push({
        uid: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        quote: false,
        image: "",
        unitPrice: 0,
        ...item,
        details,
        quantity,
      });
    }

    commit();
  }

  function changeQuantity(uid, delta) {
    const item = items.find((current) => current.uid === uid);

    if (!item) return;

    item.quantity += delta;

    if (item.quantity <= 0) {
      items = items.filter((current) => current.uid !== uid);
    }

    commit();
  }

  function remove(uid) {
    items = items.filter((current) => current.uid !== uid);
    commit();
  }

  function clear() {
    items = [];
    commit();
  }

  // já chama a função uma vez com o estado atual
  function subscribe(listener) {
    listeners.add(listener);
    listener(getState());
  }

  return { add, changeQuantity, remove, clear, subscribe, getState };
})();
