/**
 * pick cria um novo tipo a partir de um tipo existente, selecionando apenas as propriedades que você deseja.
 * omit cria um novo tipo a partir de um tipo existente, removendo as propriedades que você deseja.
 */

import { User } from "./utility-models";

type UserPreviewKeys = "name" | "profileImageUrl";
type UserPreview = Pick<User, UserPreviewKeys>;

const user: UserPreview = {
  name: "John Doe",
  profileImageUrl: "https://example.com/image.jpg",
};

type UserForm = Omit<User, "id" | "isOnline">;
const userForm: UserForm = {
  name: "John Doe",
  email: "teste@gmail.com",
  profileImageUrl: "https://example.com/image.jpg",
};
