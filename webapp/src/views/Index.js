import React from "react";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import { useEffect, useRef, useState } from "react";
import { WHITELIST_CONTRACT_ADDRESS, abi } from "../constants";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'

import Giris from "views/IndexSections/Giris.js"
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Download from "views/IndexSections/Download.js";
import { Web3Auth } from "@web3auth/modal";



export default function Index() {
 
  const [walletConnected, setWalletConnected] = useState(false);
  // joinedWhitelist keeps track of whether the current metamask address has joined the Whitelist or not
  const [loading, setLoading] = useState(false);
  const web3ModalRef = useRef();
  
  const web3auth = new Web3Auth({
    clientId: "BOhmBRywx4BO-V5-uz2GjgtwXU5nlLdsX0tKXwbAF2x21XmMTiozlXG8emms3OqspqNYsKLMc67p0GYR3b14iUc", // get it from Web3Auth Dashboard
    chainConfig: {
      chainNamespace: "other",
      chainId: "0xA868", // hex of 43112
      rpcTarget: "http://176.236.121.139:9656/ext/bc/C/rpc", // your RPC endpoint
      // Avoid using public rpcTarget in production.
      // Use services like Infura, Quicknode etc
      displayName: "Avalanche C-Chain Mainnet",
      blockExplorer: "https://subnets.avax.network/c-chain",
      ticker: "AVAX",
      tickerName: "AVAX",
    },
  });
  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Goerli network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 43112) {
      window.alert("Change the network to Avalanche C-Chain");
      throw new Error("Change network to Avalanche C-Chain");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };
  
  const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner();
      setWalletConnected(true);

    } catch (err) {
      console.error(err);
    }
  };
  const deconnectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner();
      setWalletConnected(false);

    } catch (err) {
      console.error(err);
    }
  };
  const handleClick = () => {
    connectWallet();
    console.log("qweqw");
   };
    const handleClick2 = async () => {
    try {
      // We need a Signer here since this is a 'write' transaction.
      const signer = await getProviderOrSigner(true);
      // Create a new instance of the Contract with a Signer, which allows
      // update methods
      const mycontract = new Contract(
        WHITELIST_CONTRACT_ADDRESS,
        abi,
        signer
      );
      // call the addAddressToWhitelist from the contract
      const tx = await mycontract.issueCertificate("WAHAP3","Sertifika 1","0x19A69aB6E3C8121418C71babdDE202b3140992C3");
      setLoading(true);
      // wait for the transaction to get mined
      await tx.wait();
      console.log("Çalıştı");
    } catch (err) {
      console.error(err);
    }
  };
  
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  
  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    if (!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      web3ModalRef.current = new Web3Modal({
        network: "mainnet",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  }, [walletConnected]);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <Giris />
          <Download  name="BAĞLAN" handleClick={handleClick}/>
          <Download  name="ÇIKIŞ YAP" handleClick={handleClick2}/>
          <NucleoIcons />
        </div>
        <Footer />
      </div>
    </>
  );
}
