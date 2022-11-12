
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function Download(props) {
  
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
