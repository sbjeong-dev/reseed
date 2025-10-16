"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./main.module.scss";
import OurlifeList from "../components/layout/OurlifeList";
import PortfolioList from "@/components/layout/PortfolioList";
import MoveUp from "@/components/animation/MoveUp";

const { web, mob, is_dimmed, container, contents, title, content, more, visual, dimmed, video, portfolio, ourlife } = styles;

export default function Home() {
  // 스크롤시, 비주얼 영역 Dimmed 애니메이션
  const [isDimmed, setIsDimmed] = useState(false);
  useEffect(() => {
    const onDimmed = () => {
      setIsDimmed(window.scrollY > 0);
    };
    window.addEventListener("scroll", onDimmed);
    return () => {
      window.removeEventListener("scroll", onDimmed);
    };
  }, []);

  return (
    <div className={container}>
      <div className={visual}>
        <div className={`${dimmed} ${isDimmed ? is_dimmed : ""}`}></div>
        <video className={`${video} ${web}`} autoPlay loop muted playsInline controls={false}>
          <source src="/videos/main/visual.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className={`${video} ${mob}`} autoPlay loop muted playsInline controls={false}>
          <source src="/videos/main/mob/visual.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={contents}>
        <div className={portfolio}>
          <div className={title}>
            <MoveUp>
              <p>our portfolio</p>
            </MoveUp>
            <MoveUp>
              <span>브랜드의 핵심 가치와 메시지를 다양한 미디어를 통해 크리에이티브하게 표현합니다.</span>
            </MoveUp>
          </div>
          <div className={content}>
            <PortfolioList />
            <MoveUp>
              <Link href="/portfolio" target="_self" className={more}>
                <span>더 많은 포트폴리오 보기</span>
              </Link>
            </MoveUp>
          </div>
        </div>
        <div className={ourlife}>
          <div className={title}>
            <MoveUp>
              <p>our life</p>
            </MoveUp>
            <MoveUp>
              <span>리시드에서 살아가는 이야기입니다.</span>
            </MoveUp>
          </div>
          <div className={content}>
            <OurlifeList />
            <MoveUp>
              <Link href="/culture" target="_self" className={more}>
                <span>더 많은 라이프 보기</span>
              </Link>
            </MoveUp>
          </div>
        </div>
      </div>
    </div>
  );
}
