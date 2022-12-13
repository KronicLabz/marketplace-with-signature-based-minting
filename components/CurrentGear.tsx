import { ThirdwebNftMedia, useAddress, useNFT } from "@thirdweb-dev/react";
import { EditionDrop, NFT, SmartContract } from "@thirdweb-dev/sdk";
import React, { useEffect, useState } from "react";
import ContractMappingResponse from "../types/ContractMappingResponse";
import GameplayAnimation from "./GameplayAnimation";
import styles from "../styles/Home.module.css";

type Props = {
  miningContract: SmartContract<any>;
  characterContract: EditionDrop;
  pickaxeContract: EditionDrop;
};

/**
 * This component shows the:
 * - Currently equipped miner character (right now there is just one (token ID 0))
 * - Currently equipped character's pickaxe
 */
export default function CurrentGear({
  miningContract,
  characterContract,
  pickaxeContract,
}: Props) {
  const address = useAddress();

  const { data: playerNft } = useNFT(characterContract, 0);
  const [pickaxe, setPickaxe] = useState<NFT>();

  useEffect(() => {
    (async () => {
      if (!address) return;

      const p = (await miningContract.call(
        "playerPickaxe",
        address
      )) as ContractMappingResponse;

      // Now we have the tokenId of the equipped pickaxe, if there is one, fetch the metadata for it
      if (p.isData) {
        const pickaxeMetadata = await pickaxeContract.get(p.value);
        setPickaxe(pickaxeMetadata);
      }
    })();
  }, [address, miningContract, pickaxeContract]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 className={`${styles.noGapTop} `}>Current Items</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {/* Currently equipped player */}
        <div style={{ borderRadius: 16 }}>
          {playerNft && (
            <ThirdwebNftMedia metadata={playerNft?.metadata} height={"125"} />
          )}
        </div>
        {/* Currently equipped pickaxe */}
        <div style={{ borderRadius: 16, marginLeft: 8 }}>
          {pickaxe && (
            // @ts-ignore
            <ThirdwebNftMedia metadata={pickaxe.metadata} height={"75"} />
          )}
        </div>
      </div>

      {/* Gameplay Animation */}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="./mine.gif" height={250} width={250} alt="character-mining" />
        <GameplayAnimation pickaxe={pickaxe} />
      </div>
    </div>
  );
}
