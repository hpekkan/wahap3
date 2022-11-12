import React from "react";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import { useEffect, useRef, useState } from "react";
import { WHITELIST_CONTRACT_ADDRESS, abi } from "../constants";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

import Giris from "views/IndexSections/Giris.js"
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Download from "views/IndexSections/Download.js";

export default function Index() {
  const [walletConnected, setWalletConnected] = useState(false);
  // joinedWhitelist keeps track of whether the current metamask address has joined the Whitelist or not
  const [loading, setLoading] = useState(false);
  const web3ModalRef = useRef();

  

  
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <Giris />
          <Download setWalletConnected={setWalletConnected()} web3Modal={web3ModalRef}/>
          <NucleoIcons />
        </div>
        <Footer />
      </div>
    </>
  );
}
