// No contexto de uma expressão JavaScript
console.log(typeof 1); // number

// "Typeof" Type Operator - No contexto de um type, para referenciar o tipo de uma variável ou propriedade

const lightMode = {
  success: "#28a745",
  warning: "#ffc107",
  danger: "#dc3545",
  info: "#17a2b8",
};

const darkMode: Colors = {
  success: "#28a745",
  warning: "#ffc107",
  danger: "#dc3545",
  info: "#17a2b8",
};

type Colors = typeof lightMode;
