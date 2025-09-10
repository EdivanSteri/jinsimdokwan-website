export type ContactFormSelect = {
  id: string;
  value: string;
};

export type ContactForm = {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  telefonoChiamata: boolean;
  corso: string;
  messaggio: string;
};
