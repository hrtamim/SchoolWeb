import React from "react";
// import { Col, Row } from 'antd';
import { Row, Col, Badge } from "reactstrap";
import "./notice.css";

const Notice = () => {
  return (
    <div
      style={{
        paddingRight: "100px",
        paddingLeft: "100px",
        minHeight: "350px",

        paddingTop: "100px",
      }}
    >
      <Row>
        <Col>
          <div style={{ background: "#48fa8f", textAlign: "center" }}>
            প্রধান শিক্ষকের বানী
          </div>
          <div style={{ textAlign: "justify" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </div>
        </Col>
        <Col>
          <div style={{ background: "#48fa8f", textAlign: "center" }}>
            অভিভাবকের বানী
          </div>
          <div style={{ textAlign: "justify" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </div>
        </Col>
        <Col>
          <div style={{ background: "#48fa8f", textAlign: "center" }}>
            সভাপতির বানী
          </div>
          <div style={{ textAlign: "justify" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </div>
        </Col>
      </Row>
      <div
        style={{ background: "#48fa8f", textAlign: "center", marginTop: 20 }}
      >
        নোটিশ
      </div>
      <div>
        <Row >
          <Col style={{width:20}}>ji</Col>
          <Col>hi</Col>
        </Row>
      </div>
      <Row style={{ marginTop: "30px" }}>
        <Col>
          <div style={{ background: "#48fa8f", textAlign: "center" }}>
            স্কুল সম্পর্কিত তথ্য
          </div>
          <div style={{ textAlign: "justify" }}>
            <Badge className="box" color="info" href="Commitee">
              কমিটির সদস্যগণ
            </Badge>
            <br />
            <Badge className="box" color="info" href="Officials">
              কর্মকর্তাবৃন্দ
            </Badge>
            <br />
            <Badge className="box" color="info" href="Students">
              ছাত্র/ছাত্রী
            </Badge>
            <br />
            <Badge className="box" color="info" href="#">
              কর্মকর্তাবৃন্দ
            </Badge>
            <br />
          </div>
        </Col>
        <Col>
          {/* <div style={{ background: "#48fa8f", textAlign: "center" }}>
            নোটিশ
          </div> */}
        </Col>
        <Col>
          <div style={{ background: "#48fa8f", textAlign: "center" }}>
            অনলাইন ভর্তী
          </div>
          <div style={{ textAlign: "justify" }}>
            <Badge className="box" color="info" href="#">
              ষষ্ঠ শ্রেনীতে ভর্তী
            </Badge>
            <br />
            <Badge className="box" color="info" href="#">
              সপ্তম শ্রেনীতে ভর্তী
            </Badge>
            <br />
            <Badge className="box" color="info" href="#">
              অষ্টম শ্রেনীতে ভর্তী
            </Badge>
            <br />
            <Badge className="box" color="info" href="#">
              নবম শ্রেনীতে ভর্তী
            </Badge>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Notice;
