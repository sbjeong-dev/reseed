"use client";

import React, { useState, useRef } from "react";

import Image from "next/image";
import styles from "./culture.module.scss";
import MoveUp from "@/components/animation/MoveUp";
import CultureList from "@/components/layout/CultureList";
import FloatingText from "@/components/animation/FloatingText";

const { inner, container, visual, visual__title, visual__image, contents, culture, culture__summary, large, small, culture__together, together, text, benefit, benefit__title, benefit__text, benefit__list, title, content, is_opened, ourlife } = styles;

export default function CulturePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = [
    {
      number: 1,
      subject: "Work & Life Balance",
      summary: "일과 삶의 균형을 존중합니다.",
      text: ["하루 8시간도 길어요 1시간 빼기.", "매월 마지막주 금요일 2시 퇴근.", "매월 둘째수 금요일 2시간 점심.", "생일엔 쉬어요! 내 연차 말고 유급 휴가로.", "내 출근시간은 내가 정해요.", "자녀 양육엔 좀더 시간이 필요해요."],
      desc: ["7시간 근무", "불금데이", "런치데이", "생일 휴가", "탄력근무", "육아반차"],
    },
    {
      number: 2,
      subject: "Grow up together",
      summary: "우리의 성장을 응원합니다.",
      text: ["함께 성장해준 그대에게~", "건강, 또 건강! 우리 오래 함께해요.", "공부하는 당신을 응원해요.", "1년간 즐긴 문화, 운동 비용은 연말에 청구.", "남들 놀 때 일했다면 남들 일할 때 난 쉬어요!", "성과지표 메뉴판이 있어요. 주문하실 분~?"],
      desc: ["장기 근속 휴가/휴가비", "건강검진 풀코스", "교육 지원", "연간복지비", "대체휴무", "성과지표 포상"],
    },
    {
      number: 3,
      subject: "Have fun together",
      summary: "‘함께’의 가치와 소중함을 생각합니다.",
      text: ["생일 축하해요!", "오늘이 입사 N년 기념일이예요!", "입사자 부모님께, 잘 키워 주셔서 감사합니다.", "나눠 쓰고 바꿔 쓰는 득템데이.", "팝콘 들고 다같이 무비무비 영화 감상.", "맛집 투어, 공연 관람, 원데이클래스 각양각색."],
      desc: ["축하선물", "기념선물", "부모님 꽃배송", "플리마켓", "무비데이", "부서활동비"],
    },
  ];
  const handleClick = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // 플로팅 텍스트
  const visualRef = useRef<HTMLDivElement>(null);

  return (
    <div className={container}>
      <div className={visual} ref={visualRef}>
        <MoveUp className={visual__title}>Passion. Honesty. Consideration.</MoveUp>
        <MoveUp className={`${visual__image}`}>
          <Image src="/images/culture/visual.jpg" alt="Passion. Honesty. Consideration." fill sizes="(max-width: 1024px) 100vw, 50vw" priority />
        </MoveUp>
      </div>
      <FloatingText visualRef={visualRef}>
        our <span>life</span>
      </FloatingText>
      <div className={contents}>
        <div className={`${culture} ${inner}`}>
          <div className={culture__summary}>
            <MoveUp className={large}>
              RESEED&#39;s <span>day-to-day life is</span> calmer and more normal than you think. We go to work, grab a cup of coffee or cereal, and get to work. However, <span>we know better than anyone else</span> when passion is needed, and their energy <span>recharges each other</span> with the strength they need.
            </MoveUp>
            <MoveUp className={small}>
              리시드의 하루하루는 생각보다 차분하고 평범합니다. 출근해서 커피 한 잔이나 시리얼을 들고 업무를 시작하죠. <br />
              하지만 열정이 필요한 그 때를 누구보다 잘 알아서, 각자의 에너지가 서로에게 필요한 힘을 충전해 줍니다.
            </MoveUp>
          </div>
          <div className={culture__together}>
            <MoveUp>
              <p className={together}>
                RESEED is <br />
                happy to be happy together
              </p>
              <p className={text}>
                더불어 행복한 회사
                <span>
                  리시드의 미션 입니다. <br />
                  고객과 더불어, 동료와 함께, 프로젝트 멤버들과 같이 하기에 덜 고되고 더 행복한 회사 생활이 가능합니다. ‘더불어’의 가치는 지금 이 순간에도 조금씩 배워가고 있습니다. <br />
                  언젠가 실현될 ‘더불어 행복한 회사’를 함께 만들어갑니다.
                </span>
              </p>
            </MoveUp>
            <MoveUp>
              <p className={together}>
                RESEED, <br />a growing company made by me
              </p>
              <p className={text}>
                내가 만들어가는 회사
                <span>
                  리시드는 나 스스로가 주인공이자 의사 결정자가 되는 문화를 지향합니다. <br />
                  이를 위해선 누구나 이미 갖고 있는 열정, 스스로에 대한 정직, 타인을 향한 배려의 발현이 필요합니다. 불금데이, 런치데이, 반반차, 하트박스, 플리마켓 등. 직원이 의견을 내고, 그렇게 실현된 아이디어는 우리만의 문화로 완성됩니다.
                </span>
              </p>
            </MoveUp>
          </div>
        </div>
        <MoveUp className={benefit}>
          <div className={inner}>
            <MoveUp>
              <p className={benefit__title}>
                What Makes a <br />
                Great Culture
              </p>
            </MoveUp>
            <MoveUp>
              <p className={benefit__text}>
                리시드의 복지 프로그램은 매년 조금씩 변화합니다. <br />
                하지만 주인공은 우리입니다.
              </p>
              <ul className={benefit__list}>
                {items.map((item, idx1) => (
                  <li key={idx1} className={openIndex === idx1 ? is_opened : ""}>
                    <button className={title} onClick={() => handleClick(idx1)}>
                      <span>{item.number}</span> {item.subject}
                    </button>
                    <div className={content}>
                      <p>{item.summary}</p>
                      {item.text.map((text, idx2) => (
                        <p key={idx2}>
                          {text} <span>{item.desc[idx2]}</span>
                        </p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </MoveUp>
          </div>
        </MoveUp>
        <div className={`${ourlife} ${inner}`}>
          <CultureList />
        </div>
      </div>
    </div>
  );
}
