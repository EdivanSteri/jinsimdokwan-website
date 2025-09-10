import * as z from "zod";
import { MESSAGE_MAX } from "./Data/ContactFormData";

/** ---------- Zod helper: ritorna uno Zod schema ma tipizzato come ZodTypeAny ---------- */
export function emptyToUndefinedSchema<T extends z.ZodTypeAny>(schema: T): z.ZodTypeAny {
  return z.preprocess((val) => {
    if (typeof val === "string") {
      const t = val.trim();
      return t === "" ? undefined : t;
    }
    return val;
  }, schema) as z.ZodTypeAny;
}

// telefonoSchema: accetta solo +39 + cellulare, mobile nazionale (3xxxxxxxx) o fisso nazionale (0xxxxxxxxx)
/*

  Cellulari italiani → prefisso opzionale (+39, 39, o niente), devono iniziare con 3 e avere 10 cifre totali dopo l’eventuale prefisso.
  Esempi validi:

  +39 333 333 3333

  393333333333

  3333333333

  Fissi italiani → prefisso opzionale (+39, 39, o niente), devono iniziare con 0 e avere 9–10 cifre totali dopo l’eventuale prefisso.
  Esempi validi:

  02 3333 3333

  +39 02 33333333

  390233333333

*/
export const telefonoSchema = z.preprocess((val) => {
  if (typeof val !== "string") return val;
  // rimuovo spazi, parentesi, punti e trattini
  const cleaned = val.replace(/[\s().-]/g, "");
  if (cleaned === "") return undefined; // campo opzionale
  return cleaned;
}, z.string().optional().refine((v) => {
  if (v === undefined) return true;

  // Regex per cellulare
  const mobileRegex = /^(?:\+39|39)?3\d{9}$/;
  // Regex per fisso
  const landlineRegex = /^(?:\+39|39)?0\d{8,9}$/;

  return mobileRegex.test(v) || landlineRegex.test(v);
}, {
  message: "Numero di telefono italiano non valido (cellulare o fisso).",
}));



/** Schema principale */
export const ZForm = z.object({
  nome: emptyToUndefinedSchema(z.string().nonempty({ message: "Nome obbligatorio" })),
  cognome: emptyToUndefinedSchema(z.string().optional()),
  email: emptyToUndefinedSchema(
    z.string().nonempty({ message: "Email obbligatoria" }).email({ message: "Email non valida" })
  ),
  telefono: telefonoSchema,
  telefonoChiamata: z.boolean().default(false),
  corso: emptyToUndefinedSchema(z.string().nonempty({ message: "Seleziona un corso" })),
  messaggio: emptyToUndefinedSchema(z.string().max(MESSAGE_MAX, { message: `Messaggio massimo ${MESSAGE_MAX} caratteri` }).optional()),
});

export type ZFormValues = z.infer<typeof ZForm>;

/** normalize phone for sending */
export function normalizePhoneForSend(raw?: string) {
  if (!raw) return undefined;
  let s = raw.replace(/[\s().-]/g, "");
  if (s.startsWith("00")) s = "+" + s.slice(2);
  return s;
}