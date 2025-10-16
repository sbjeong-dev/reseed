import React from "react";
import { useEffect, useState } from "react";
import { MasonryGrid } from "@egjs/react-grid";

import Image from "next/image";
import Link from "next/link";
import styles from "./portfoliolist.module.scss";
import MoveUp from "@/components/animation/MoveUp";

const { portfolio__list, project, project__s, title, image, summary, box, dim, txt } = styles;

type Project = {
  id: number;
  title: string;
  image: string;
  text: string;
};

export default function PortfolioList() {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    // 예시 데이터 불러오기
    const fetchData = async () => {
      // 실제로는 fetch/axios 등을 사용
      const data: Project[] = [
        { id: 1, title: "비즈니스워치", image: "/images/portfolio/portfolio_01.jpg", text: "친환경 전기차의 역설 : 인터랙티브 스토리텔링" },
        { id: 2, title: "해태아이스크림", image: "/images/portfolio/portfolio_02.jpg", text: "부라보 콘 바닐라플러스+" },
        { id: 3, title: "비즈니스워치", image: "/images/portfolio/portfolio_03.jpg", text: "친환경 전기차의 역설 : 인터랙티브 스토리텔링" },
        { id: 4, title: "크린토피아", image: "/images/portfolio/portfolio_04.jpg", text: "쇼파에 있는 크린토피아 가방" },
        { id: 5, title: "메가커피", image: "/images/portfolio/portfolio_05.jpg", text: "메가커피 마그멍, 마시멍" },
        { id: 6, title: "메가커피", image: "/images/portfolio/portfolio_06.jpg", text: "메가커피 부라보 콘 바닐라플러스+" },
      ];
      setProjects(data);
    };
    fetchData();
  }, []);

  return (
    <MasonryGrid
      className={portfolio__list}
      gap={3}
      defaultDirection={"end"}
      align={"justify"}
      column={0}
      columnSize={0}
      columnSizeRatio={0}
      onRenderComplete={(e) => {
        console.log(e);
      }}
    >
      {projects.map((item) => {
        const extraClass = item.id === 2 ? project__s : "";
        return (
          <MoveUp key={item.id} className={`${project} ${extraClass}`}>
            <Link href={`/`}>
              <span className={title}>{item.title}</span>
              <span className={summary}>
                <span className={box}>
                  <span className={dim}></span>
                  <span className={txt}>{item.text}</span>
                </span>
                <Image src={item.image} alt={item.title + " I " + item.text} fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={image} />
              </span>
            </Link>
          </MoveUp>
        );
      })}
    </MasonryGrid>
  );
}
