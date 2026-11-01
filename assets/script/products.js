const products = [
  // =================================
  // CAFÉ
  // =================================

  {
    id: 1,
    name: "Cappuccino",
    category: "cafe",
    price: 12.0,
    image: "assets/images/cafe1.jpg",
    description: "Smooth espresso with steamed milk",
    featured: true,
  },
  {
    id: 2,
    name: "Café Expresso",
    category: "cafe",
    price: 5.0,
    image: "assets/images/cafe-expresso.jpg",
    description: "Café expresso tradicional, intenso e aromático.",
    featured: false,
  },
  {
    id: 3,
    name: "Café com Leite",
    category: "cafe",
    price: 7.0,
    image: "assets/images/cafe-com-leite.jpg",
    description: "Café tradicional combinado com leite quente.",
    featured: false,
  },
  {
    id: 4,
    name: "Mocha",
    category: "cafe",
    price: 14.0,
    image: "assets/images/mocha.jpg",
    description: "Café expresso com chocolate e leite cremoso.",
    featured: false,
  },
  {
    id: 5,
    name: "Chocolate Quente",
    category: "cafe",
    price: 13.0,
    image: "assets/images/chocolate-quente.jpg",
    description: "Chocolate quente cremoso e encorpado.",
    featured: false,
  },

  // =================================
  // SALGADOS
  // =================================

  {
    id: 6,
    name: "Coxinha de Frango",
    category: "salgados",
    price: 8.0,
    image: "assets/images/coxinha.jpg",
    description: "Coxinha crocante recheada com frango temperado.",
    featured: false,
  },
  {
    id: 7,
    name: "Empada de Frango",
    category: "salgados",
    price: 7.0,
    image: "assets/images/empada.jpg",
    description: "Empada artesanal com massa amanteigada.",
    featured: false,
  },
  {
    id: 8,
    name: "Pão de Queijo",
    category: "salgados",
    price: 6.0,
    image: "assets/images/pao-de-queijo.jpg",
    description: "Pão de queijo quentinho e macio.",
    featured: false,
  },
  {
    id: 9,
    name: "Enroladinho de Salsicha",
    category: "salgados",
    price: 7.0,
    image: "assets/images/enroladinho.jpg",
    description: "Massa fofinha recheada com salsicha.",
    featured: false,
  },
  {
    id: 10,
    name: "Quiche de Queijo",
    category: "salgados",
    price: 10.0,
    image: "assets/images/quiche.jpg",
    description: "Quiche artesanal com recheio cremoso de queijo.",
    featured: false,
  },

  // =================================
  // SANDUÍCHES
  // =================================

  {
    id: 11,
    name: "Chicken Club Sandwich",
    category: "sanduiches",
    price: 22.0,
    image: "assets/images/sandwich.jpg",
    description: "Grilled chicken, veggies and our special sauce",
    featured: true,
  },
  {
    id: 12,
    name: "Sanduíche Natural",
    category: "sanduiches",
    price: 14.0,
    image: "assets/images/sanduiche-natural.jpg",
    description: "Pão integral com frango desfiado, alface e cenoura.",
    featured: false,
  },
  {
    id: 13,
    name: "Misto Quente",
    category: "sanduiches",
    price: 10.0,
    image: "assets/images/misto-quente.jpg",
    description: "Pão tostado com presunto e queijo derretido.",
    featured: false,
  },
  {
    id: 14,
    name: "Sanduíche de Frango",
    category: "sanduiches",
    price: 18.0,
    image: "assets/images/sanduiche-frango.jpg",
    description: "Pão artesanal com frango, queijo e salada.",
    featured: false,
  },
  {
    id: 15,
    name: "Sanduíche de Atum",
    category: "sanduiches",
    price: 17.0,
    image: "assets/images/sanduiche-atum.jpg",
    description: "Pão macio com patê de atum, alface e tomate.",
    featured: false,
  },

  // =================================
  // SOBREMESAS
  // =================================

  {
    id: 16,
    name: "Chocolate Muffin",
    category: "sobremesas",
    price: 2.99,
    image: "assets/images/muffin.jpg",
    description: "Rich, moist and perfectly baked",
    featured: true,
  },
  {
    id: 17,
    name: "Brownie de Chocolate",
    category: "sobremesas",
    price: 12.0,
    image: "assets/images/brownie.jpg",
    description: "Brownie artesanal com interior macio.",
    featured: false,
  },
  {
    id: 18,
    name: "Cheesecake de Morango",
    category: "sobremesas",
    price: 16.0,
    image: "assets/images/cheesecake.jpg",
    description: "Cheesecake cremoso com cobertura de morango.",
    featured: false,
  },
  {
    id: 19,
    name: "Bolo de Cenoura",
    category: "sobremesas",
    price: 10.0,
    image: "assets/images/bolo-cenoura.jpg",
    description: "Bolo de cenoura com cobertura de chocolate.",
    featured: false,
  },
  {
    id: 20,
    name: "Pudim de Leite",
    category: "sobremesas",
    price: 9.0,
    image: "assets/images/pudim.jpg",
    description: "Pudim tradicional com calda de caramelo.",
    featured: false,
  },

  // =================================
  // DRINKS
  // =================================

  {
    id: 21,
    name: "Suco de Laranja",
    category: "drinks",
    price: 9.0,
    image: "assets/images/suco-laranja.jpg",
    description: "Suco natural de laranja preparado na hora.",
    featured: false,
  },
  {
    id: 22,
    name: "Limonada Suíça",
    category: "drinks",
    price: 10.0,
    image: "assets/images/limonada.jpg",
    description: "Limonada cremosa preparada com limão e gelo.",
    featured: false,
  },
  {
    id: 23,
    name: "Milk-shake de Chocolate",
    category: "drinks",
    price: 16.0,
    image: "assets/images/milkshake.jpg",
    description: "Milk-shake cremoso de chocolate com chantilly.",
    featured: false,
  },
  {
    id: 24,
    name: "Vitamina de Morango",
    category: "drinks",
    price: 13.0,
    image: "assets/images/vitamina-morango.jpg",
    description: "Vitamina de morango batida com leite.",
    featured: false,
  },
  {
    id: 25,
    name: "Chá Gelado",
    category: "drinks",
    price: 8.0,
    image: "assets/images/cha-gelado.jpg",
    description: "Chá gelado refrescante com toque de limão.",
    featured: false,
  },

  // =================================
  // REFEIÇÕES
  // =================================

  {
    id: 26,
    name: "Prato Executivo de Frango",
    category: "refeicoes",
    price: 24.0,
    image: "assets/images/prato-frango.jpg",
    description: "Frango grelhado com arroz, feijão e salada.",
    featured: false,
  },
  {
    id: 27,
    name: "Lasanha à Bolonhesa",
    category: "refeicoes",
    price: 28.0,
    image: "assets/images/lasanha.jpg",
    description: "Lasanha artesanal com molho à bolonhesa e queijo.",
    featured: false,
  },
  {
    id: 28,
    name: "Escondidinho de Carne",
    category: "refeicoes",
    price: 26.0,
    image: "assets/images/escondidinho.jpg",
    description: "Purê de mandioca com carne desfiada.",
    featured: false,
  },
  {
    id: 29,
    name: "Frango à Parmegiana",
    category: "refeicoes",
    price: 30.0,
    image: "assets/images/parmegiana.jpg",
    description: "Filé empanado com molho de tomate e queijo.",
    featured: false,
  },
  {
    id: 30,
    name: "Strogonoff de Frango",
    category: "refeicoes",
    price: 27.0,
    image: "assets/images/strogonoff.jpg",
    description: "Strogonoff cremoso com arroz e batata palha.",
    featured: false,
  },
];
