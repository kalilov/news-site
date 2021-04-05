import React from "react";
import "./Contact.css";
import instagram from '../../container/img/instagram.png'
import facebook from '../../container/img/facebook.png'
import telegram from '../../container/img/telegram.png'
function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="container contact-container">
        <div className="contacts-link">
          <h3 className="contact-title">Наши контакты:</h3>
          <a className="contacts-item" href="tel:+996 502-100-048">
            Тел: +996 501-457-172
          </a>
          <a className="contacts-item" href="tel:+996 500-000-000">
            Тел: +996 555-400-323
          </a>
          <a className="contacts-item" href="tel:+996 707-77-77-77">
            Тел: +996 703-607-185
          </a>
          <h4 className="contact-subtitle">Свяжитесь с нами</h4>
        </div>
        <div className="contact-icons">
            <img className="inst" src={instagram}/>
            <img className="fb" src={facebook}/>
            <img className="tg" src={telegram}/>
        </div>
      </div>
    </div>
  );
}
export default Contact;
