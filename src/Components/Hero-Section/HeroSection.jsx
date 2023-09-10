import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./hero-section.css";
import schl from '../../assests/schl.jpg';
import "./headline.css"


const HeroSection = () => {
  return (
    <section>
      <Container>
        <div className="news-container">
          <div className="title">
            Notice

          </div>

          <ul>
          <li>
Admission is going on.          </li>
          <li>
            The last date of Admission is 02/02/2024
          </li>
          </ul>

        </div>
        <div style={{height:'40px'}}>

        </div>
        
        <Row style={{marginTop:'20px'}}>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>
          <Col style={{marginTop:"80px"}} lg="6" md="6">
            <img src={schl} alt="" className="w-100 schl" />
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;