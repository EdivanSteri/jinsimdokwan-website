import { useState } from "react";
import { selectFormData } from "./Data/ContactFormData";
import IconButton from "../../ui/Icons/IconButton";
import { BiCalendarCheck } from "react-icons/bi";
import { type ContactForm } from "./Data/ContactFormTypes";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactForm>({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    corso: "",
    messaggio: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Dati inviati:", formData);
    // Qui potresti fare una fetch() o axios.post() per inviare i dati al server

    //Reset field
    setFormData({
      nome: "",
      cognome: "",
      email: "",
      telefono: "",
      corso: "",
      messaggio: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-left bg-[#18202F] rounded-2xl p-6 flex flex-col gap-6 border border-white/20"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="text-xl font-bold">Prenota la Tua lezione di Prova</h3>
        <p className="text-sm font-medium text-gray-300">
          Compila il modulo e ti ricontatteremo entro 24 ore
        </p>
      </div>

      <div className="flex flex-col gap-4 text-sm">
        <div className="flex flex-col gap-1">
          <label htmlFor="nome" className="block font-medium text-gray-200">
            Nome *
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full p-2 bg-[#0B0F16] border border-white/30 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="cognome" className="block font-medium text-gray-200">
            Cognome
          </label>
          <input
            type="text"
            id="cognome"
            name="cognome"
            value={formData.cognome}
            onChange={handleChange}
            className="w-full p-2 bg-[#0B0F16] border border-white/30 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="block font-medium text-gray-200">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 bg-[#0B0F16] border border-white/30 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="telefono" className="block font-medium text-gray-200">
            Telefono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full p-2 bg-[#0B0F16] border border-white/30 rounded-lg"
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
            className="w-full p-2 bg-[#0B0F16] border border-white/30 rounded-lg"
          >
            <option value="">Seleziona un corso</option>

            {selectFormData.map((select) => (
              <option key={select.id} value={select.value}>
                {select.value}
              </option>
            ))}
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
            placeholder="Raccontaci di te e dei tuoi obiettivi..."
            className="w-full p-2 border bg-[#0B0F16] border-white/30 rounded-lg "
          />
          <span className="text-right text-xs text-white/40">
            0/500 caratteri
          </span>
        </div>
      </div>
      <IconButton
        type="submit"
        className="w-full p-2 rounded-xl text-center mt-4 bg-linear-to-r from-[#B91C1C] hover:from-[#a71919]  to-[#991B1B] hover:to-[#8a1818] transition duration-300 ease-in-out hover:scale-105"
        icon={BiCalendarCheck}
      >
        Prenota Lezione Gratuita
      </IconButton>
    </form>
  );
}
