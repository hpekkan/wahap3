import React from "react";
// reactstrap components
import {  Container, Row, Col } from "reactstrap";

export default function Giris() {
  return (
    <div className="section section-nucleo-icons">
      <img alt="..." className="path" src={require("assets/img/path3.png")} />
      <Container>
        <Row className="justify-content-center">
          <Col lg="10" md="12">
            <h2 className="title text-warning">Sertifika Koleksiyonum</h2>
            <h4 className="description text-white">
              BLK• Design System PRO comes with 100 custom icons made by our
              friends from NucleoApp. The official package contains over 2.100
              thin icons which are looking great in combination with BLK• Design
              System PRO Make sure you check all of them and use those that you
              like the most.
            </h4>
         
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}
