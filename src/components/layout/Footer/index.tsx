import Link from "next/link";
import styles from "./footer.module.scss";

const { web, mob, footer, footer__area, copy, mail, policy, util, youtube } = styles;

export default function Footer() {
  return (
    <footer className={footer}>
      <div className={footer__area}>
        <p className={copy}>© RESEED. All Right Reserved</p>
        <p>서울특별시 강남구 선릉로 747, 삼성당빌딩 6층</p>
        <p className={`${mail} ${mob}`}>reseed@reseedcorp.com</p>
        <div className={util}>
          <p className={`${mail} ${web}`}>reseed@reseedcorp.com</p>
          <p>02-541-6961</p>
          <Link href="/terms" target="_blank" className={policy}>
            개인정보 처리방침
          </Link>
        </div>
        <Link href="https://www.youtube.com/@RESEED_YouTube" target="_blank" className={youtube}>
          YouTube
        </Link>
      </div>
    </footer>
  );
}
