/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Theme.module.css";
import { useRouter } from "next/router";
import { NextPage } from "next";
import "@madzadev/image-slider/dist/index.css";

const images = [
  {
    url: "https://i.seadn.io/gcs/files/77f81965d2c858fbdfad09168e9c1e13.png?auto=format&w=1920",
  },
  {
    url: "https://i.seadn.io/gcs/files/546c3af3a131a1b1fadacb04e7100e44.jpg?auto=format&w=1920",
  },
  {
    url: "https://i.seadn.io/gcs/files/72fd262a5abf935679cc75e6779996e9.jpg?auto=format&w=1920",
  },
  {
    url: "https://i.seadn.io/gcs/files/ba04636dd822d607065a92acfe297ff5.png?auto=format&w=1920",
  },
  {
    url: "https://i.seadn.io/gae/a2KKmW0hZKrWcX7HvQOgjqjeORjfi8D5hag9hG94TCAzNMarYsDVTTe3Cc_jGU-qZPtTEd8EdJgC2tBG-yduN6Up_SmtCjWQOXfr28I?auto=format&w=1920",
  },
  {
    url: "https://i.seadn.io/gcs/files/9145783d45134768fd2236d4389d631e.png?auto=format&w=1920",
  },
];

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.homePageHeader}>
        <img
          src={`/lunar.png`}
          width={450}
        />
      </div>
      <hr className={styles.divider} />
      <div className={styles.featuredDropsContainer}>
        <div className={styles.pageTitle}>Featured Drops</div>
        <div className={styles.featuredDrops}>
          <div
            className={styles.optionSelectBox}
            role="button"
            onClick={() => router.push(`https://kronickatz.netlify.app/`)}
          >
            <img
              src={`/images/kronic.png`}
              className={styles.featuredImage}
              width={1250}
              height={750}
            />
            <h2>KronicKatz</h2>
          </div>
          <div
            className={styles.optionSelectBox}
            role="button"
            onClick={() => router.push(`https://www.mint.zombezeofficial.xyz/`)}
          >
            <img
              src={`/images/zombeze.png`}
              className={styles.featuredImage}
              width={1250}
              height={750}
            />
            <h2>Zombeze</h2>
          </div>
          <div
            className={styles.optionSelectBox}
            role="button"
            onClick={() => router.push(`https://mint.boredapepixelclub.net/`)}
          >
            <img
              src={`/images/bapc.png`}
              className={styles.featuredImage}
              width={1250}
              height={750}
            />
            <h2>Bored Ape Pixel Club</h2>
          </div>
          <div
            className={styles.optionSelectBox}
            role="button"
            onClick={() => router.push(`https://web-against-humanity.vercel.app/`)}
          >
            <img
              src={`/images/web3.png`}
              className={styles.featuredImage}
              width={1250}
              height={750}
            />
            <h2>Web3 Against Humanity</h2>
          </div>
        </div>
      </div>
      <p></p>
      <div className={styles.utilityContainer}>
        <div className={styles.pageTitle}>Aura Subscription Perks</div>
        <p></p>
        <div className={styles.featuredUtility}>
          <div
            className={styles.optionSelectUtilityBox}
            role="button"
            onClick={() => router.push(`/staking`)}
          >
            <img src={`/icons/staking.png`} className={styles.image} />
            <h2>NFT & Defi Staking</h2>
          </div>
          <div
            className={styles.optionSelectUtilityBox}
            role="button"
            onClick={() => router.push(`/mintlink`)}
          >
            <img src={`/icons/verified.png`} className={styles.image} />
            <h2>Verified Safe Mint Links</h2>
          </div>
          <div
            className={styles.optionSelectUtilityBox}
            role="button"
            onClick={() => router.push(`/audits`)}
          >
            <img src={`/icons/audits.png`} className={styles.image} />
            <h2>Quick Audit Tool</h2>
          </div>
        </div>
      </div>
      <p></p>
      <div className={styles.Education}>
        <div className={styles.pageTitle}>Verified Partners</div>
        <p></p>
        <div className={styles.verifiedPartners}>
          <div
            className={styles.verifiedOptionSelectBox}
            role="button"
            onClick={() => router.push(`https://1stclasslabs.io/`)}
          >
            <img src={`/images/firstclass.png`} className={styles.image} />
            <h2>First Class</h2>
          </div>
          <div
            className={styles.verifiedOptionSelectBox}
            role="button"
            onClick={() => router.push(`https://thirdweb.com/`)}
          >
            <img src={`/images/thirdweb.png`} className={styles.image} />
            <h2>thirdweb</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
