import { useState, useEffect } from "react";

export default function Typewriter({
  text = "Sorn Ramy",
  typingSpeed = 150,     // Speed of typing (ms)
  deletingSpeed = 100,   // Speed of deleting (ms)
  pauseDuration = 2000,  // How long to wait before deleting/typing again (ms)
  className = "",
}) {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    // 1. Typing
    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(text.substring(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
    }
    // 2. Finished typing → pause → start deleting
    else if (!isDeleting && index === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    }
    // 3. Deleting
    else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setCurrentText(text.substring(0, index - 1));
        setIndex(index - 1);
      }, deletingSpeed);
    }
    // 4. Finished deleting → pause → start typing again
    else if (isDeleting && index === 0) {
      timeout = setTimeout(() => setIsDeleting(false), pauseDuration / 2);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {currentText}
      {/* Blinking cursor */}
      <span className="animate-pulse text-sky-400">|</span>
    </span>
  );
}