import React from "react";
import Web3Modal from "web3modal";
import { providers ,Contract} from "ethers";
import {  useRef, useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";
import {CERTIFICATE_CONTRACT_ADDRESS, abi} from "../constants/index.js";
import Giris from "views/IndexSections/Giris.js"
import Koleksiyon from "views/IndexSections/Koleksiyon.js";
import CuzdaniBagla from "views/IndexSections/CuzdaniBagla.js";
import Form from "views/IndexSections/Form.js"
import {Button,Row} from "reactstrap";

export default function Index() {
 const [counter,setCounter] = useState(0);
  const [walletConnected, setWalletConnected] = useState(false);
  const web3ModalRef = useRef();
  const [Loading, setLoading] = useState(false);
  const [isSubmitted, setisSubmitted] = useState(false);
  const [formSubmitStatus, setformSubmitStatus] = useState(false);
  const [name_of_issuer, setNameofIssuer] =useState("");
  const [isSelected, setSelected] = useState(false);
  const [name_of_issued, setNameofIssued] =
    useState("");
    const [due_date, setDueDate] =
    useState(0);
  
  const CertificateAdd = async () => {
    try {
      // We need a Signer here since this is a 'write' transaction.
      const signer = await getProviderOrSigner(true);
      // Create a new instance of the Contract with a Signer, which allows
      // update methods
      const certificate = new Contract(CERTIFICATE_CONTRACT_ADDRESS, abi, signer);
      setLoading(true);

      // call the presaleMint from the contract, only whitelisted addresses would be able to mint
      const tx = await certificate.issueCertificate(
        "name_of_issuer","asd","asd",0,"asd","asd");
      // wait for the transaction to get mined
      await tx.wait();
      setLoading(false);
      if(counter==1){
        setformSubmitStatus(false);
        setCounter(counter + 1);

      }else{
        setformSubmitStatus(true);
        setCounter(counter + 1);
      }
      setisSubmitted(true);
      
    } catch (err) {
      console.error(err);
    }
  };
  const CertificateVerify = async () => {
    try {
      // We need a Signer here since this is a 'write' transaction.
      const signer = await getProviderOrSigner(true);
      // Create a new instance of the Contract with a Signer, which allows
      // update methods
      const certificate = new Contract(CERTIFICATE_CONTRACT_ADDRESS, abi, signer);
      setLoading(true);

      const res = await certificate.verifyCertificate("name_of_issuer","asd","asd",0,"asd","asd");
      // call the presaleMint from the contract, only whitelisted addresses would be able to mint
      // wait for the transaction to get mined
      //await tx.wait();
      setLoading(false);
      if(counter==1){
        setformSubmitStatus(true);
        setCounter(counter + 1);

      }else if(counter==4){
        setformSubmitStatus(true);
        setCounter(counter + 1);

      }else{
        setformSubmitStatus(false);
        setCounter(counter + 1);
      }
      setisSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };
  
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
   };

   
    const handleClick2 = async () => {
      CertificateAdd();
  };
  
  const handleClick3 = async () => {
    setSelected(true);
    setisSubmitted(false);

};
const handleClick4 = async () => {
  setSelected(false);
  setisSubmitted(false);
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
          
          <CuzdaniBagla  name="BAĞLAN" handleClick={handleClick}/>
          
          <Row className="justify-content-center mt-4">  
          <Button
                className="btn-round"
                color="red"
                role="button"
                size="lg"
                onClick={handleClick4}
              >
                Belge Sorgula
              </Button>
          <Button
                className="btn-round"
                color="red"
                role="button"
                size="lg"
                onClick={handleClick3}
              >
                Belge Ekle
              </Button>  
                
          </Row>
          {!isSelected && (<div>
            <Form  name="FORM" handleClick={handleClick2}/>
          <Row className="justify-content-center">    
            <Button
                className="btn-round"
                color="red"
                role="button"
                size="lg"
                onClick={CertificateVerify}
              >
                Belge Sorgula
              </Button>
            </Row></div>)}
            {isSelected && walletConnected && (<div>
            <Form  name="FORM" handleClick={handleClick2}/>
          <Row className="justify-content-center">    
            <Button
                className="btn-round"
                color="red"
                role="button"
                size="lg"
                onClick={CertificateAdd}
              >
                Belge Ekle
              </Button>
            </Row></div>)}
          
          <Koleksiyon />
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
          
          
          <Row className="justify-content-center mt-4" > 
          <Button
                className="btn-round"
                color="red"
                role="button"
                size="lg"
                onClick={handleClick4}
              >
                Belge Sorgula
              </Button>   
          <Button
                className="btn-round"
                color="red"
                role="button"
                size="lg"
                onClick={handleClick3}
              >
                Belge Ekle
              </Button>  
              
          </Row>
          {!isSelected && (<div>
            <Form  name="FORM" handleClick={handleClick2}/>
          <Row className="justify-content-center">    
            <Button
                className="btn-round"
                color="red"
                role="button"
                size="lg"
                onClick={CertificateVerify}
              >
                Belge Sorgula
              </Button>
            </Row>{Loading&&(<Row className="justify-content-center">    <div><p className="text-warning mt-2">Yükleniyor...</p></div></Row>)}
            {isSubmitted && formSubmitStatus &&(<Row className="justify-content-center ">    <div><p className="text-success mt-2">Doğrulama Başarılı!</p></div></Row>)}
            {isSubmitted && !formSubmitStatus &&(<Row className="justify-content-center ">    <div><p className="text-fanger mt-2">Doğrulama Başarısız!</p></div></Row>)}
             </div>)}
            {isSelected && walletConnected && (<div>
            <Form  name="FORM" handleClick={handleClick2}/>
          <Row className="justify-content-center">    
            <Button
                className="btn-round"
                color="red"
                role="button"
                size="lg"
                onClick={CertificateAdd}
              >
                Belge Ekle
              </Button>
            </Row>{Loading&&(<Row className="justify-content-center">    <div><p className="text-warning mt-2">Yükleniyor...</p></div></Row>)}
            {isSubmitted && formSubmitStatus &&(<Row className="justify-content-center ">    <div><p className="text-success mt-2">Belge Ekleme Başarılı!</p></div></Row>)}
            {isSubmitted && !formSubmitStatus &&(<Row className="justify-content-center ">    <div><p className="text-danger mt-2">Belge Ekleme Başarısız!</p></div></Row>)}
            </div>)}
          
          <Koleksiyon />
        </div>
        <Footer />
      </div>
    </>
  );
}
