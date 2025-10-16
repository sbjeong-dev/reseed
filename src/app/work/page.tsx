"use client";

import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "./work.module.scss";
import MoveUp from "@/components/animation/MoveUp";
import FloatingText from "@/components/animation/FloatingText";

const { container, visual, visual__title, visual__image, contents, inner, description, summary, large, small, departments, dept__campaign, dept__social, dept__performance, dept__creative, dept__web, dept__box, image, text, award, award__list, award__social, award__web, winning, medal, team, team__title, team__comprise, comprise, hr, comprise_main, dept, list } = styles;

export default function WorkPage() {
  // SOCIAL 수상내역 카운트
  const socialRef = useRef<HTMLDivElement>(null);
  const [socialCount, setSocialCount] = useState(0);
  useEffect(() => {
    if (!socialRef.current) return;
    const links = socialRef.current.querySelectorAll("a");
    const target = links.length;
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setSocialCount(current);
      if (current >= target) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // WEB 수상내역 카운트
  const webRef = useRef<HTMLDivElement>(null);
  const [webCount, setWebCount] = useState(0);
  useEffect(() => {
    if (!webRef.current) return;
    const links = webRef.current.querySelectorAll("a");
    const target = links.length;
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setWebCount(current);
      if (current >= target) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // 플로팅 텍스트
  const visualRef = useRef<HTMLDivElement>(null);

  return (
    <div className={container}>
      <div className={visual} ref={visualRef}>
        <MoveUp className={visual__title}>To create more noteworthy</MoveUp>
        <MoveUp className={`${visual__image}`}>
          <Image src="/images/work/visual.jpg" alt="To create more noteworthy" fill sizes="(max-width: 1024px) 100vw, 50vw" priority />
        </MoveUp>
      </div>
      <FloatingText visualRef={visualRef}>
        we <span>work</span>
      </FloatingText>
      <div className={contents}>
        <div className={description}>
          <div className={`${inner} ${summary}`}>
            <MoveUp className={large}>
              Creatively express <br />
              the core values and <br />
              messages of the <br />
              brand.
            </MoveUp>
            <MoveUp className={small}>
              공감되는 컨텐츠를 가장 적합한 채널에서 새로운 기술에 담아 <br />
              소통하는 것, 리시드가 가장 잘 하는 일 입니다. <br />
              더 주목할만한 디지털 캠페인 만들기 위해 브랜드의 핵심 가치와 <br />
              메시지를 다양한 미디어를 통해 크리에이티브하게 표현합니다.
            </MoveUp>
          </div>
          <div className={departments}>
            <MoveUp className={`${dept} ${dept__campaign}`}>
              <div className={dept__box}>
                <div className={image}>
                  <Image src="/images/work/dept_campaign.png" alt="Communication" fill sizes="(max-width: 1024px) 100vw, 50vw" priority />
                </div>
                <div className={text}>
                  <p>Campaign</p>
                  <span>
                    목적에 맞게 다양한 채널, 플랫폼, 기술, 컨텐츠, 매체를 활용한 <br />
                    IMC 캠페인을 기획, 실행합니다.
                  </span>
                  <ul>
                    <li>브랜드 런칭 및 시즌 캠페인</li>
                    <li>디맨드(리드) 제너레이션 캠페인</li>
                    <li>소셜 기반 참여형 캠페인</li>
                    <li>세일즈 프로모션</li>
                  </ul>
                  <div>
                    <Link href={`/`}>brochure</Link>
                    <Link href={`/`}>request</Link>
                  </div>
                </div>
              </div>
            </MoveUp>
            <MoveUp className={`${dept} ${dept__social}`}>
              <div className={dept__box}>
                <div className={image}>
                  <Image src="/images/work/dept_social.png" alt="Social" fill sizes="(max-width: 1024px) 100vw, 50vw" priority />
                </div>
                <div className={text}>
                  <p>Social</p>
                  <span>디지털 마케팅에서 소셜 채널은 그 무엇보다 의미가 있습니다. 소셜 채널에 대한 이해와 경험을 바탕으로, 소셜 채널을 잘 운영하며 캠페인에 잘 활용합니다.</span>
                  <ul>
                    <li>채널 전략 수립, 컨텐츠 개발, KPI 관리</li>
                    <li>소셜 연계 디지털 캠페인</li>
                    <li>소셜 최적화 컨텐츠</li>
                  </ul>
                  <div>
                    <Link href={`/`}>brochure</Link>
                    <Link href={`/`}>request</Link>
                  </div>
                </div>
              </div>
            </MoveUp>
            <MoveUp className={`${dept} ${dept__performance}`}>
              <div className={dept__box}>
                <div className={image}>
                  <Image src="/images/work/dept_performance.png" alt="Performance" fill sizes="(max-width: 1024px) 100vw, 50vw" priority />
                </div>
                <div className={text}>
                  <p>Performance</p>
                  <span>성과 전략이 없는 광고 집행을 지양합니다. 전략 기획부터 소재 기획 및 제작, 타게팅, 성과 분석까지, 퍼포먼스 마케팅에 필요한 전 과정을 진행합니다.</span>
                  <ul>
                    <li>전략 수립, 소재 제작, 집행, 분석, 리포팅</li>
                    <li>세일즈 캠페인</li>
                    <li>디맨드(리드) 제너레이션 캠페인</li>
                  </ul>
                  <div>
                    <Link href={`/`}>brochure</Link>
                    <Link href={`/`}>request</Link>
                  </div>
                </div>
              </div>
            </MoveUp>
            <MoveUp className={`${dept} ${dept__creative}`}>
              <div className={dept__box}>
                <div className={image}>
                  <Image src="/images/work/dept_creative.png" alt="Contents Creative" fill sizes="(max-width: 1024px) 100vw, 50vw" priority />
                </div>
                <div className={text}>
                  <p>Contents Creative</p>
                  <span>공감할 수 있고, 주목받을 수 있고, 브랜드에 어울리는 컨텐츠를 기획하고 제작합니다.</span>
                  <ul>
                    <li>그래픽 디자인, 디지털 아트웍, 카피라이팅</li>
                    <li>2D/3D 모션 그래픽</li>
                    <li>브랜드필름, 숏폼, 브이로그</li>
                  </ul>
                  <div>
                    <Link href={`/`}>brochure</Link>
                    <Link href={`/`}>request</Link>
                  </div>
                </div>
              </div>
            </MoveUp>
            <MoveUp className={`${dept} ${dept__web}`}>
              <div className={dept__box}>
                <div className={image}>
                  <Image src="/images/work/dept_web.png" alt="Web & Mobile" fill sizes="(max-width: 1024px) 100vw, 50vw" priority />
                </div>
                <div className={text}>
                  <p>Web & Mobile</p>
                  <span>사용자의 동선, 핵심 컨텐츠, 채널의 역할, 마케팅의 목표를 이해하고, 이를 위한 웹 & 모바일 플랫폼을 만듭니다.</span>
                  <ul>
                    <li>홈페이지 / 쇼핑몰 / 멤버쉽 기반 커뮤니티</li>
                    <li>마이크로사이트 (브랜드 사이트, 캠페인 사이트)</li>
                    <li>인터랙티브 스토리텔링 / 웹진 / 디지털 매거진</li>
                  </ul>
                  <div>
                    <Link href={`/`}>brochure</Link>
                    <Link href={`/`}>request</Link>
                  </div>
                </div>
              </div>
            </MoveUp>
          </div>
        </div>
        <MoveUp className={award}>
          <div className={`${inner} ${award__list}`}>
            <MoveUp className={award__social}>
              <p className={winning}>
                SOCIAL Award Winning <span>{socialCount}</span>
              </p>
              <div className={summary} ref={socialRef}>
                <Link href={`/`} className={medal}>
                  <span>N</span> 최고 대상 / 현대자동차그룹 제네시스 / 디지털 영상 분야 / 2025
                </Link>
                <Link href={`/`} className={medal}>
                  <span>N</span> 대상 / 현대건설기계 / 제조업 유튜브 분야 / 2025
                </Link>
                <Link href={`/`} onClick={(e) => e.preventDefault()}>
                  <span>N</span> 최우수상 / 해태아이스 / 식품 브랜드 인스타그램 분야 / 2023
                </Link>
                <Link href={`/`} onClick={(e) => e.preventDefault()}>
                  <span>N</span> 대상 / 메가MGC커피 / 음료 프랜차이즈 인스타그램 분야 / 2022
                </Link>
                <Link href={`/`} onClick={(e) => e.preventDefault()}>
                  <span>N</span> 대상 / 종근당건강 프로메가 / 건강 기능 인스타그램 분야 / 2022
                </Link>
                <Link href={`/`} onClick={(e) => e.preventDefault()}>
                  <span>N</span> 최우수상 / 동서식품 포스트 / 간편식 브랜드 인스타그램 분야 / 2020
                </Link>
              </div>
            </MoveUp>
            <MoveUp className={award__web}>
              <p className={winning}>
                WEB Award Winning <span>{webCount}</span>
              </p>
              <div className={summary} ref={webRef}>
                <Link href={`/`} onClick={(e) => e.preventDefault()}>
                  <span>N</span> 최우수상 / Reseed / 웹, 광고에이전시 분야 / 2019
                </Link>
                <Link href={`/`} onClick={(e) => e.preventDefault()}>
                  <span>N</span> 최우수상 / 소프트뱅크벤처스아시아 / 중견기업 분야 / 2019
                </Link>
              </div>
            </MoveUp>
          </div>
        </MoveUp>
        <div className={`${team} ${inner}`}>
          <div className={team__title}>
            <MoveUp className={large}>Team RESEED</MoveUp>
            <MoveUp className={small}>
              <p>
                기획부터 제작까지, 각 분야별 전문가로 구성된, <br />
                브랜드와 디지털에 대한 열정이 넘치는 리시드 입니다.
              </p>
              <span>
                기업의 마케팅 목적과 상황을 이해하고 그에 맞는 실행 전략을 기획합니다. <br />
                리시드는 새로운 마케팅 채널과 타겟, 더 나은 컨텐츠 형식, 더 효율적인 캠페인 전략에 <br />늘 도전해 왔습니다.
              </span>
            </MoveUp>
          </div>
          <MoveUp className={team__comprise}>
            <div className={comprise}>
              <p className={dept}>CEO</p>
            </div>
            <div className={`${comprise} ${hr}`}>
              <p className={dept}>HR &amp; Finance</p>
            </div>
            <div className={comprise_main}>
              <div className={comprise}>
                <p className={dept}>Social &amp; Campaign</p>
                <p className={list}>
                  <span>Marketing Director</span>
                  <span>Marketing AE</span>
                  <span>Contents Editor</span>
                </p>
              </div>
              <div className={comprise}>
                <p className={dept}>Performance &amp; Campaign</p>
                <p className={list}>
                  <span>Marketing Director</span>
                  <span>Marketing AE</span>
                  <span>Media Planner</span>
                </p>
              </div>
              <div className={comprise}>
                <p className={dept}>Communication &amp; Campaign</p>
                <p className={list}>
                  <span>Marketing Director</span>
                  <span>Marketing AE</span>
                  <span>Copywriter</span>
                </p>
              </div>
              <div className={comprise}>
                <p className={dept}>Contents creation</p>
                <p className={list}>
                  <span>Contents Designer</span>
                  <span>Video Designer</span>
                  <span>PD/Editor</span>
                  <span>Photographer</span>
                </p>
              </div>
              <div className={comprise}>
                <p className={dept}>Web Development</p>
                <p className={list}>
                  <span>Web Planner</span>
                  <span>Web Designer</span>
                  <span>Frontend Developer</span>
                  <span>Backend Developer</span>
                </p>
              </div>
            </div>
          </MoveUp>
        </div>
      </div>
    </div>
  );
}
