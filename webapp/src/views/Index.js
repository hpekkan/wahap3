import React from "react";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import { useEffect, useRef, useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

import Giris from "views/IndexSections/Giris.js"
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Download from "views/IndexSections/Download.js";


export default function Index() {
 
  const [walletConnected, setWalletConnected] = useState(false);
  const web3ModalRef = useRef();
  
  
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
 
  const handleClick = async () => {
    
      // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
      if (!walletConnected) {
        // Assign the Web3Modal class to the reference object by setting it's `current` value
        // The `current` value is persisted throughout as long as this page is open
        web3ModalRef.current = new Web3Modal({
          network: "mainnet",
          providerOptions: {},
          disableInjectedProvider: false,
        });
        await connectWallet();
        setWalletConnected(true);
      }
    
    console.log("qweqw");
   };

   
    const handleClick2 = async () => {
      console.log(web3ModalRef);
  };
  
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
    
      
    
  }, []);
  
 
  console.log("sadsa");
  if(!walletConnected)
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
  else return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <Giris />
          
          <Download  name="ÇIKIŞ YAP" handleClick={handleClick2}/>
          <NucleoIcons />
        </div>
        <Footer />
      </div>
    </>
  );
}
