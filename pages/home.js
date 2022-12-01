import React, { useState } from "react";
import Link from "next/link";
import {
    useContract,
    useNetwork,
    useNetworkMismatch,
    useAddress,
    useSDK,
    useCreateDirectListing,
    useCreateAuctionListing,
} from "@thirdweb-dev/react";
import { ChainId, NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";
import { useRouter } from "next/router";
import { useRef } from "react";
import styles from "../styles/Theme.module.css";
import Player from "../components/Player";

const Home = () => {
    return (
        <div className={styles.container}>
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
                <h1>Featured</h1>
            </div>
            <div className={styles.education}>
                <h1>Web3 101</h1>
            </div>
        </div>
    )
}

export default Home