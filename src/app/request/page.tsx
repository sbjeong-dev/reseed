"use client";

import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "./request.module.scss";
import MoveUp from "@/components/animation/MoveUp";
import FloatingText from "@/components/animation/FloatingText";

const { inner, subject, text, container, visual, visual_tit, visual_img, contents, description, summary, large, small, brochure, form, form_box, input, service, textarea, file, upload, upload_text, upload_file, agree, location, location__txt, location__map, map } = styles;

const NAVER_CLIENT_ID = "qifadkxpbs";

export default function RequestPage() {
  // 네이버 지도 API
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}`;
    script.async = true;
    script.onload = () => {
      if (window.naver && mapRef.current) {
        // 지도
        new window.naver.maps.Map(mapRef.current, {
          center: new window.naver.maps.LatLng(37.5211234, 127.039504),
          zoom: 14,
        });
        // 마커
        // new window.naver.maps.Marker(mapRef.current, {
        //   position: new window.naver.maps.LatLng(37.5211234, 127.039504),
        //   map: mapRef.current,
        // });
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // 파일 첨부
  const [fileName, setFileName] = useState("파일 첨부 (회사소개서 등 최대 00MB 이하)");
  const [fileLabel, setFileLabel] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFileName(files[0].name);
      setFileLabel("파일 재등록");
    } else {
      setFileName("파일 첨부 (회사소개서 등 최대 00MB 이하)");
      setFileLabel("");
    }
  };

  // 플로팅 텍스트
  const visualRef = useRef<HTMLDivElement>(null);

  return (
    <div className={container}>
      <div className={visual} ref={visualRef}>
        <MoveUp className={visual_tit}>The Pleasure of Creative Thinking</MoveUp>
        <MoveUp className={visual_img}>
          <Image src="/images/request/visual.jpg" alt="The Pleasure of Creative Thinking" fill sizes="(max-width: 1024px) 100vw, 50vw" priority />
        </MoveUp>
      </div>
      <FloatingText visualRef={visualRef}>
        <span>meet</span> us
      </FloatingText>
      <div className={contents}>
        <div className={`${description} ${inner}`}>
          <div className={summary}>
            <MoveUp className={large}>
              We are here. <br />
              to contact us at <br />
              any time.
            </MoveUp>
            <MoveUp className={small}>
              디지털 마케팅을 어떻게 해야 할지, <br />
              어떤 방향으로 전략을 세워야 할지, <br />
              다른 기업들은 어떻게 하고 있는지, <br />
              저희가 여기에 있습니다. 언제든, 얼마든지 문의해주세요.
            </MoveUp>
          </div>
          <MoveUp className={brochure}>
            <Link href="/files/RESEED_Brochure_2024.pdf" target="_blank" rel="noopener noreferrer">
              Reseed Brochure
            </Link>
          </MoveUp>
        </div>
        <MoveUp className={form}>
          <MoveUp className={inner}>
            <MoveUp className={subject}>Start a Project</MoveUp>
            <div className={form_box}>
              <MoveUp className={text}>
                의뢰할 프로젝트가 있거나, 필요한 서비스가 있다면 <br />
                아래 몇가지 항목을 작성해주세요. 문의하신 서비스에 <br />
                적합한 담당자가 곧 연락 드리겠습니다.
              </MoveUp>
              <form action="">
                <MoveUp className={input}>
                  <p>회사명</p>
                  <input type="text" />
                </MoveUp>
                <MoveUp className={input}>
                  <p>이름</p>
                  <input type="text" />
                </MoveUp>
                <MoveUp className={input}>
                  <p>직책</p>
                  <input type="text" />
                </MoveUp>
                <MoveUp className={input}>
                  <p>이메일</p>
                  <input type="text" />
                </MoveUp>
                <MoveUp className={input}>
                  <p>연락처</p>
                  <input type="text" />
                </MoveUp>
                <MoveUp className={input}>
                  <p>필요 서비스</p> <br />
                  <div className={service}>
                    <label htmlFor="campaign">
                      <input type="checkbox" id="campaign" name="serviceChk" />
                      <span>캠페인</span>
                    </label>
                    <label htmlFor="social">
                      <input type="checkbox" id="social" name="serviceChk" />
                      <span>소셜</span>
                    </label>
                    <label htmlFor="content">
                      <input type="checkbox" id="content" name="serviceChk" />
                      <span>컨텐츠</span>
                    </label>
                    <label htmlFor="performance">
                      <input type="checkbox" id="performance" name="serviceChk" />
                      <span>퍼포먼스</span>
                    </label>
                    <label htmlFor="web">
                      <input type="checkbox" id="web" name="serviceChk" />
                      <span>웹/모바일</span>
                    </label>
                    <label htmlFor="etc">
                      <input type="checkbox" id="etc" name="serviceChk" />
                      <span>기타</span>
                    </label>
                  </div>
                </MoveUp>
                <MoveUp className={`${input} ${textarea}`}>
                  <p>주요 문의사항</p>
                  <textarea name="" id="" placeholder="기타 특이사항 등을 남겨주세요."></textarea>
                </MoveUp>
                <MoveUp className={`${input} ${file}`}>
                  <p>파일 첨부</p>
                  <div className={upload}>
                    <input type="text" className={upload_text} value={fileName} placeholder="파일 첨부 (회사소개서 등 최대 10MB 이하)" readOnly />
                    <label htmlFor="uploadFile">
                      <span>{fileLabel}</span>
                    </label>
                    <input type="file" name="file" id="uploadFile" className={upload_file} onChange={handleFileChange} />
                  </div>
                </MoveUp>
                <MoveUp className={`${input} ${agree}`}>
                  <label htmlFor="privacyChk">
                    <input type="checkbox" id="privacyChk" name="privacyChk" />
                    <span>개인정보보호정책에 동의합니다.</span>
                  </label>
                  <button>문의하기</button>
                </MoveUp>
              </form>
            </div>
          </MoveUp>
        </MoveUp>
        <div className={`${location} ${inner}`}>
          <div className={location__txt}>
            <MoveUp>
              <h3 className={subject}>Location</h3>
            </MoveUp>
            <MoveUp>
              <p className={large}>
                <span>02-541-6961</span>
                <span>reseed@reseedcorp.com</span>
              </p>
            </MoveUp>
            <MoveUp>
              <p className={small}>
                <span>서울특별시 강남구 선릉로 747, 삼성당빌딩 6층</span>
                <span>7호선 강남구청역 3-1번 출구 (도보 6분) / 수인분당선 압구정로데오역 5번 출구 (도보 11분)</span>
              </p>
            </MoveUp>
          </div>
          <MoveUp className={location__map}>
            <div className={map} ref={mapRef}></div>
          </MoveUp>
        </div>
      </div>
    </div>
  );
}
