"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Download, Send } from "lucide-react";
import { cn } from "cn";
import { site, socials } from "@/data/site";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormErrors = { name?: string; email?: string; message?: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClassName =
  "h-12 w-full rounded-xl border-white/10 bg-white/[0.04] px-4 text-white placeholder:text-slate-500 focus-visible:border-cyan-400/50 focus-visible:ring-cyan-400/20 dark:border-white/10 dark:bg-white/[0.04]";

function validate(fields: { name: string; email: string; message: string }): FormErrors {
  const errors: FormErrors = {};

  if (fields.name.length < 2) errors.name = "Please tell me your name.";
  if (!EMAIL_PATTERN.test(fields.email)) errors.email = "Please enter a valid email address.";
  if (fields.message.length < 10) errors.message = "Please write at least 10 characters.";

  return errors;
}

export function Contact() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const fields = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    const nextErrors = validate(fields);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    // No backend needed: hand the message to the visitor's email app,
    // pre-filled and ready to send.
    const subject = encodeURIComponent(`Portfolio enquiry from ${fields.name}`);
    const body = encodeURIComponent(`${fields.message}\n\n— ${fields.name}\n${fields.email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <Section id="contact" label="Contact" className="relative overflow-hidden border-t border-slate-800 bg-slate-950">
      <div aria-hidden="true" className="pointer-events-none absolute top-1/3 left-1/2 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative z-10 grid gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: message + direct contact methods */}
        <Reveal>
          <SectionHeading
            eyebrow="Get In Touch"
            title={
              <>
                Let&apos;s build something
                <span className="block text-cyan-400">great together.</span>
              </>
            }
            description="I'm open to frontend development opportunities, freelance projects and collaborations. Feel free to reach out if you'd like to work together."
          />

          <ul className="mt-10 space-y-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:outline-none sm:p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                      <Icon size={21} aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <p className="font-semibold text-white">{social.label}</p>
                      <p className="truncate text-sm text-slate-400">
                        {social.label === "Email" ? site.email : social.href.replace("https://", "")}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="ml-auto shrink-0 text-slate-500 transition group-hover:text-cyan-400"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href={site.resumePath}
            download="Mohammad_Roni_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
          >
            Download Resume
            <Download size={18} aria-hidden="true" />
          </a>
        </Reveal>

        {/* Right: contact form */}
        <Reveal delay={150}>
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >
            <h3 className="text-xl font-semibold text-white">Send me a message</h3>
            <p className="mt-2 text-sm text-slate-400">
              Fill in the form and it will open in your email app, ready to send.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  aria-invalid={errors.name ? true : undefined}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={cn(fieldClassName, errors.name && "border-destructive/60")}
                />
                {errors.name ? (
                  <p id="contact-name-error" className="mt-2 text-sm text-red-400">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  aria-invalid={errors.email ? true : undefined}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={cn(fieldClassName, errors.email && "border-destructive/60")}
                />
                {errors.email ? (
                  <p id="contact-email-error" className="mt-2 text-sm text-red-400">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project, opportunity or idea..."
                  required
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className={cn(
                    "min-h-36 w-full rounded-xl border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-slate-500 focus-visible:border-cyan-400/50 focus-visible:ring-cyan-400/20 dark:border-white/10 dark:bg-white/[0.04]",
                    errors.message && "border-destructive/60",
                  )}
                />
                {errors.message ? (
                  <p id="contact-message-error" className="mt-2 text-sm text-red-400">
                    {errors.message}
                  </p>
                ) : null}
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.25)] focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
            >
              Send Message
              <Send size={18} aria-hidden="true" />
            </button>

            <p role="status" aria-live="polite" className="mt-4 min-h-5 text-center text-sm text-slate-400">
              {status === "sent"
                ? "Your email app should be opening — if not, email me directly."
                : status === "error"
                  ? "Please fix the highlighted fields and try again."
                  : ""}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
