/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Theme.module.css";
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
import { Web3Button } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Image from "next/image";
import Active from "../components/Active";

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
    url: "https://i.seadn.io/gae/AvXGxCT9Lw0lZGFwOWg6h82h24He2uguoLR-W23mv6SqVIMwc0in51Y_sIc0cRSeK7Wb11Jo136D5CBkiks1vq7RKlehUPBiv20S?auto=format&w=1920",
  },
  {
    url: "https://i.seadn.io/gcs/files/9145783d45134768fd2236d4389d631e.png?auto=format&w=1920",
  },
];

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.featuredDropsContainer}>
        <div className={styles.pageTitle}>Featured Drops</div>
        <p></p>
        <div className={styles.featuredDrops}>
          <div
            className={styles.optionSelectBox}
            role="button"
            onClick={() => router.push(`/mint`)}
          >
            <Link href="https://kronickatz.netlify.app/" passHref>
              <Image 
                src={`/images/kronicbanner.png`} 
                className={styles.featuredImage} 
                width={1250}
                height={750}
              />
            </Link>
            <h2>Now Minting 0.01 ETH</h2>
          </div>
          <div
            className={styles.optionSelectBox}
            role="button"
            onClick={() => router.push(`/mint`)}
          >
            <Link href="https://www.mint.zombezeofficial.xyz/" passHref>
              <Image 
                src={`/images/zombeze.png`} 
                className={styles.featuredImage} 
                width={1250}
                height={750}  
              />
            </Link>
            <h2>Now Minting 0.0666 ETH</h2>
          </div>
          <div
            className={styles.optionSelectBox}
            role="button"
            onClick={() => router.push(`/mint`)}
          >
            <Link href="https://mint.boredapepixelclub.net/" passHref>
              <Image 
                src={`/images/BAPC.png`} 
                className={styles.featuredImage} 
                width={1250}
                height={750}  
              />
            </Link>
            <h2>Now Minting 0.05 ETH</h2>
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
            onClick={() => router.push(`/mint`)}
          >
            <Link href="/zombeze" passHref>
              <Image
                src={`/icons/staking.png`}
                className={styles.image}
                width={750}
                height={650}
              />
            </Link>
            <h2>NFT & Defi Staking</h2>
          </div>
          <div className={styles.optionSelectUtilityBox}>
            <Link href="https://kat-nip-staking.vercel.app/" passHref>
              <Image
                src={`/icons/verified.png`}
                className={styles.image}
                width={750}
                height={650}
              />
            </Link>
            <h2>Verified Safe Mint Links</h2>
          </div>
          <div className={styles.optionSelectUtilityBox}>
            <Link href="https://kat-nip-staking.vercel.app/" passHref>
              <Image
                src={`/icons/audits.png`}
                className={styles.image}
                width={750}
                height={650}
              />
            </Link>
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
            onClick={() => router.push(`/mint`)}
          >
            <Link href="https://first-class-eta.vercel.app/" passHref>
              <img src={`/images/firstclass.png`} className={styles.image} />
            </Link>
            <h2>First Class</h2>
          </div>
          <div className={styles.verifiedOptionSelectBox}>
            <Link href="https://thirdweb.com/" passHref>
              <img src={`/images/thirdweb.png`} className={styles.image} />
            </Link>
            <h2>thirdweb</h2>
          </div>
        </div>
      </div>
      <div className={styles.notableCollections}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Featured Collections</h2>
          {/*<Slider
            showArrowControls={false}
            showDotControls={true}
            imageList={images}
            width={600}
            height={100}
  />*/}
        </div>
      </div>
    </div>
  );
};

export default Home;
