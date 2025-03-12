import { User } from "./utility-models";

// Return Type (Tipo do Retorno)
async function sendEmail(
  user: Pick<User, "email">,
  message: string
): Promise<string> {
  return message;
}

type SendEmailFn = typeof sendEmail;
type Return = ReturnType<SendEmailFn>;
type t1 = Promise<Promise<string>>;
type t2 = Awaited<t1>;
type t3 = Awaited<boolean | Promise<string>>;
