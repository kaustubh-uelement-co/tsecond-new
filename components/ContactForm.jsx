"use client";

import { useState } from "react";
import { Glass, Btn, Mono } from "./ui";

const FIELDS = [
  ["c-name", "Name", "text", "name", "name"],
  ["c-org", "Organisation", "text", "org", "organization"],
  ["c-email", "Work email", "email", "email", "email"],
];

const ENVS = [
  "Tactical edge / dismounted",
  "Airborne or maritime platform",
  "Forward operating base",
  "Fixed critical infrastructure",
  "Enterprise or data center",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ name: "", org: "", email: "", env: ENVS[0], note: "" });
  const set = (k) => (e) => setF((x) => ({ ...x, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    // Wire to your CRM / form endpoint here.
    setSent(true);
  };

  const input =
    "w-full rounded-none border-0 bg-white/70 px-4 py-3.5 text-[14.5px] text-ink outline-none " +
    "shadow-[inset_0_0_0_1px_rgba(22,27,41,.10)] transition-shadow " +
    "focus:shadow-[inset_0_0_0_1.5px_#3E5BBF]";
  const label = "mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-muted";

  return (
    <Glass as="form" onSubmit={submit} className="rv rounded-none p-[clamp(24px,3vw,38px)]" data-d="90">
      <Mono className="text-accent">Briefing request</Mono>

      <div className="mt-6">
        {FIELDS.map(([id, text, type, key, ac]) => (
          <div key={id} className="mb-4">
            <label htmlFor={id} className={label}>{text}</label>
            <input id={id} type={type} required autoComplete={ac}
                   value={f[key]} onChange={set(key)} className={input} />
          </div>
        ))}

        <div className="mb-4">
          <label htmlFor="c-env" className={label}>Deployment environment</label>
          <select id="c-env" value={f.env} onChange={set("env")} className={input}>
            {ENVS.map((e) => <option key={e}>{e}</option>)}
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="c-note" className={label}>Worst-case link budget (optional)</label>
          <textarea id="c-note" rows={3} value={f.note} onChange={set("note")} className={input} />
        </div>

        <Btn type="submit">{sent ? "Request sent" : "Submit request"}</Btn>

        <p aria-live="polite"
           className={`mt-5 font-mono text-[10px] uppercase leading-[1.8] tracking-[0.14em] ${sent ? "text-accent" : "text-faint"}`}>
          {sent
            ? "Received. A solutions engineer will reply within one business day."
            : "No marketing list. Routes to a solutions engineer."}
        </p>
      </div>
    </Glass>
  );
}
