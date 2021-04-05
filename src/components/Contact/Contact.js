import React from "react";
import "./Contact.css";
import instagram from '../../container/img/instagram.png'
import facebook from '../../container/img/facebook.png'
import telegram from '../../container/img/telegram.png'
import map from '../../container/img/map.png'
function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="container">
        <div className="contact">
          <div className="contact-info">
            <h2 className="contact-phone">+996 (000) 000000</h2>
            <p className="contact-email">streetster@gmail.com</p>
            <p className="contact-address">Профессиональный лицей №98, <br/>
            225 просп. Чуй, Бишкек</p>
            <div className="contact-icons">
              <img className="soc-icons" src={instagram}/>
              <img className="soc-icons" src={facebook}/>
              <img className="soc-icons" src={telegram}/>
            </div>
          </div>
          <div className="contact-map">
            <img src={map} className="map"/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
