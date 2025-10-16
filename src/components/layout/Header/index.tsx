"use client";

import styles from "./header.module.scss";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const { web, mob, header, header__area, logo, gnb, gnb__menu, gnb__list, request, gnb__info, mail, util, policy, youtube, is_open, is_scroll } = styles;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const [gnbOpen, setGnbOpen] = useState(false);
  const toggleGnb = () => {
    setGnbOpen(!gnbOpen);
  };

  // 웹 메뉴 active 클래스 상태 관리
  const [activeWebMenu, setActiveWebMenu] = useState<string>("");
  const handleWebMenuClick = (menu: string) => {
    setActiveWebMenu(menu);
  };

  return (
    <header className={`${header} ${isScrolled ? is_scroll : ""}`}>
      <div className={header__area}>
        <Link href="/" target="_self" className={logo} onClick={() => setGnbOpen(false)}>
          RESEED
        </Link>
        <div className={gnb}>
          <Link
            href="/"
            target="_self"
            onClick={(e) => {
              e.preventDefault();
              toggleGnb();
            }}
            className={`${gnb__menu} ${mob} ${gnbOpen ? is_open : ""}`}
          >
            GNB
          </Link>
          {gnbOpen && (
            <div className={mob}>
              <nav className={`${gnb__list} ${gnbOpen ? is_open : ""}`}>
                <Link href="/about" target="_self" onClick={() => setGnbOpen(false)}>
                  <span>about</span>
                </Link>
                <Link href="/work" target="_self" onClick={() => setGnbOpen(false)}>
                  <span>work</span>
                </Link>
                <Link href="/portfolio" target="_self" onClick={() => setGnbOpen(false)}>
                  <span>portfolio</span>
                </Link>
                <Link href="/culture" target="_self" onClick={() => setGnbOpen(false)}>
                  <span>culture</span>
                </Link>
                <Link href="/people" target="_self" onClick={() => setGnbOpen(false)}>
                  <span>people</span>
                </Link>
                <Link href="/request" target="_self" className={request} onClick={() => setGnbOpen(false)}>
                  <span>request</span>
                </Link>
              </nav>
              <div className={gnb__info}>
                <p>© RESEED. All Right Reserved</p>
                <p>서울특별시 강남구 선릉로 747, 삼성당빌딩 6층</p>
                <p className={mail}>reseed@reseedcorp.com</p>
                <div className={util}>
                  <p>02-541-6961</p>
                  <Link href="/terms" target="_blank" className={policy}>
                    개인정보 처리방침
                  </Link>
                </div>
                <Link href="https://www.youtube.com/@RESEED_YouTube" target="_blank" className={youtube}>
                  YouTube
                </Link>
              </div>
            </div>
          )}
          <div className={web}>
            <nav className={gnb__list}>
              <Link href="/about" target="_self" className={activeWebMenu === "about" ? styles.active : ""} onClick={() => handleWebMenuClick("about")}>
                <span>about</span>
              </Link>
              <Link href="/work" target="_self" className={activeWebMenu === "work" ? styles.active : ""} onClick={() => handleWebMenuClick("work")}>
                <span>work</span>
              </Link>
              <Link href="/portfolio" target="_self" className={activeWebMenu === "portfolio" ? styles.active : ""} onClick={() => handleWebMenuClick("portfolio")}>
                <span>portfolio</span>
              </Link>
              <Link href="/culture" target="_self" className={activeWebMenu === "culture" ? styles.active : ""} onClick={() => handleWebMenuClick("culture")}>
                <span>culture</span>
              </Link>
              <Link href="/people" target="_self" className={activeWebMenu === "people" ? styles.active : ""} onClick={() => handleWebMenuClick("people")}>
                <span>people</span>
              </Link>
              <Link href="/request" target="_self" className={`${request} ${activeWebMenu === "request" ? styles.active : ""}`} onClick={() => handleWebMenuClick("request")}>
                <span>request</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
