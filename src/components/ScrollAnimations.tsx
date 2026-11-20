"use client";

import { useEffect } from "react";

/**
 * Plays the [data-animate] entrance animations (see globals.css) the first time each
 * element scrolls into view — like the original Elementor template. Also picks up
 * elements added later by client-side navigation.
 */
export function ScrollAnimations() {
  useEffect(() => {
    if (!document.documentElement.classList.contains("anim")) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-visible", "");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    const observeAll = (root: ParentNode) =>
      root.querySelectorAll("[data-animate]:not([data-visible])").forEach((el) => io.observe(el));

    observeAll(document);

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches("[data-animate]:not([data-visible])")) io.observe(node);
          observeAll(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}

/**
 * Runs before first paint: enables the hidden-until-visible state only when JavaScript
 * works and the visitor hasn't asked for reduced motion.
 */
export const enableAnimationsScript = `if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("anim")`;
