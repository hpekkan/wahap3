
import React from "react";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function Download(props) {
  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await props.web3ModalRef.current.connect();
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
      props.setWalletConnected(true);

    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="download-section"
    >
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">
              METAMESK CUZDANIMI BAĞLA
            </h2>
            <h4 className="description">
              Sertifikalara erişmek için Metamesk Cüzdanınızı bağlayın.
            </h4>
          </Col>
          <Col className="text-center" lg="8" md="12">
            <Button
              className="btn-round"
              color="info"
              href=""
              role="button"
              size="lg"
            >
              BAĞLAN
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
