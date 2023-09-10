import React from "react";
// import { Col, Row } from 'antd';
import { Row, Col, Badge } from "reactstrap";
import './notice.css'


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
      <Row style={{ marginTop: "30px" }}>
        <Col>
          <div style={{ background: "#48fa8f", textAlign: "center" }}>
            স্কুল সম্পর্কিত তথ্য
          </div>
          <div style={{ textAlign: "justify" }}>
            <Badge className="box" color="info" href="#">
              কর্মকর্তাবৃন্দ
            </Badge>
            <br/>
            <Badge className="box" color="info" href="#">
              ৩য় শ্রেনীর কর্মকর্তাবৃন্দ
            </Badge>
            <br/>
            <Badge className="box" color="info" href="#">
              কর্মকর্তাবৃন্দ
            </Badge>
            <br/>
            <Badge className="box" color="info" href="#">
              কর্মকর্তাবৃন্দ
            </Badge>
            <br/>
            <Badge className="box" color="info" href="#">
              কর্মকর্তাবৃন্দ
            </Badge>
          </div>
        </Col>
        <Col>
          <div style={{ background: "#48fa8f", textAlign: "center" }}>
            নোটিশ
          </div>
        </Col>
        <Col>
          <div style={{ background: "#48fa8f", textAlign: "center" }}>
            অনলাইন ভর্তী
          </div>
          <div style={{ textAlign: "justify" }}>
            <Badge className="box" color="info" href="#">
              কর্মকর্তাবৃন্দ
            </Badge>
            <br/>
            <Badge className="box" color="info" href="#">
              ৩য় শ্রেনীর কর্মকর্তাবৃন্দ
            </Badge>
            <br/>
            <Badge className="box" color="info" href="#">
              কর্মকর্তাবৃন্দ
            </Badge>
            <br/>
            <Badge className="box" color="info" href="#">
              কর্মকর্তাবৃন্দ
            </Badge>
            <br/>
            <Badge className="box" color="info" href="#">
              কর্মকর্তাবৃন্দ
            </Badge>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Notice;
