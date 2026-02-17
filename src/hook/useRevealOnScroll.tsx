import { useEffect } from "react";

export function useRevealOnScroll() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("show");
        }
      },
      { threshold: 0.12 },
    );

    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);
}
