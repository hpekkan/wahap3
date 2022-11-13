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
            <h1 className="title text-warning">Belge Arşivi</h1>
            <h3 className=" text-white">
            &nbsp;&nbsp;&nbsp;Photoshop ve dijital araçlara artan erişim, sahte sertifika ve belgeleri de artırmıştır bu yüzden çevrimiçi Özgeçmişlere ve LinkedIn profillerine güvenilirlik azalmıştır. 
            Ayrıca Sahtecilik vakaları her ay artıyor ve belgenin/sertifikanın gerçekliğini bilmek için kontrol sistemi bulunmamakta. Kapsamlı bir arka plan doğrulaması ise hem maliyetli hem de zaman alıcı olmakta. 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


            <h1 className="title text-warning">Başarımlarımız</h1>

            • Belgelerin doğrulama sürecinin maliyetini ve süresini azaltmak. 
            <br></br>

            • Sertifika doğrulamasını güvenceye almak, sahtecilik ve dolandırıcılıkların önüne geçimek.
            <br></br>
            

            • Belgeleri kurcalamaya karşı korumalı ve blok zincirinde anında doğrulanabilir hale getirmek.
            <br></br>

            • Doğrulama sürecindeki tüm üçüncü taraf müdahalesini kaldırmak.
            <br></br>

            • Elde edilen belgeleri hızlıca tek bir kaynaktan görebilmek ve doğruluğundan emin bir şekilde kullanabilmek.
            <br></br>

            • Kullanan öğrencilere, kuruma ve işverenlere fayda sağlamak.
            </h3>
         
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}
