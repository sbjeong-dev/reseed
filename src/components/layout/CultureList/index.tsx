"use client";

import { useState, useEffect, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "./culturelist.module.scss";
import MoveUp from "@/components/animation/MoveUp";

const { culture__list, item, box, title, date, scroll } = styles;

type List = {
  id: number;
  title: string;
  date: string;
  image: string;
};

export default function CultureListPage() {
  const [lists, setLists] = useState<List[]>([]);
  const [maxLists, setMaxLists] = useState(6);
  const [showScroll, setShowScroll] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const scrollTextRef = useRef<HTMLDivElement | null>(null);

  // 뷰포트 감지 (웹: 3개씩, 모바일: 2개씩)
  useEffect(() => {
    const updateView = () => {
      const isMobile = window.innerWidth < 768;
      setMaxLists(isMobile ? 4 * 2 : 3 * 2);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  // IntersectionObserver로 마지막 아이템이 보이면 3초 후 3개씩 더 보이기
  useEffect(() => {
    if (!observerRef.current) return;
    const el = observerRef.current;
    let timeout: NodeJS.Timeout | null = null;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && maxLists < lists.length) {
          if (timeout) clearTimeout(timeout);
          timeout = setTimeout(() => {
            setMaxLists((prev) => {
              const next = Math.min(prev + 3, lists.length);
              if (next === lists.length) setShowScroll(false);
              return next;
            });
          }, 500);
        }
      },
      { threshold: 1 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeout) clearTimeout(timeout);
    };
  }, [lists.length, maxLists, showScroll]);

  // 예시 데이터 불러오기 (실제로는 fetch/axios 등을 사용)
  useEffect(() => {
    const fetchData = async () => {
      const data: List[] = [
        { id: 1, title: "1 창립 20주년", date: "2025.06.26", image: "/images/culture/ourlife_01.jpg" },
        { id: 2, title: "2 폭싹 먹었수다, 강남에서 제주도를 느끼다", date: "2025.04.14", image: "/images/culture/ourlife_02.jpg" },
        { id: 3, title: "3 삼성 헬스 한국 캠페인 수주", date: "2025.04.11", image: "/images/culture/ourlife_03.jpg" },
        { id: 4, title: "4 맛있게 먹고, 멋있게 굴렸다 - 회식의 신세계", date: "2025.03.06", image: "/images/culture/ourlife_04.jpg" },
        { id: 5, title: "5 창립 20주년", date: "2025.06.26", image: "/images/culture/ourlife_01.jpg" },
        { id: 6, title: "6 폭싹 먹었수다, 강남에서 제주도를 느끼다", date: "2025.04.14", image: "/images/culture/ourlife_02.jpg" },
        { id: 7, title: "7 삼성 헬스 한국 캠페인 수주", date: "2025.04.11", image: "/images/culture/ourlife_03.jpg" },
        { id: 8, title: "8 맛있게 먹고, 멋있게 굴렸다 - 회식의 신세계", date: "2025.03.06", image: "/images/culture/ourlife_04.jpg" },
        { id: 9, title: "9 삼성 헬스 한국 캠페인 수주", date: "2025.04.11", image: "/images/culture/ourlife_03.jpg" },
        { id: 10, title: "10 맛있게 먹고, 멋있게 굴렸다 - 회식의 신세계", date: "2025.03.06", image: "/images/culture/ourlife_04.jpg" },
        { id: 11, title: "11 창립 20주년", date: "2025.06.26", image: "/images/culture/ourlife_01.jpg" },
        { id: 12, title: "12 폭싹 먹었수다, 강남에서 제주도를 느끼다", date: "2025.04.14", image: "/images/culture/ourlife_02.jpg" },
        { id: 13, title: "13 삼성 헬스 한국 캠페인 수주", date: "2025.04.11", image: "/images/culture/ourlife_03.jpg" },
        { id: 14, title: "14 맛있게 먹고, 멋있게 굴렸다 - 회식의 신세계", date: "2025.03.06", image: "/images/culture/ourlife_04.jpg" },
        { id: 15, title: "15 창립 20주년", date: "2025.06.26", image: "/images/culture/ourlife_01.jpg" },
        { id: 16, title: "16 폭싹 먹었수다, 강남에서 제주도를 느끼다", date: "2025.04.14", image: "/images/culture/ourlife_02.jpg" },
        { id: 17, title: "17 삼성 헬스 한국 캠페인 수주", date: "2025.04.11", image: "/images/culture/ourlife_03.jpg" },
        { id: 18, title: "18 맛있게 먹고, 멋있게 굴렸다 - 회식의 신세계", date: "2025.03.06", image: "/images/culture/ourlife_04.jpg" },
        { id: 19, title: "19 삼성 헬스 한국 캠페인 수주", date: "2025.04.11", image: "/images/culture/ourlife_03.jpg" },
        { id: 20, title: "20 맛있게 먹고, 멋있게 굴렸다 - 회식의 신세계", date: "2025.03.06", image: "/images/culture/ourlife_04.jpg" },
      ];
      setLists(data);
    };
    fetchData();
  }, []);

  return (
    <div className={culture__list}>
      {lists.slice(0, maxLists).map((list, i) => (
        <MoveUp key={i}>
          <Link href={`/ourlife/${list.id}`} className={`${item}`} target="_self">
            <span className={box}>
              <span className={title}>{list.title}</span>
              <span className={date}>
                <em>{list.date}</em>
              </span>
            </span>
            <Image src={list.image} alt={list.title + " I " + list.date} fill sizes="(max-width: 1024px) 100vw, 50vw" priority />
          </Link>
        </MoveUp>
      ))}
      {maxLists < lists.length && <div ref={observerRef} style={{ height: 1 }} />}
      <div className={scroll} ref={scrollTextRef} style={{ height: showScroll ? "auto" : 0, opacity: showScroll ? 1 : 0, visibility: showScroll ? "visible" : "hidden" }}>
        <p>scroll down</p>
      </div>
    </div>
  );
}
