"use client";

import { FormEvent, useState } from "react";

type BookingStatus = "idle" | "submitting" | "success" | "error";

export function BookingForm() {
  const [status, setStatus] = useState<BookingStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      businessType: String(formData.get("businessType") ?? ""),
      location: String(formData.get("location") ?? ""),
      challenge: String(formData.get("challenge") ?? ""),
    };

    // console.log("Booking request sent. Awaiting response...");
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Something went wrong");
      }

      setStatus("success");
      setMessage("✓ Booked! We'll reach out on WhatsApp shortly.");

      setTimeout(() => {
        window.open(
          "https://api.whatsapp.com/send?phone=2347036825350&text=Hi%20GlobeLinkz!%20I%20just%20booked%20a%20free%20strategy%20session%20on%20your%20website.%20Looking%20forward%20to%20speaking!",
          "_blank",
        );
      }, 1800);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Unable to submit booking. Please try again.";

      setStatus("error");
      setMessage(errorMessage);
    }
  }

  return (
    <div className="rounded-[20px] border border-[rgba(125,193,42,.2)] bg-[rgba(10,21,37,.9)] p-[42px_38px] backdrop-blur-[20px]">
      <div className="font-heading mb-1 text-[30px] leading-none">
        Book Free Session
      </div>
      <div className="mb-[26px] text-sm text-[var(--gr)]">
        60 seconds. No card. No spam. Ever.
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="mb-[7px] block text-[13px] font-bold text-[var(--ow)]">
            Your Name *
          </label>
          <input
            name="name"
            type="text"
            placeholder="Full name"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-[13px] text-[15px] text-white outline-none transition focus:border-[var(--g)] focus:bg-[rgba(125,193,42,.04)]"
          />
        </div>

        <div className="mb-4">
          <label className="mb-[7px] block text-[13px] font-bold text-[var(--ow)]">
            WhatsApp / Phone *
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="+1 / +44 / +234 …"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-[13px] text-[15px] text-white outline-none transition focus:border-[var(--g)] focus:bg-[rgba(125,193,42,.04)]"
          />
        </div>

        <div className="mb-4">
          <label className="mb-[7px] block text-[13px] font-bold text-[var(--ow)]">
            Email *
          </label>
          <input
            name="email"
            type="email"
            placeholder="you@yourbusiness.com"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-[13px] text-[15px] text-white outline-none transition focus:border-[var(--g)] focus:bg-[rgba(125,193,42,.04)]"
          />
        </div>

        <div className="mb-4">
          <label className="mb-[7px] block text-[13px] font-bold text-[var(--ow)]">
            Business Type *
          </label>
          <select
            name="businessType"
            required
            defaultValue=""
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-[13px] text-[15px] text-white outline-none transition focus:border-[var(--g)] focus:bg-[rgba(125,193,42,.04)]"
          >
            <option value="" disabled>
              Select…
            </option>
            <option>E-commerce / Online Store</option>
            <option>Physical Products / Retail</option>
            <option>Service Business</option>
            <option>Restaurant / Food Business</option>
            <option>Real Estate</option>
            <option>Fashion / Beauty / Wellness</option>
            <option>Tech / Software / App</option>
            <option>Education / Coaching</option>
            <option>Healthcare / Medical</option>
            <option>Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="mb-[7px] block text-[13px] font-bold text-[var(--ow)]">
            Where are you based?
          </label>
          <input
            name="location"
            type="text"
            placeholder="City, Country"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-[13px] text-[15px] text-white outline-none transition focus:border-[var(--g)] focus:bg-[rgba(125,193,42,.04)]"
          />
        </div>

        <div className="mb-4">
          <label className="mb-[7px] block text-[13px] font-bold text-[var(--ow)]">
            What's holding your business back right now?
          </label>
          <textarea
            name="challenge"
            placeholder="Be honest — this is just between us…"
            className="min-h-[85px] w-full resize-y rounded-lg border border-white/10 bg-white/5 px-4 py-[13px] text-[15px] text-white outline-none transition focus:border-[var(--g)] focus:bg-[rgba(125,193,42,.04)]"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting" || status === "success"}
          className="mt-1 w-full cursor-pointer rounded-lg border-none bg-[var(--g)] p-[17px] font-bold text-[var(--dk)] shadow-[0_0_28px_rgba(125,193,42,.2)] transition hover:-translate-y-0.5 hover:bg-[var(--gb)] hover:shadow-[0_0_48px_rgba(125,193,42,.38)] disabled:cursor-not-allowed disabled:opacity-80"
        >
          {status === "submitting"
            ? "Submitting..."
            : status === "success"
              ? "✓ Booked! We'll reach out on WhatsApp shortly."
              : "Claim My Free Strategy Session →"}
        </button>
      </form>

      {message ? (
        <p
          className={`mt-3 text-center text-xs ${
            status === "error" ? "text-red-400" : "text-[var(--gr)]"
          }`}
        >
          {message}
        </p>
      ) : (
        <div className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-[var(--gr)] before:content-['🔒']">
          Completely free · No card · No pressure
        </div>
      )}
    </div>
  );
}
