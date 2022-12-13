import { NFT } from "@thirdweb-dev/sdk";
import React from "react";
import styles from "../styles/Gameplay.module.css";

const GoldGem = (
  <div className={styles.slide}>
    <img src="./gold-gem.png" height="75" width="75" alt="gold-gem" />
  </div>
);

const BrainZzZz = (
  <div className={styles.slide}>
    <img src="./brainzZzZ.png" height="75" width="75" alt="BrainzZzZ" />
  </div>
);

type Props = {
  pickaxe: NFT | undefined;
};

export default function GameplayAnimation({ pickaxe }: Props) {
  if (!pickaxe) {
    return <div style={{ marginLeft: 0 }}>I need a weapon!</div>;
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {BrainZzZz}
        {GoldGem}
        {GoldGem}
        {BrainZzZz}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {GoldGem}
        {BrainZzZz}
        {GoldGem}
      </div>
    </div>
  );
}
