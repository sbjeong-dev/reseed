"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./floatingtext.module.scss";

const { floating_txt, show, stop } = styles;

interface FloatingTextProps {
  visualRef: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}

export default function FloatingText({ visualRef, children }: FloatingTextProps) {
  const floatingRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const visual = visualRef.current;
      const footer = document.querySelector("footer");
      if (!visual || !footer) {
        console.log("🚫 visual 또는 footer를 찾지 못했어요");
        return;
      }

      const visualRect = visual.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();

      console.log("visualRect.top:", visualRect.top);
      console.log("footerRect.top:", footerRect.top, "window.innerHeight:", window.innerHeight);

      // 비주얼 영역이 화면 상단에 닿을때 보이기
      setVisible(visualRect.top <= 0);

      // 푸터 영역에 닿을때 멈추기
      const FOOTER_OFFSET = 0;
      setStopped(footerRect.top <= window.innerHeight - FOOTER_OFFSET);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visualRef]);

  return (
    <div ref={floatingRef} className={`${floating_txt} ${visible ? show : ""} ${stopped ? stop : ""}`}>
      <p>{children}</p>
    </div>
  );
}
