import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Footer.scss";
import FooterBank from "./views/FooterBank";
import FooterNav from "./views/FooterNav";
import WhyUs from "./views/WhyUs";
import Maybank from "../../assests/footer/Maybank.png";
import BSN from "../../assests/footer/BSN.png";
import PBB from "../../assests/footer/Public.png";
import HLB from "../../assests/footer/HongLeong.png";
import CIMB from "../../assests/footer/CIMB-Bank.png";
const Footer = () => {
  const [link] = useState([
    { id: 1, url: "/", name: "home" },
    { id: 2, url: "/games", name: "game" },
    { id: 3, url: "/promotion", name: "promotion" },
    { id: 4, url: "/about", name: "about" },
    { id: 5, url: "/contact", name: "contact" },
  ]);
  const [contact] = useState([
    { id: 1, method: "Whatsapp", phoneNo: "016-608 1430" },
    { id: 2, method: "Telegram", phoneNo: "Digigo88" },
  ]);

  const [bank] = useState([
    { id: 1, src: Maybank },
    { id: 2, src: HLB },
    { id: 3, src: CIMB },
    { id: 4, src: PBB },
    { id: 5, src: BSN },
    
  ]);
  const footerLink = (method) => {
    switch (method) {
      case "Whatsapp":
        window.location.href = window.whatsapp;
        break;
      case "Telegram":
        window.location.href = window.telegram;
        break;
      default:
        window.location.href = window.whatsapp;
        break;
    }
  };

  return (
    <footer className="footer">
      <Container className="footer-container">
        <WhyUs contact={contact} footerLink={footerLink} />
        <FooterNav navData={link} />
        <FooterBank bank={bank} />
      </Container>
    </footer>
  );
};
export default Footer;
