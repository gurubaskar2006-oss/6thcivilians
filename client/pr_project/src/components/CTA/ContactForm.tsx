"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { MaskWipe } from "@/components/ui/KineticText";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.email("Enter a valid email address"),
  message: z
    .string()
    .min(10, "Tell us a little more (at least 10 characters)"),
});

type FormValues = z.infer<typeof schema>;

const fields: {
  name: keyof FormValues;
  label: string;
  type: string;
  placeholder: string;
}[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
  },
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>(
    [],
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  function handleRipple(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now() + Math.random();
    setRipples((r) => [
      ...r,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    window.setTimeout(
      () => setRipples((r) => r.filter((ri) => ri.id !== id)),
      550,
    );
  }

  async function onSubmit(data: FormValues) {
    const formData = new FormData();
    // Note: To send this to a different PR email, replace this access key with a new one generated for that email.
    formData.append("access_key", "790a748b-739b-48fb-a7e7-35bf1ed94d92");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      if (res.status === 200) {
        setSent(true);
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (sent) {
    return (
      <div className="glass-card flex flex-col items-center gap-5 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/[0.06]">
          <Check className="h-6 w-6 text-primary" strokeWidth={1.5} />
        </span>
        <h3 className="font-display text-2xl font-medium text-metal">
          Message received.
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-secondary">
          Thank you for reaching out. A pillar will respond within 48
          hours.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-2 text-xs uppercase tracking-[0.22em] text-secondary underline-offset-4 transition-colors hover:text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex w-full flex-col gap-6"
    >
      {/* Fields reveal with the same clip-mask pattern as the body copy. */}
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field, i) => (
          <MaskWipe
            key={field.name}
            delay={i * 0.08}
            className="flex flex-col gap-2"
          >
            <label
              htmlFor={field.name}
              className="text-xs font-medium uppercase tracking-[0.18em] text-secondary"
            >
              {field.label}
            </label>
            <input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              aria-invalid={!!errors[field.name]}
              className="field"
              {...register(field.name)}
            />
            {errors[field.name] ? (
              <p className="text-xs text-[#fca5a5]">
                {errors[field.name]?.message}
              </p>
            ) : null}
          </MaskWipe>
        ))}
      </div>

      <MaskWipe delay={0.16} className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-xs font-medium uppercase tracking-[0.18em] text-secondary"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your goals..."
          aria-invalid={!!errors.message}
          className="field resize-none"
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-xs text-[#fca5a5]">
            {errors.message?.message}
          </p>
        ) : null}
      </MaskWipe>

      <button
        type="submit"
        disabled={isSubmitting}
        onClick={handleRipple}
        className="lift group relative mt-2 inline-flex items-center justify-center gap-3 self-start overflow-hidden rounded-chip border border-white/20 px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:border-white/50 disabled:cursor-wait disabled:opacity-60"
      >
        <span className="btn-wipe" aria-hidden />
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            aria-hidden
            className="ripple"
            style={{ left: r.x, top: r.y }}
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 18, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        ))}
        <span className="relative z-10 flex items-center gap-2">
          {isSubmitting ? "Sending…" : "Send message"}
          <Send
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.5}
          />
        </span>
      </button>
    </form>
  );
}
