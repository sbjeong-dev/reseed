"use client";

import React, { useRef } from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "./people.module.scss";
import MoveUp from "@/components/animation/MoveUp";
import FloatingText from "@/components/animation/FloatingText";

const { container, inner, visual, visual__title, visual__image, contents, description, summary, large, small, services, service, text, jobs, jobs_sort, sort1, sort2, sort3, sort4, sort5, sort6, sort7, sort8, sort9, sort10, sort11, jobs_list, sort, title, type } = styles;

export default function PeoplePage() {
  // 플로팅 텍스트
  const visualRef = useRef<HTMLDivElement>(null);

  return (
    <div className={container}>
      <div className={visual} ref={visualRef}>
        <MoveUp className={visual__title}>Enough faith and passion in yourself</MoveUp>
        <MoveUp className={visual__image}>
          <Image src="/images/people/visual.jpg" alt="Enough faith and passion in yourself" fill sizes="(max-width: 1024px) 100vw, 50vw" priority />
        </MoveUp>
      </div>
      <FloatingText visualRef={visualRef}>
        <span>with</span> us
      </FloatingText>
      <div className={contents}>
        <div className={`${description} ${inner}`}>
          <div className={summary}>
            <MoveUp className={large}>It&apos;s better to have someone you can fill with than a perfect person. We challenge and experience together and develop together.</MoveUp>
            <MoveUp className={small}>
              완벽한 사람보다는 같이 채울 수 있는 사람이 좋습니다. 하지만 스스로에 대한 믿음과 열정은 충분했으면 합니다. <br />
              디지털 영역은 계속 새롭게 변화합니다. 그 안에서 같이 도전하고 경험하며 함께 발전해 갑니다.
            </MoveUp>
          </div>
          <div className={services}>
            <MoveUp>
              <p className={service}>Job in RESEED</p>
              <p className={text}>
                리시드와 함께할 수 있는 직무들입니다.
                <span>
                  회사의 성장, 개인의 성장에 따라 직무는 다양해 집니다. 유연하게 협업하고, <br />
                  자신의 전문성을 주도적으로 개발해갑니다.
                </span>
              </p>
            </MoveUp>
          </div>
        </div>
        <div className={jobs}>
          <MoveUp className={jobs_sort}>
            <MoveUp className={inner}>
              <Link href={"/"} className={sort1}>
                welcome
              </Link>
              <Link href={"/"} className={sort2}>
                marketing
              </Link>
              <Link href={"/"} className={sort3}>
                copy writer
              </Link>
              <Link href={"/"} className={sort4}>
                developer
              </Link>
              <Link href={"/"} className={sort5}>
                contents editor
              </Link>
              <Link href={"/"} className={sort6}>
                producer
              </Link>
              <Link href={"/"} className={sort7}>
                designer
              </Link>
              <Link href={"/"} className={sort8}>
                photographer
              </Link>
              <Link href={"/"} className={sort9}>
                hr
              </Link>
              <Link href={"/"} className={sort10}>
                finance
              </Link>
              <Link href={"/"} className={sort11}>
                year-round
              </Link>
            </MoveUp>
          </MoveUp>
          <MoveUp className={`${inner} ${jobs_list}`}>
            <table>
              <colgroup>
                <col style={{ width: "10%" }} />
                <col style={{ width: "70%" }} />
                <col style={{ width: "20%" }} />
              </colgroup>
              <tbody>
                <tr>
                  <td>
                    <p className={sort}>designer</p>
                  </td>
                  <td>
                    <p className={title}>F&B 분야 클라이언트를 담당할 그래픽 디자이너를 찾습니다.</p>
                  </td>
                  <td>
                    <div className={type}>
                      <p>신입</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className={sort}>marketing</p>
                  </td>
                  <td>
                    <p className={title}>현대자동차 SNS 마케팅을 담당할 AE를 찾습니다.</p>
                  </td>
                  <td>
                    <div className={type}>
                      <p>경력</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className={sort}>상시</p>
                  </td>
                  <td>
                    <p className={title}>원하는 직무의 채용 공고가 오픈되어 있지 않다면, 상시 채용 지원을 해주세요.</p>
                  </td>
                  <td>
                    <div className={type}>
                      <p>정규직</p>
                      <p>경력</p>
                      <p>신입</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </MoveUp>
        </div>
      </div>
    </div>
  );
}
