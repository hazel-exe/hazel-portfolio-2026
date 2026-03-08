"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("idle");
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      setStatus("idle");
      alert("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-athens">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">Let’s Work Together</h2>
          <p className="text-lg text-science-blue max-w-2xl mx-auto leading-relaxed font-medium">
            I’m currently open to new projects in the entertainment, food, and lifestyle spaces. If you have a story that needs telling—or a brand that needs a voice—reach out and let’s see if we’re a fit.
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-black/[0.04] max-w-2xl mx-auto">
          <form 
            className="space-y-6" 
            action="https://formspree.io/f/mkoqgkwg" 
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="full-name"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-science-blue/20 focus:border-science-blue transition-all"
                placeholder="What should I call you?"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-science-blue/20 focus:border-science-blue transition-all"
                placeholder="Where can I reach you?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-science-blue/20 focus:border-science-blue transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className="w-full sm:w-auto px-8 py-3.5 bg-foreground text-white rounded-full font-medium transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 disabled:active:scale-100"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
              <span className="text-gray-400 text-sm hidden sm:block">or</span>
              <a
                href="mailto:hazelkhattar7@gmail.com"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-science-blue border border-science-blue rounded-full font-medium transition-all hover:bg-science-blue hover:text-white active:scale-95 text-center shadow-sm"
              >
                Email Me
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
