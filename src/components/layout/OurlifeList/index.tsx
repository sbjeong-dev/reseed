"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ourlifelist.module.scss";
import MoveUp from "@/components/animation/MoveUp";

const { ourlife__list, item, box, title, date } = styles;

type List = {
  id: number;
  title: string;
  date: string;
  image: string;
};

const OurlifeList = () => {
  const [lists, setLists] = useState<List[]>([]);
  const [maxLists, setMaxLists] = useState(3);

  useEffect(() => {
    // 뷰포트 감지
    const updateMaxLists = () => {
      const isMobile = window.innerWidth < 768;
      setMaxLists(isMobile ? 4 : 3);
    };
    updateMaxLists(); // 초기 설정
    window.addEventListener("resize", updateMaxLists);
    return () => window.removeEventListener("resize", updateMaxLists);
  }, []);

  useEffect(() => {
    // 예시 데이터 불러오기
    const fetchData = async () => {
      // 실제로는 fetch/axios 등을 사용
      const data: List[] = [
        { id: 1, title: "창립 20주년", date: "2025.06.26", image: "/images/culture/ourlife_01.jpg" },
        { id: 2, title: "폭싹 먹었수다, 강남에서 제주도를 느끼다", date: "2025.04.14", image: "/images/culture/ourlife_02.jpg" },
        { id: 3, title: "삼성 헬스 한국 캠페인 수주", date: "2025.04.11", image: "/images/culture/ourlife_03.jpg" },
        { id: 4, title: "맛있게 먹고, 멋있게 굴렸다 - 회식의 신세계", date: "2025.03.06", image: "/images/culture/ourlife_04.jpg" },
      ];
      setLists(data);
    };

    fetchData();
  }, []);

  return (
    <div className={ourlife__list}>
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
    </div>
  );
};

export default OurlifeList;
