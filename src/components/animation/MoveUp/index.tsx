"use client";

import { useEffect, useRef } from "react";
import styles from "./moveup.module.scss";

const { move_up, is_up } = styles;

interface MoveUpProps {
  children: React.ReactNode;
  className?: string; // 외부에서 추가할 className
}

export default function MoveUp({ children, className = "" }: MoveUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add(is_up);
      } else {
        el.classList.remove(is_up);
      }
    };

    window.addEventListener("scroll", onScroll);
    setTimeout(onScroll, 0); // 처음 로딩 시에도 체크

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className={`${move_up} ${className}`}>
      {children}
    </div>
  );
}
