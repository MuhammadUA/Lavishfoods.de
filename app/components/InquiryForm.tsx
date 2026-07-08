"use client";
import { useState } from "react";

const PHONE = "923001234567"; // replace with actual WhatsApp number

const products = [
  "1121 Basmati Golden Sella",
  "1121 Basmati Steam Rice",
  "1121 Basmati White Rice",
  "Super Kernel White Rice",
  "Super Kernel Golden Sella",
  "Super Kernel Steam Rice",
  "PK-386 White Rice",
  "PK-386 Sella Rice",
  "PK-386 Steam Rice",
  "Super Fine Sella",
  "IRRI-9 White Rice",
  "IRRI-9 Sella Parboiled",
  "IRRI-6 White 5% Broken",
  "IRRI-6 Parboiled 5% Broken",
  "IRRI-6 100% Broken",
  "Multiple Products",
  "Other",
];

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buildWhatsApp = () => {
    const text = [
      `*New Inquiry — Lavish Foods (lavishfoods.de)*`,
      ``,
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Country: ${form.country}`,
      `Product: ${form.product}`,
      `Quantity: ${form.quantity}`,
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsApp(), "_blank");
  };

  return (
    <section id="contact" className="bg-[#0a1f15] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-green-400 border border-green-800 px-3 py-1 inline-block mb-6">
              Inquiry
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Let&apos;s talk about
              <br />
              <span className="text-green-400">your next shipment.</span>
            </h2>
            <p className="text-green-300/70 text-base leading-relaxed mb-10">
              Fill in your details and your inquiry will be sent directly to our
              WhatsApp export desk. We respond within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                { icon: "◷", label: "Response within 24 hours" },
                { icon: "◉", label: "No commitment required" },
                { icon: "◎", label: "Confidential — your data stays with us" },
                { icon: "◈", label: "Opens WhatsApp with all details pre-filled" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-[#C9A84C] font-mono">{item.icon}</span>
                  <span className="text-green-300 text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            {/* LF badge */}
            <div className="mt-12 inline-flex items-center gap-4 border border-green-800/40 px-6 py-4">
              <div className="w-10 h-10 bg-[#C9A84C] flex items-center justify-center">
                <span className="text-[#0a1f15] font-bold font-serif">LF</span>
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Lavish Foods Export Desk</div>
                <div className="text-green-500 text-xs font-mono">Okara, Punjab, Pakistan</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="border border-green-800/40">
            <div className="border-b border-green-800/40 px-6 py-4">
              <span className="text-green-400 text-xs font-mono tracking-[0.2em] uppercase">
                Export Inquiry Form
              </span>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-green-500 text-xs font-mono tracking-wide uppercase mb-1.5">
                    Your Name *
                  </label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-[#0d2318] border border-green-800/60 text-white text-sm px-4 py-3 focus:outline-none focus:border-green-600 placeholder:text-green-700"
                    placeholder="Abdul Waheed"
                  />
                </div>
                <div>
                  <label className="block text-green-500 text-xs font-mono tracking-wide uppercase mb-1.5">
                    Company
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full bg-[#0d2318] border border-green-800/60 text-white text-sm px-4 py-3 focus:outline-none focus:border-green-600 placeholder:text-green-700"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-green-500 text-xs font-mono tracking-wide uppercase mb-1.5">
                  Country *
                </label>
                <input
                  required
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full bg-[#0d2318] border border-green-800/60 text-white text-sm px-4 py-3 focus:outline-none focus:border-green-600 placeholder:text-green-700"
                  placeholder="Germany"
                />
              </div>

              <div>
                <label className="block text-green-500 text-xs font-mono tracking-wide uppercase mb-1.5">
                  Product Interest *
                </label>
                <select
                  required
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  className="w-full bg-[#0d2318] border border-green-800/60 text-white text-sm px-4 py-3 focus:outline-none focus:border-green-600"
                >
                  <option value="">Select a product…</option>
                  {products.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-green-500 text-xs font-mono tracking-wide uppercase mb-1.5">
                  Quantity (MT)
                </label>
                <input
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  className="w-full bg-[#0d2318] border border-green-800/60 text-white text-sm px-4 py-3 focus:outline-none focus:border-green-600 placeholder:text-green-700"
                  placeholder="e.g. 25 MT"
                />
              </div>

              <div>
                <label className="block text-green-500 text-xs font-mono tracking-wide uppercase mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-[#0d2318] border border-green-800/60 text-white text-sm px-4 py-3 focus:outline-none focus:border-green-600 placeholder:text-green-700 resize-none"
                  placeholder="Packing requirements, destination port, or any other details…"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C9A84C] text-[#0a1f15] font-bold text-sm tracking-widest uppercase py-4 hover:bg-[#D4AF57] transition-colors"
              >
                Send Inquiry via WhatsApp →
              </button>
              <p className="text-green-600 text-xs text-center font-mono">
                Opens WhatsApp with all details pre-filled · Response within 24 hours · Confidential
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
