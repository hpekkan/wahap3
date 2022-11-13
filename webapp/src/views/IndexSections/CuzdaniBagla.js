
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function CuzdaniBagla(props) {
  
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
            <h1 className="title text-warning">
              METAMASK CUZDANIMI BAĞLA
            </h1>
            <h2 className="description">
              Belge eklemek veya Belge koleksiyonunuza erişmek için Metamask Cüzdanınızı bağlayın.
            </h2>
          </Col>
          <Col className="text-center" lg="8" md="12">
            <Button
              className="btn-round"
              color="info"
              onClick={() => {
                props.handleClick();
            }}
              role="button"
              size="lg"
            >
              {props.name}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
