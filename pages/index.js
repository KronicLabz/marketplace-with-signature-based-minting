import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Theme.module.css";
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

const images = [
    { url: "https://i.seadn.io/gcs/files/77f81965d2c858fbdfad09168e9c1e13.png?auto=format&w=1920" },
    { url: "https://i.seadn.io/gcs/files/546c3af3a131a1b1fadacb04e7100e44.jpg?auto=format&w=1920" },
    { url: "https://i.seadn.io/gcs/files/72fd262a5abf935679cc75e6779996e9.jpg?auto=format&w=1920" },
    { url: "https://i.seadn.io/gcs/files/ba04636dd822d607065a92acfe297ff5.png?auto=format&w=1920" },
    { url: "https://i.seadn.io/gae/a2KKmW0hZKrWcX7HvQOgjqjeORjfi8D5hag9hG94TCAzNMarYsDVTTe3Cc_jGU-qZPtTEd8EdJgC2tBG-yduN6Up_SmtCjWQOXfr28I?auto=format&w=1920" },
    { url: "https://i.seadn.io/gae/AvXGxCT9Lw0lZGFwOWg6h82H44He2uguoLR-W23mv6SqVIMwc0in51Y_sIc0cRSeK7Wb11Jo136D5CBkiks1vq7RKlehUPBiv20S?auto=format&w=1920" },
    { url: "https://i.seadn.io/gcs/files/9145783d45134768fd2236d4389d631e.png?auto=format&w=1920" },
];

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <div className={styles.bannerImage}>
                    <img
                        src="./android-chrome-512x512.png" 
                    />
                </div>
                <div className={styles.bannerText}>
                    <h1>Aura NFT Exchange</h1>
                    <h3>The only NFT marketplace to offer Quick Scan, a quick audit service for members to easily scan a NFT contract. Because a marketplace, should promote safety and transparency of web3. </h3>
                </div>
            </div>
            <div className={styles.featuredDropsContainer}>
                <h1>Featured Drops</h1>
                <div className={styles.featuredDrops}>
                    <div className={styles.optionSelectBox}>
                        <Link href="/mint" passHref>
                            <img
                                src={`/images/kronicbanner.png`}
                                className={styles.image}
                            />
                        </Link>
                        <h1>Minting Soon!</h1>
                    </div>
                    <div className={styles.optionSelectBox}>
                        <Link href="/zombeze" passHref>
                            <img
                                src={`/images/zombeze.png`}
                                className={styles.image}
                            />
                        </Link>
                        <h1>Now Minting!</h1>
                    </div>
                    <div className={styles.optionSelectBox}>
                        <Link href="/mint" passHref>
                            <img
                                src={`/images/BAPC.png`}
                                className={styles.image}
                            />
                        </Link>
                        <h1>Minting Soon!</h1>
                    </div>
                </div>
            </div>
            <div className={styles.notableCollections}>
                <div className={styles.container}>
                    <h1 className={styles.h1}>Featured Collections</h1>
                    <Slider showArrowControls={false} showDotControls={true} imageList={images} width={1400} height={300} />

                </div>
            </div>
            <div className={styles.education}>
                <h1>Web3 101</h1>
            </div>
        </div>
    )
}

export default Home