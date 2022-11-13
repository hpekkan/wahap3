import React from "react";
import {Input ,Button, Container, Row, Col } from "reactstrap";

export default function Form() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Container>
                    <Col lg="10" md="12"></Col>
                Yayınlayan kişi:
                    <Input defaultValue="" placeholder="Regular" type="text" />
                Yayınlayan kişi:
                    <Input defaultValue="" placeholder="Regular" type="text" />
                    Yayınlayan kişi:
                    <Input defaultValue="" placeholder="Regular" type="text" />
                    Yayınlayan kişi:
                    <Input defaultValue="" placeholder="Regular" type="text" />
                    Yayınlayan kişi:
                    <Input defaultValue="" placeholder="Regular" type="text" />
                    Yayınlayan kişi:
                    <Input defaultValue="" placeholder="Regular" type="text" />
           
           <br></br>
           
            <Row className="justify-content-center">    
            <Button
              className="btn-round"
              color="red"
              role="button"
              size="lg"
            >
              Onayla
            </Button>
            </Row>

        
      </Container>
        </div>
    );
}