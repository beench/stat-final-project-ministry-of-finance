import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="center">
            <p>
              เว็บไซต์นี้เป็นส่วนหนึ่งของวิชา 01204314 Statistics for Computer
              Engineering Applications
              <br />
              จัดทำโดย ชลทัศน์ ทัศนปรีชาชัย รหัสนิสิต 5910503693
              <br />
            มหาวิทยาลัยเกษตรศาสตร์
            </p>
            
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
