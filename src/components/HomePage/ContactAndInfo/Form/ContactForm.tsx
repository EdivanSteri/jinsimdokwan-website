import React, { useEffect, useMemo, useRef, useState, type JSX } from "react";
import { MESSAGE_MAX, selectFormData } from "./Data/ContactFormData";
import { BiCalendarCheck } from "react-icons/bi";
import type { ContactForm as ContactFormType } from "./Data/ContactFormTypes";

import toast from "react-hot-toast";
import { showErrorToast, showSuccessToast } from "../../../ui/Toast/toastHelpers";

import { normalizePhoneForSend, ZForm, type ZFormValues } from "./zodHelper";

const WEB3FORMS_API_KEY =
  (import.meta.env as ImportMetaEnv).VITE_WEB3FORMS_API_KEY ?? "";

const WEB3FORMS_SUBMIT_API_URL =
  (import.meta.env as ImportMetaEnv).VITE_WEB3FORMS_SUBMIT_API_URL ?? "";

const INITIAL_FORM: ContactFormType = {
  nome: "",
  cognome: "",
  email: "",
  telefono: "",
  telefonoChiamata: false,
  corso: "",
  messaggio: "",
};

/** ---------- Component ---------- */
export default React.memo(function ContactForm(): JSX.Element {
  const [formState, setFormState] = useState<ContactFormType>({ ...INITIAL_FORM });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [messageLength, setMessageLength] = useState<number>(0);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const messageCountId = "contact-message-count";

  // refs
  const nomeRef = useRef<HTMLInputElement | null>(null);
  const cognomeRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const telefonoRef = useRef<HTMLInputElement | null>(null);
  const corsoRef = useRef<HTMLSelectElement | null>(null);
  const messaggioRef = useRef<HTMLTextAreaElement | null>(null);

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormState((prev) => {
      if (name === "messaggio") {
        return { ...prev, [name]: value.slice(0, MESSAGE_MAX) };
      }
      return { ...prev, [name]: value };
    });

    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  useEffect(() => {
    setMessageLength(formState.messaggio?.length ?? 0);
  }, [formState.messaggio]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    // validazione con Zod
    const parsed = ZForm.safeParse(formState as unknown as Record<string, unknown>);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors as Record<string, string[] | undefined>;
      const uiErrors: Record<string, string> = {};
      for (const k of Object.keys(flat)) {
        const arr = flat[k];
        if (arr && arr.length > 0) uiErrors[k] = arr[0];
      }
      setErrors(uiErrors);

      const order = ["nome", "email", "corso", "telefono", "messaggio", "cognome"];
      for (const key of order) {
        if (uiErrors[key]) {
          switch (key) {
            case "nome":
              nomeRef.current?.focus();
              break;
            case "email":
              emailRef.current?.focus();
              break;
            case "corso":
              corsoRef.current?.focus();
              break;
            case "telefono":
              telefonoRef.current?.focus();
              break;
            case "messaggio":
              messaggioRef.current?.focus();
              break;
            case "cognome":
              cognomeRef.current?.focus();
              break;
          }
          break;
        }
      }
      return;
    }

    const validData = parsed.data as ZFormValues;
    const payload = {
      ...validData,
      telefono: normalizePhoneForSend(validData.telefono as string | undefined) ?? "",
      access_key: WEB3FORMS_API_KEY,
    };

    setIsSubmitting(true);
    const loadingId = toast.loading("Invio in corso...");

    try {
      const res = await fetch(WEB3FORMS_SUBMIT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      let json = null;
      try {
        json = await res.json();
      } catch {
        // la risposta non è JSON
      }

      if (res.ok && json?.success) {
        toast.dismiss(loadingId);
        showSuccessToast("Il modulo è stato inviato correttamente.");
        setFormState({ ...INITIAL_FORM });
        setErrors({});
        nomeRef.current?.focus();
      } else {
        toast.dismiss(loadingId);
        const serverMessage = json?.message ?? json?.error ?? `Errore server (${res.status})`;
        showErrorToast(typeof serverMessage === "string" ? serverMessage : "Impossibile inviare i dati.");
      }
    } catch (err) {
      toast.dismiss(loadingId);
      console.error("Submit error:", err);
      showErrorToast("Impossibile inviare i dati. Riprova più tardi.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="contact-form-title"
      className="h-fit text-left bg-[#18202F] rounded-2xl p-6 flex flex-col gap-6 border border-white/20"
      noValidate
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 id="contact-form-title" className="text-lg sm:text-xl md:text-2xl font-bold">
          Prenota la Tua lezione di Prova
        </h3>
        <p className="text-sm sm:text-base font-medium text-gray-300">
          Compila il modulo e ti ricontatteremo entro 24 ore
        </p>
      </div>

      <div className="flex flex-col gap-4 text-sm">
        {/* NOME */}
        <div className="flex flex-col gap-1">
          <label htmlFor="nome" className="block font-medium text-gray-200">
            Nome *
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            autoComplete="given-name"
            value={formState.nome}
            onChange={handleChange}
            required
            ref={nomeRef}
            aria-invalid={!!errors.nome}
            aria-describedby={errors.nome ? "nome-error" : undefined}
            className={`w-full p-2 bg-[#0B0F16] border rounded-lg focus:outline-none ${
              errors.nome ? "border-red-500" : "border-white/30 focus:border-red-600"
            } caret-red-600`}
          />
          {errors.nome && (
            <small id="nome-error" role="alert" className="text-xs text-red-400">
              {errors.nome}
            </small>
          )}
        </div>

        {/* COGNOME */}
        <div className="flex flex-col gap-1">
          <label htmlFor="cognome" className="block font-medium text-gray-200">
            Cognome
          </label>
          <input
            id="cognome"
            name="cognome"
            type="text"
            autoComplete="family-name"
            value={formState.cognome}
            onChange={handleChange}
            ref={cognomeRef}
            className="w-full p-2 bg-[#0B0F16] border border-white/30 rounded-lg focus:outline-none focus:border-red-600 caret-red-600"
          />
        </div>

        {/* EMAIL */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="block font-medium text-gray-200">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formState.email}
            onChange={handleChange}
            required
            ref={emailRef}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full p-2 bg-[#0B0F16] border rounded-lg focus:outline-none ${
              errors.email ? "border-red-500" : "border-white/30 focus:border-red-600"
            } caret-red-600`}
          />
          {errors.email && (
            <small id="email-error" role="alert" className="text-xs text-red-400">
              {errors.email}
            </small>
          )}
        </div>

        {/* TELEFONO */}
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
            value={formState.telefono}
            onChange={handleChange}
            ref={telefonoRef}
            aria-invalid={!!errors.telefono}
            aria-describedby={errors.telefono ? "telefono-error" : undefined}
            className={`w-full p-2 bg-[#0B0F16] border rounded-lg focus:outline-none ${
              errors.telefono ? "border-red-500" : "border-white/30 focus:border-red-600"
            } caret-red-600`}
          />
          {errors.telefono && (
            <small id="telefono-error" role="alert" className="text-xs text-red-400">
              {errors.telefono}
            </small>
          )}
        </div>

        <fieldset className="mt-2">
          <legend className="text-sm font-medium text-gray-200 mb-1">
            Vuoi essere ricontattato telefonicamente?
          </legend>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-1 text-gray-300">
              <input
                type="radio"
                name="telefonoChiamata"
                value="true"
                checked={formState.telefonoChiamata === true}
                onChange={() =>
                  setFormState((prev) => ({ ...prev, telefonoChiamata: true }))
                }
                className="accent-red-600"
              />
              Sì
            </label>
            <label className="flex items-center gap-1 text-gray-300">
              <input
                type="radio"
                name="telefonoChiamata"
                value="false"
                checked={formState.telefonoChiamata === false}
                onChange={() =>
                  setFormState((prev) => ({ ...prev, telefonoChiamata: false }))
                }
                className="accent-red-600"
              />
              No
            </label>
          </div>
        </fieldset>

        {/* CORSO */}
        <div className="flex flex-col gap-1">
          <label htmlFor="corso" className="block font-medium text-gray-200">
            Corso di interesse *
          </label>
          <select
            id="corso"
            name="corso"
            value={formState.corso}
            onChange={handleChange}
            required
            aria-required="true"
            ref={corsoRef}
            aria-invalid={!!errors.corso}
            aria-describedby={errors.corso ? "corso-error" : undefined}
            className={`w-full p-2 bg-[#0B0F16] border rounded-lg focus:outline-none ${
              errors.corso ? "border-red-500" : "border-white/30 focus:border-red-600"
            }`}
          >
            <option value="">Seleziona un corso</option>
            {courseOptions}
          </select>
          {errors.corso && (
            <small id="corso-error" role="alert" className="text-xs text-red-400">
              {errors.corso}
            </small>
          )}
        </div>

        {/* MESSAGGIO */}
        <div className="flex flex-col gap-1">
          <label htmlFor="messaggio" className="block font-medium text-gray-200">
            Messaggio
          </label>
          <textarea
            id="messaggio"
            name="messaggio"
            value={formState.messaggio}
            onChange={handleChange}
            rows={4}
            maxLength={MESSAGE_MAX}
            placeholder="Raccontaci di te e dei tuoi obiettivi..."
            aria-describedby={messageCountId}
            ref={messaggioRef}
            className={`w-full p-2 border bg-[#0B0F16] rounded-lg focus:outline-none ${
              errors.messaggio ? "border-red-500" : "border-white/30 focus:border-red-600"
            } caret-red-600`}
          />
          <div className="flex justify-end items-center gap-2">
            <span id={messageCountId} role="status" aria-live="polite" className="text-right text-xs text-white/40">
              {messageLength}/{MESSAGE_MAX}
            </span>
          </div>
          {errors.messaggio && (
            <small id="messaggio-error" role="alert" className="text-xs text-red-400">
              {errors.messaggio}
            </small>
          )}
        </div>
      </div>

      <button
        type="submit"
        aria-label="Prenota lezione gratuita"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-x-2 text-white text-center font-bold cursor-pointer p-2 mt-4 bg-linear-to-r from-[#B91C1C] hover:from-[#a71919] to-[#991B1B] rounded-xl hover:to-[#8a1818] transition duration-300 ease-in-out hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <BiCalendarCheck className="w-6 h-6" aria-hidden="true" />
        {!isSubmitting ? "Prenota Lezione Gratuita" : "Invio in corso..."}
      </button>
    </form>
  );
});
