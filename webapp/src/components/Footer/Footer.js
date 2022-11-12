import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="4">
            <h1 className="title">&nbsp;Nitelikli Sertifika &nbsp;Tapusu</h1>
          </Col>
          <Col md="5">
          </Col>

          <Col md="3">
            <h3 className="title">Bizi Takip Edin:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://twitter.com/TobbEtuChain?t=3jUuSShqpKujdZ4kWTgBHA&s=09"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Bizi Takip Edin
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.instagram.com/tobbetublockchain/?igshid=YmMyMTA2M2Y%3D"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
              Bizi Takip Edin
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://discord.com/invite/HhXhwpYG"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-discord" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
              Kanala Katıl
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
