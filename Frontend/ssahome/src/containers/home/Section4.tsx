// Section4.tsx
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import cardimg1 from "../../../public/images/card_img1.png"

const Section4: React.FC = () => (
  <div className={`${styles.bg} ${styles.section4} ${styles.background4}`}>
    <div >
      <div className={`${styles.centerText6} `}>
        공지
      </div>
      <div className={`${styles.centerText7} `}>
        내용
      </div>
      <div className={styles.bottomWrap}>

        <div className={styles.cards}>
          <div className={styles.cards_img}>
            <div className={styles.imgWrap}>
              <Image
                src={cardimg1}
                alt="CardImg1"
                width={320}
                height={202}
              />
            </div>
          </div>
          <div className={styles.cards_text}>
            <div className={styles.text_title}>
              무료 플레이
            </div>
            <div className={styles.text_content}>
              Eager Beaver는 언제든지 열려 있어 무료로 플레이할 수 있습니다.
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.cards_img}>
            <div className={styles.imgWrap}>
              <Image
                src={cardimg1}
                alt="CardImg1"
                width={320}
                height={202}
              />
            </div>
          </div>
          <div className={styles.cards_text}>
            <div className={styles.text_title}>
              무료 플레이
            </div>
            <div className={styles.text_content}>
              Eager Beaver는 언제든지 열려 있어 무료로 플레이할 수 있습니다.
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.cards_img}>
            <div className={styles.imgWrap}>
              <Image
                src={cardimg1}
                alt="CardImg1"
                width={320}
                height={202}
              />
            </div>
          </div>
          <div className={styles.cards_text}>
            <div className={styles.text_title}>
              무료 플레이
            </div>
            <div className={styles.text_content}>
              Eager Beaver는 언제든지 열려 있어 무료로 플레이할 수 있습니다.
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.cards_img}>
            <div className={styles.imgWrap}>
              <Image
                src={cardimg1}
                alt="CardImg1"
                width={320}
                height={202}
              />
            </div>
          </div>
          <div className={styles.cards_text}>
            <div className={styles.text_title}>
              무료 플레이
            </div>
            <div className={styles.text_content}>
              Eager Beaver는 언제든지 열려 있어 무료로 플레이할 수 있습니다.
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);
export default Section4;