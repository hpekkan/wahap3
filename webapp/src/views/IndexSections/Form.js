import React from "react";
import {Input ,Button, Container, Row, Col } from "reactstrap";

export default function Form(props) {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Container>
                <Row>
                    <Col md="3" >
                    <p>Yayınlanan Kişinin Public Keyi</p> 
                    </Col>
                    <Col >
                    <Input defaultValue="" placeholder="Public Key Giriniz" type="text" class="text-white bg-dark" />
                    </Col>
                    <br></br>
                </Row>

                <Row className="mt-3">
                    < Col md="3" >
                    <p>Yayınlanan Kişinin TC'si</p>  
                    </ Col>
                    <Col >
                    <Input defaultValue="" placeholder="TC giriniz" type="text" />
                    <br></br>
                    </Col>
                </Row>


                <Row className="mt-1">
                    < Col md="3" >
                    <p>Belgenin Verilme Zamanı</p>  
                    </ Col>
                    <Col >
                    <Input defaultValue="" placeholder="dd/ss/gg/aa/yyyy" type="text" />
                    </Col>
                    <br></br>
                </Row>
                
                <Row className="mt-3">
                    < Col md="3" >
                    <p>Belgenin Geçerlilik Tarihi</p>  
                    </ Col>
                    <Col >
                    <Input defaultValue="" placeholder="dd/ss/gg/aa/yyyy" type="text" />
                    </Col>
                    <br></br>
                </Row>

                <Row className="mt-3">
                    < Col md="3" >
                    <p>PDF Olarak Belge</p>  
                    </ Col>
                    <Col >
                    <input type="file" id="myfile" name="myfile" data-buttonText="Your label here." ></input>
                    </Col>
                    <br></br>
                </Row>

           
           <br></br>
           
          
        
      </Container>
        </div>
    );
}