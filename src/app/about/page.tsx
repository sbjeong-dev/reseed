"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Link from "next/link";
import Image from "next/image";
import styles from "./about.module.scss";
import MoveUp from "@/components/animation/MoveUp";
import FloatingText from "@/components/animation/FloatingText";

const { container, visual, visual__title, visual__image, contents, inner, description, summary, large, small, services, service, text, seek, swiper, swiper_slide, swiper_nav, swiper_nav__slide, swiper_txt, swiper_txt__slide, image, client, off, on } = styles;

const labels = ["stay", "build", "growing", "run"];

const Seeks = [
  { id: 1, title: "45.2 months", text: "한 번 인연을 맺은 고객과 평균 3~4년 간 함께 일해왔습니다. 가장 자랑스럽고 감사한 부분입니다.", image: "/images/about/seek_01.png" },
  { id: 2, title: "No.1 brands", text: "업계 1위인 고객들과 함께 일하고, 또 함께 최초 그리고 1위를 달성한 경험치를 축적하고 있습니다.", image: "/images/about/seek_02.png" },
  { id: 3, title: "since 2005", text: "2005년 설립 후 지속적으로 성장하고 있습니다. 고객의 신뢰와 직원의 열정이 있기에 가능한 일입니다.", image: "/images/about/seek_03.png" },
  { id: 4, title: "the challenge", text: "새로운 마케팅 채널과 타겟, 더 나은 컨텐츠 형식, 더 효율적인 캠페인 전략, 주목할만한 성과에 늘 도전해왔습니다.", image: "/images/about/seek_04.png" },
];

export default function AboutPage() {
  // 슬라이드 컨트롤
  const navSwiperRef = useRef<SwiperType | null>(null);
  const txtSwiperRef = useRef<SwiperType | null>(null);
  const handleNavClick = (index: number) => {
    navSwiperRef.current?.slideToLoop(index, 600);
    txtSwiperRef.current?.slideToLoop(index, 600);
  };

  // 플로팅 텍스트
  const visualRef = useRef<HTMLDivElement>(null);

  return (
    <div className={container}>
      <div className={visual} ref={visualRef}>
        <MoveUp className={visual__title}>The Pleasure of Creative Thinking</MoveUp>
        <MoveUp className={visual__image}>
          <Image src="/images/about/visual.jpg" alt="The Pleasure of Creative Thinking" fill sizes="(max-width: 1024px) 100vw, 50vw" priority />
        </MoveUp>
      </div>
      <FloatingText visualRef={visualRef}>
        <span>about</span> us
      </FloatingText>
      <div className={contents}>
        <div className={`${description} ${inner}`}>
          <div className={summary}>
            <MoveUp className={large}>
              End-to-end <br />
              marketing service <br />
              company that grows <br />
              with customers.
            </MoveUp>
            <MoveUp className={small}>
              디지털 마케팅에 필요한 전략 수립부터 IMC 캠페인, <br />
              컨텐츠 개발, 퍼포먼스 운영, 마케팅 채널 운영, 플랫폼 구축까지, <br />
              디지털 마케팅에 필요한 End to End 서비스를 제공합니다.
            </MoveUp>
          </div>
          <div className={services}>
            <MoveUp>
              <p className={service}>Marketing Perspective</p>
              <p className={text}>
                마케팅 관점에서 디지털을 바라봅니다.
                <span>
                  리시드는 홍보나 광고가 아닌, 마케팅 관점에서 디지털을 바라봅니다. <br />
                  일시적인 노출이나 버즈가 아닌, 전략적이고 장기적인 관점의 <br />
                  디지털 마케팅 전략을 고민합니다.
                </span>
              </p>
            </MoveUp>
            <MoveUp>
              <p className={service}>Not one-time ones</p>
              <p className={text}>
                고객에게 일회성이 아닌, 지속 가능한 답을 전합니다.
                <span>
                  리시드는 고객의 디지털 마케팅 전략과 프로세스를 셋업하고 로드맵을 완성해갑니다. <br />
                  캠페인 기획, 사이트 구축, 컨텐츠 제작, 광고 집행, 소셜 커뮤니케이션 등 모든 일련의 활동은 <br />
                  다음 단계의 디지털 마케팅을 수행하기 위한 과정입니다.
                </span>
              </p>
            </MoveUp>
            <MoveUp>
              <p className={service}>Focus on the contents</p>
              <p className={text}>
                컨텐츠에 주목합니다.
                <span>
                  리시드는 때로는 감정을 흔들고, 때로는 이성에 호소하는 마케팅을 지향합니다. <br />
                  그래서 매 순간 컨텐츠에 주목하고, 컨텐츠를 잘 만드는 사람들이 함께 합니다. <br />
                  공감되는 컨텐츠를 가장 적합한 채널에서 새로운 기술에 담아 소통하는 것, <br />
                  우리가 가장 잘 하는 일입니다.
                </span>
              </p>
            </MoveUp>
          </div>
        </div>
        <MoveUp className={seek}>
          <Swiper
            loop={true}
            speed={600}
            slidesPerView={"auto"}
            centeredSlides={false}
            onSwiper={(swiper) => {
              navSwiperRef.current = swiper;
            }}
            className={`${swiper} ${swiper_nav}`}
          >
            {labels.map((label, index) => (
              <SwiperSlide key={`nav-${index}`} className={`${swiper_slide} ${styles[`slide${index + 1}`]} ${swiper_nav__slide}`} onClick={() => handleNavClick(index)} style={{ cursor: "pointer" }}>
                <p>{label}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            loop={true}
            speed={600}
            slidesPerView={1}
            spaceBetween={216}
            allowTouchMove={false}
            onSwiper={(swiper) => {
              txtSwiperRef.current = swiper;
            }}
            className={`${swiper} ${swiper_txt}`}
          >
            {Seeks.map((seek, index) => (
              <SwiperSlide key={`txt-${index}`} className={`${swiper_slide} ${styles[`slide${index + 1}`]} ${swiper_txt__slide}`}>
                <div className={summary}>
                  <p>{seek.title}</p>
                  <span>{seek.text}</span>
                </div>
                <div className={image}>
                  <Image src={seek.image} alt={seek.title + " I " + seek.text} fill sizes="(max-width: 1024px) 100vw, 50vw" priority />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </MoveUp>
        <div className={`${client} ${inner}`}>
          <MoveUp>
            <Link href={`/`} target="_self">
              <Image src="/images/about/client_01_off.png" alt="삼성전자" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={off} />
              <Image src="/images/about/client_01_on.png" alt="삼성전자" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={on} />
            </Link>
          </MoveUp>
          <MoveUp>
            <Link href={`/`} target="_self">
              <Image src="/images/about/client_02_off.png" alt="HERSHEY'S" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={off} />
              <Image src="/images/about/client_02_on.png" alt="HERSHEY'S" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={on} />
            </Link>
          </MoveUp>
          <MoveUp>
            <Link href={`/`} target="_self">
              <Image src="/images/about/client_03_off.png" alt="AUTODESK" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={off} />
              <Image src="/images/about/client_03_on.png" alt="AUTODESK" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={on} />
            </Link>
          </MoveUp>
          <MoveUp>
            <Link href={`/`} target="_self">
              <Image src="/images/about/client_04_off.png" alt="testo" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={off} />
              <Image src="/images/about/client_04_on.png" alt="testo" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={on} />
            </Link>
          </MoveUp>
          <MoveUp>
            <Link href={`/`} target="_self">
              <Image src="/images/about/client_05_off.png" alt="SoftBank Ventures Korea" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={off} />
              <Image src="/images/about/client_05_on.png" alt="SoftBank Ventures Korea" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={on} />
            </Link>
          </MoveUp>
          <MoveUp>
            <Link href={`/`} target="_self">
              <Image src="/images/about/client_06_off.png" alt="KyoChon 1991" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={off} />
              <Image src="/images/about/client_06_on.png" alt="KyoChon 1991" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={on} />
            </Link>
          </MoveUp>
          <MoveUp>
            <Link href={`/`} target="_self">
              <Image src="/images/about/client_01_off.png" alt="삼성전자" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={off} />
              <Image src="/images/about/client_01_on.png" alt="삼성전자" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={on} />
            </Link>
          </MoveUp>
          <MoveUp>
            <Link href={`/`} target="_self">
              <Image src="/images/about/client_02_off.png" alt="HERSHEY'S" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={off} />
              <Image src="/images/about/client_02_on.png" alt="HERSHEY'S" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={on} />
            </Link>
          </MoveUp>
          <MoveUp>
            <Link href={`/`} target="_self">
              <Image src="/images/about/client_03_off.png" alt="AUTODESK" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={off} />
              <Image src="/images/about/client_03_on.png" alt="AUTODESK" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={on} />
            </Link>
          </MoveUp>
          <MoveUp>
            <Link href={`/`} target="_self">
              <Image src="/images/about/client_04_off.png" alt="testo" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={off} />
              <Image src="/images/about/client_04_on.png" alt="testo" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className={on} />
            </Link>
          </MoveUp>
        </div>
      </div>
    </div>
  );
}
