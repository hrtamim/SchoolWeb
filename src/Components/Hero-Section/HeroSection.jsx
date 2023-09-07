import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./hero-section.css";
import schl from '../../assests/schl.jpg';


const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
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
          <Col lg="6" md="6">
            <img src={schl} alt="" className="w-100 schl" />
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;