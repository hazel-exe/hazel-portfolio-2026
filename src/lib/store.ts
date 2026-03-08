"use client";

import { useState, useEffect } from "react";

type Listener = (count: number) => void;
let count = 0;
const listeners = new Set<Listener>();

export const trackerStore = {
  get: () => count,
  increment: () => {
    count += 1;
    listeners.forEach((l) => l(count));
  },
  subscribe: (l: Listener) => {
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  },
};

export function useInteractionCount() {
  const [val, setVal] = useState(count);
  useEffect(() => {
    return trackerStore.subscribe(setVal);
  }, []);
  return val;
}
