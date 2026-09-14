"use client";

import { useState, type FormEvent } from "react";
import Button from "./Button";
import { ArrowRight, Check } from "./Icons";

export const topics = [
  { value: "general", label: "General enquiry" },
  { value: "availability", label: "Product availability" },
  { value: "school-books", label: "School books pre-order" },
  { value: "bulk", label: "Bulk / corporate order" },
  { value: "other", label: "Something else" },
] as const;

type TopicValue = (typeof topics)[number]["value"];
type Status = "idle" | "sending" | "sent" | "error";

interface ContactFormProps {
  defaultTopic?: string;
}

const field =
  "w-full rounded-xl border border-gold-600/35 bg-paper px-4 py-3.5 text-[0.95rem] text-ink placeholder:text-ink-dim transition-colors focus:border-maroon-600 focus:outline-none";
const labelCls = "mb-2 block text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold-700";

export default function ContactForm({ defaultTopic }: ContactFormProps) {
  const initialTopic: TopicValue = topics.some((t) => t.value === defaultTopic)
    ? (defaultTopic as TopicValue)
    : "general";

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const next: Record<string, string> = {};
    if (!data.name || data.name.trim().length < 2) next.name = "Please tell us your name.";
    if (!data.phone?.trim() && !data.email?.trim()) next.phone = "Add a phone number or an email so we can reply.";
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = "That email doesn’t look right.";
    if (!data.message || data.message.trim().length < 10) next.message = "A few more words would help (10+ characters).";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-card border border-gold-600/40 bg-linen p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-maroon-700 text-cream shadow-lift">
          <Check size={30} />
        </span>
        <h3 className="mt-6 font-display text-4xl text-ink">Message received.</h3>
        <p className="mt-3 max-w-sm text-ink-muted">
          Thanks — we’ll get back to you within one working day. For anything urgent, give the shop a call.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-draw mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-maroon-700"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-6">
      {/* Honeypot — bots fill this, humans never see it */}
      <div className="absolute -left-[9999px] top-0" aria-hidden>
        <label>
          Company <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Name
          </label>
          <input id="name" name="name" className={field} placeholder="Your name" autoComplete="name" required />
          {errors.name && <p className="mt-2 text-xs text-maroon-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={field} placeholder="07X XXX XXXX" autoComplete="tel" />
          {errors.phone && <p className="mt-2 text-xs text-maroon-600">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelCls}>
            Email <span className="normal-case tracking-normal text-ink-dim">(optional)</span>
          </label>
          <input id="email" name="email" type="email" className={field} placeholder="you@example.com" autoComplete="email" />
          {errors.email && <p className="mt-2 text-xs text-maroon-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="topic" className={labelCls}>
            Topic
          </label>
          <select id="topic" name="topic" defaultValue={initialTopic} className={`${field} appearance-none`}>
            {topics.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${field} resize-y`}
          placeholder="What can we help with?"
          required
        />
        {errors.message && <p className="mt-2 text-xs text-maroon-600">{errors.message}</p>}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
          <ArrowRight size={18} />
        </Button>
        {status === "error" && (
          <p className="text-sm text-maroon-600">Something went wrong — please try again or call us.</p>
        )}
      </div>
    </form>
  );
}
