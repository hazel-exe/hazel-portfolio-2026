"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { trackerStore } from "@/lib/store";

const portfolioItems = [
  {
    title: "10 Best TV Comedies That Tackle Social Issues",
    link: "https://collider.com/comedy-shows-address-social-issues/",
    image: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2023/09/bojack-horseman.jpg?w=1200&h=675&fit=crop"
  },
  {
    title: "30 Best Shows With Short (30 Minute or Less) Episodes",
    link: "https://collider.com/best-shows-with-short-episodes/",
    image: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2022/02/The-Office-Cast-Photo-1.jpeg?w=1600&h=900&fit=crop"
  },
  {
    title: "Miracle Flavoured Snowflakes",
    link: "https://books.google.co.in/books/about/Miracle_Flavoured_Snowflakes.html?id=_ZfU0AEACAAJ",
    image: "https://books.google.co.in/books/content?id=Wd9WEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl"
  },
  {
    title: "10 Wildly Underrated Romance Books With Less Than 5,000 Reviews on Goodreads",
    link: "https://collider.com/wildly-underrated-romance-books-less-than-5000-reviews-on-goodreads/",
    image: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2022/07/10-Wildly-Underrated-Romance-Books-With-Less-Than-5000-Reviews-On-Goodreads.jpg?w=1600&h=900&fit=crop"
  }
];

export function Portfolio() {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleVibeEnter = () => {
    timeoutRef.current = setTimeout(() => {
      trackerStore.increment();
    }, 600);
  };

  const handleVibeLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <section id="work" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Are the Vibes Immaculate?</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              onMouseEnter={handleVibeEnter}
              onMouseLeave={handleVibeLeave}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group block bg-white rounded-2xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all overflow-hidden"
            >
              <div className="aspect-video bg-athens w-full relative overflow-hidden flex items-center justify-center">
                {/* Image Background */}
                <div 
                  className="absolute inset-0 group-hover:scale-105 transition-transform duration-500 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground group-hover:text-science-blue transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://collider.com/author/hazel-khatter/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 text-science-blue border border-science-blue rounded-full font-medium transition-all hover:bg-science-blue hover:text-white active:scale-95"
          >
            Explore My Full Archive on Collider
          </a>
        </div>
      </div>
    </section>
  );
}
