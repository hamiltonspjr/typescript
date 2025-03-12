/**
 * Record<Keys, Type> - Usado para mapear propriedades de um tipo para outro tipo
 *
 */

type ButtonVariant = "primary" | "danger" | "disable";

type ButtonStyle = {
  backgroundColor: string;
  isEnable: boolean;
};

function getButtonStyle(variant: ButtonVariant): ButtonStyle {
  switch (variant) {
    case "primary":
      return { backgroundColor: "#8158f9", isEnable: true };
    case "danger":
      return { backgroundColor: "#dc3545", isEnable: true };
    case "disable":
      return { backgroundColor: "#ccc", isEnable: false };
    default:
      return { backgroundColor: "#fff", isEnable: true };
  }
}

getButtonStyle("danger");

// outra forma de fazer o mapeamento sem a função
const buttonStyles: Record<ButtonVariant, ButtonStyle> = {
  primary: { backgroundColor: "#8158f9", isEnable: true },
  danger: { backgroundColor: "#dc3545", isEnable: true },
  disable: { backgroundColor: "#ccc", isEnable: false },
};
