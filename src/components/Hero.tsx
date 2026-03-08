"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-[90vh] pt-[120px] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-background">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl w-full flex flex-col items-center mb-24"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6">
          Your Audience is Hard to Impress.<br className="hidden md:block mt-2" />
          <span className="text-science-blue">Give Them Content They’ll Actually Finish.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          You’ve built the product; now you need the story that holds their attention. From deep-dives into global culture to the "slow-burn" psychology of consumer loyalty, your brand deserves writing that resonates long after the tab is closed.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative z-10">
          <a
            href="#work"
            className="w-full sm:w-auto px-8 py-3.5 bg-science-blue text-white rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-science-blue/20"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-science-blue border border-science-blue rounded-full font-medium transition-all hover:bg-science-blue hover:text-white active:scale-95 shadow-sm"
          >
            Let’s Talk
          </a>
        </div>
      </motion.div>
    </section>
  );
}
