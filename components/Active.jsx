/* eslint-disable react/jsx-key */
import { useContract, useNFT, ThirdwebNftMedia, useContractMetadata } from "@thirdweb-dev/react";
import styles from "../styles/Theme.module.css";
import Image from "next/image";

export default function NFTCollectionRender() {
  // Get your NFT Collection using it's contract address
  const { contract } = useContract("0x5526fb9e98A64F7C95971a2f0580D8cdF172A95a");
  const { data: nfts, isLoading } = useNFT(contract);
  const { data: metadata, isLoading: loadingMetadata } = useContractMetadata(contract);


  // Load (and cache) the metadata for the NFT with token ID 0
  //const { data: nft, isLoading } = useNFT(contract, 0);

  // Render the NFT metadata using the `ThirdwebNftMedia` component
  return (
    <main className="container">
    {!loadingMetadata &&
      <header className="heading">
        <div>
          <img src={metadata?.image} alt="NFT Collection Thumbnail" />
          <h1>{metadata?.name}</h1>
        </div>
      </header>
    }

    {!isLoading ?
    (<div className="gallery">
      {nfts?.map(e =>
        <div className="card">
          <ThirdwebNftMedia metadata={e.metadata} />
        </div>
      )}
    </div>)
    : (<p className="loading">Loading...</p>) }
  </main>
  );
}