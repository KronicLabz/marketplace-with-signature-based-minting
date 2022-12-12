/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Theme.module.css";
import "@madzadev/image-slider/dist/index.css";
import { useRouter } from "next/router";
import { NextPage } from "next"

const Links = () => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.featuredDropsContainer}>
                <div className={styles.pageTitle}>Verified New Mints</div>
                <p></p>
                <div className={styles.featuredDrops}>
                    <div
                        className={styles.optionSelectBox}
                        role="button"
                        onClick={() => router.push(`/mint`)}
                    >
                        <Link href="https://kronickatz.netlify.app/" passHref>
                            <img
                                src={`/images/kronic.png`}
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
                            <img
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
                            <img
                                src={`/images/BAPC.png`}
                                className={styles.featuredImage}
                                width={1250}
                                height={750}
                            />
                        </Link>
                        <h2>Now Minting 0.05 ETH</h2>
                    </div>
                </div>
                <div className={styles.pageTitle}>Verified FREE Mints</div>
                <p></p>
                <div className={styles.featuredDrops}>
                    <div
                        className={styles.optionSelectBox}
                        role="button"
                        onClick={() => router.push(`/mint`)}
                    >
                        <Link href="https://web-against-humanity.vercel.app/" passHref>
                            <img
                                src={`/images/web3.png`}
                                className={styles.featuredImage}
                                width={1250}
                                height={750}
                            />
                        </Link>
                        <h2>FREE Mint</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Links;
