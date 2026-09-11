"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const WEB3FORMS_ACCESS_KEY = "da996ef4-7556-4b11-877e-eb3c651b5073";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "w-full bg-transparent border border-line px-4 py-3 text-sm text-ink placeholder:text-faint focus:border-signal transition-colors outline-none";

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot: if filled, silently drop (bot)
    if (formData.get("botcheck")) {
      return;
    }

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `Nouveau message — ${formData.get("subject") || "Contact site"}`);

    setStatus("sending");
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot field — hidden from real users */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="signal-label mb-2 block text-mute">
            {t.contact.fields.name} *
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="signal-label mb-2 block text-mute">
            {t.contact.fields.email} *
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="signal-label mb-2 block text-mute">
            {t.contact.fields.phone}
          </label>
          <input id="phone" name="phone" type="tel" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="organization" className="signal-label mb-2 block text-mute">
            {t.contact.fields.organization}
          </label>
          <input id="organization" name="organization" type="text" className={inputClasses} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="subject" className="signal-label mb-2 block text-mute">
            {t.contact.fields.subject} *
          </label>
          <input id="subject" name="subject" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="type" className="signal-label mb-2 block text-mute">
            {t.contact.fields.type}
          </label>
          <select id="type" name="type" className={inputClasses}>
            {t.contact.types.map((type) => (
              <option key={type} value={type} className="bg-panel">
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="signal-label mb-2 block text-mute">
          {t.contact.fields.message} *
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClasses} />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 bg-signal border border-signal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-signal/90 disabled:opacity-60"
      >
        {status === "sending" && <Loader2 size={15} className="animate-spin" />}
        {status === "sending" ? t.contact.sending : t.contact.submit}
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-signal" role="status">
          <CheckCircle2 size={16} /> {t.contact.success}
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-ember" role="alert">
          <AlertCircle size={16} /> {t.contact.error}
        </p>
      )}
    </form>
  );
}
