import React, { useEffect, useMemo, useState, type JSX } from "react";
import { selectFormData } from "./Data/ContactFormData";
import IconButton from "../../../ui/Icons/IconButton";
import { BiCalendarCheck } from "react-icons/bi";
import type { ContactForm as ContactFormType } from "./Data/ContactFormTypes";

const INITIAL_FORM: ContactFormType = {
  nome: "",
  cognome: "",
  email: "",
  telefono: "",
  corso: "",
  messaggio: "",
};

const MESSAGE_MAX = 500;

export default React.memo(function ContactForm(): JSX.Element {
  const [formData, setFormData] = useState<ContactFormType>(() => ({
    ...INITIAL_FORM,
  }));

  const [messageLength, setMessageLength] = useState<number>(0);

  const messageCountId = "contact-message-count";

  const courseOptions = useMemo(
    () =>
      selectFormData.map((opt) => (
        <option key={opt.id} value={opt.value}>
          {opt.value}
        </option>
      )),
    []
  );

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (name === "messaggio") {
        return { ...prev, [name]: value.slice(0, MESSAGE_MAX) };
      }
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      console.log("Dati inviati:", formData);

      // reset e focus sul primo campo per migliorare UX
      setFormData({ ...INITIAL_FORM });
    } catch (err) {
      console.error("Errore durante l'invio del form:", err);
    }
  }

  useEffect(() => {
    setMessageLength(formData.messaggio?.length ?? 0);
  }, [formData.messaggio]);

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-title"
      className="h-fit text-left bg-[#18202F] rounded-2xl p-6 flex flex-col gap-6 border border-white/20"
      noValidate
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <h3
          id="contact-form-title"
          className="text-lg sm:text-xl md:text-2xl font-bold"
        >
          Prenota la Tua lezione di Prova
        </h3>
        <p className="text-sm sm:text-base font-medium text-gray-300">
          Compila il modulo e ti ricontatteremo entro 24 ore
        </p>
      </div>

      <div className="flex flex-col gap-4 text-sm">
        <div className="flex flex-col gap-1">
          <label htmlFor="nome" className="block font-medium text-gray-200">
            Nome *
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            autoComplete="given-name"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full p-2 bg-[#0B0F16] border border-white/30 rounded-lg focus:outline-none focus:border-red-600"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="cognome" className="block font-medium text-gray-200">
            Cognome
          </label>
          <input
            id="cognome"
            name="cognome"
            type="text"
            autoComplete="family-name"
            value={formData.cognome}
            onChange={handleChange}
            className="w-full p-2 bg-[#0B0F16] border border-white/30 rounded-lg focus:outline-none focus:border-red-600"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="block font-medium text-gray-200">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 bg-[#0B0F16] border border-white/30 rounded-lg focus:outline-none focus:border-red-600"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="telefono" className="block font-medium text-gray-200">
            Telefono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            inputMode="tel"
            placeholder="+39 3xx xxx xxxx"
            autoComplete="tel"
            pattern="[0-9+()\\s-]{6,20}"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full p-2 bg-[#0B0F16] border border-white/30 rounded-lg focus:outline-none focus:border-red-600"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="corso" className="block font-medium text-gray-200">
            Corso di interesse *
          </label>
          <select
            id="corso"
            name="corso"
            value={formData.corso}
            onChange={handleChange}
            required
            aria-required="true"
            className="w-full p-2 bg-[#0B0F16] border border-white/30 rounded-lg focus:outline-none focus:border-red-600"
          >
            <option value="">Seleziona un corso</option>
            {courseOptions}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="messaggio"
            className="block font-medium text-gray-200"
          >
            Messaggio
          </label>
          <textarea
            id="messaggio"
            name="messaggio"
            value={formData.messaggio}
            onChange={handleChange}
            rows={4}
            maxLength={MESSAGE_MAX}
            placeholder="Raccontaci di te e dei tuoi obiettivi..."
            aria-describedby={messageCountId}
            className="w-full p-2 border bg-[#0B0F16] border-white/30 rounded-lg focus:outline-none focus:border-red-600"
          />
          <div className="flex justify-end items-center gap-2">
            <span
              id={messageCountId}
              role="status"
              aria-live="polite"
              className="text-right text-xs text-white/40"
            >
              {messageLength}/{MESSAGE_MAX}
            </span>
          </div>
        </div>
      </div>

      <IconButton
        type="submit"
        icon={BiCalendarCheck}
        aria-label="Prenota lezione gratuita"
        className="w-full p-2 rounded-xl text-center mt-4 bg-linear-to-r from-[#B91C1C] hover:from-[#a71919] to-[#991B1B] hover:to-[#8a1818] transition duration-300 ease-in-out hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
        href=""
      >
        Prenota Lezione Gratuita
      </IconButton>
    </form>
  );
});
