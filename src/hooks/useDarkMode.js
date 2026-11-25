import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function readInitial() {
  if (typeof window === "undefined") return false;
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "dark" || saved === "light") return saved === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function useDarkMode() {
  const [isDark, setIsDark] = useState(readInitial);

  // Apply only — never write back here
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    root.style.colorScheme = isDark ? "dark" : "light";
  }, [isDark]);

  // Persist only on explicit user action
  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
      } catch {}
      return next;
    });
  }, []);

  return [isDark, toggle];
}