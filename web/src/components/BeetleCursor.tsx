"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

const CURSOR_CLASS = "beetle-cursor-active";

/**
 * Custom beetle cursor for fine pointers only. Disabled for touch and
 * `prefers-reduced-motion` (keeps the default cursor for accessibility).
 */
export function BeetleCursor() {
  const [on, setOn] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const pending = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    if (reduce.matches || coarse.matches) return;

    const root = document.documentElement;
    root.classList.add(CURSOR_CLASS);
    setOn(true);

    const flush = () => {
      raf.current = 0;
      setPos({ x: pending.current.x, y: pending.current.y });
    };

    const onMove = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const overEditable = t?.closest(
        'input, textarea, select, [contenteditable="true"]'
      );
      setVisible(!overEditable);
      pending.current.x = e.clientX;
      pending.current.y = e.clientY;
      if (!raf.current) raf.current = requestAnimationFrame(flush);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      root.classList.remove(CURSOR_CLASS);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!on) return null;

  return (
    <div
      className="beetle-cursor-root pointer-events-none fixed z-[99999] mix-blend-normal"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-35%, -32%)",
        opacity: visible ? 1 : 0,
      }}
      aria-hidden
    >
      <Image
        src={site.brandIconSrc}
        alt=""
        width={80}
        height={80}
        className="h-10 w-10 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)] sm:h-11 sm:w-11"
        priority
      />
    </div>
  );
}
