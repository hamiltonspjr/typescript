/**
 * Parameters (Parâmetros) - Extraindo os tipos dos parâmetros de uma função
 */

import { User } from "./utility-models";

function sendEmail(
  user: Pick<User, "email" | "profileImageUrl">,
  message: string
) {}

type SendEmailFn = typeof sendEmail;
/**
 * tuple (tupla): é um array de comprimento fixo com tipos
 * específicos atribuidos a cada elemento.
 * Ele permite que você defina o tipo exato e a ordem dos elementos no array.
 * ex: [user: Pick<User, "email" | "profileImageUrl">, message: string]
 */
type SendEmailParams = Parameters<SendEmailFn>;

function sendWelcomeEmail(user: SendEmailParams[0]) {
  sendEmail(user, "Welcome to advanced typeScript");
}
