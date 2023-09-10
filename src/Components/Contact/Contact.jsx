import React from "react";
import "../Contact/contact.css";
import { Input } from "reactstrap";

function Contact() {
  return (
    <div className="page">
      <h3> আমাদের সাথে সরাসরি যোগাযোগ করুন</h3>
      <div>
       <h6 className="text"> আপনার নাম</h6>
        <Input placeholder="সম্পুর্ন নাম"/>
        <h6 className="text"> আপনার ইমেইল</h6>
        <Input placeholder="example@gmail.com" />
        <h6 className="text"> আপনার বার্তা</h6>
        <Input
      id="exampleText"
      name="text"
      type="textarea"
    />
      </div>
    </div>
  );
}

export default Contact;
