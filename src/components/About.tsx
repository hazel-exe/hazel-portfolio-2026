"use client";

import { motion, useScroll, useMotionValueEvent, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInteractionCount, trackerStore } from "@/lib/store";

export function About() {
  const interactions = useInteractionCount();
  const { scrollY } = useScroll();
  
  // Spring animation for the interaction tracker
  const springValue = useSpring(interactions, { bounce: 0, duration: 800 });
  const displayValue = useTransform(springValue, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    springValue.set(interactions);
  }, [interactions, springValue]);

  useEffect(() => {
    const handleReactiveMove = () => {
      trackerStore.increment();
    };
    
    // Add multiple event listeners for high sensitivity
    window.addEventListener("mousemove", handleReactiveMove);
    window.addEventListener("touchmove", handleReactiveMove, { passive: true });
    window.addEventListener("wheel", handleReactiveMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleReactiveMove);
      window.removeEventListener("touchmove", handleReactiveMove);
      window.removeEventListener("wheel", handleReactiveMove);
    };
  }, []);

  const dossierTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDossierEnter = () => {
    dossierTimeoutRef.current = setTimeout(() => {
      trackerStore.increment();
    }, 600);
  };

  const handleDossierLeave = () => {
    if (dossierTimeoutRef.current) clearTimeout(dossierTimeoutRef.current);
  };

  return (
    <section id="about" className="py-24 px-6 bg-athens">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">The Story Behind the Stories</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Copy (Spans 2 columns) */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-black/[0.04] flex items-center"
          >
            <div className="text-lg text-gray-700 leading-relaxed font-medium space-y-4">
              <p>I spent a decade studying why people fall in love with fictional worlds. Now, I help brands build worlds their customers never want to leave.</p>
              <p>If you ask me what I do, I’ll tell you I’m a word wizard—but really, I’m an observer of the "click."</p>
              <p>After writing 100+ pieces for Collider and publishing my first book, Miracle Flavoured Snowflakes, I've realized that the goal is always the same: finding the heart of the story.</p>
              <p>I’m moving into new spaces—like the science of a perfect meal or the trends shaping how we live—because I believe the "slow-burn" isn't just for romance novels.</p>
              <p>I don't just write content; I write the things people actually finish.</p>
            </div>
          </motion.div>

          {/* Features Column */}
          <div className="flex flex-col gap-6">
            {/* iOS Stats Card */}
            <motion.div
              onMouseEnter={handleDossierEnter}
              onMouseLeave={handleDossierLeave}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-black/[0.04] flex-1 flex flex-col justify-center"
            >
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">The Dossier</h3>
              <div className="space-y-5">
                <div>
                  <div className="text-2xl font-bold text-science-blue mb-1">100+</div>
                  <div className="text-sm text-gray-600">Articles Published</div>
                </div>
                <div className="w-full h-px bg-gray-100"></div>
                <div>
                  <div className="text-2xl font-bold text-science-blue mb-1">1M+</div>
                  <div className="text-sm text-gray-600">Global Readers</div>
                </div>
                <div className="w-full h-px bg-gray-100"></div>
                <div>
                  <div className="text-2xl font-bold text-science-blue mb-1">1</div>
                  <div className="text-sm text-gray-600">Published Novel</div>
                </div>
              </div>
            </motion.div>

            {/* Interaction Tracker widget */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-science-blue rounded-3xl p-8 text-white shadow-lg shadow-science-blue/20 flex flex-col items-center justify-center text-center relative overflow-hidden"
            >
              <div className="text-xs font-bold tracking-widest text-white/50 mb-2 mt-[-10px]">INTERACTION TRACKER</div>
              <motion.div className="text-4xl font-bold tracking-tight mb-2">
                {displayValue}
              </motion.div>
              <p className="text-sm font-medium text-white/90">
                You’re an observer too, I see!
              </p>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
