import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <p className="footerText">Сделано с ❤️ <br /> Болтогой!</p>

      <div className="footerLinks">
        <a
          className="umami--click--footer-contact-us"
          href="mailto:toli.app.ios@gmail.com?subject=Mail from Landing Page"
        >
          Связаться с нами
        </a>

        <a className="umami--click--header-tg-chat" href="https://t.me/apptoli">
          Сообщество
        </a>
      </div>
    </footer>
  );
}

export default Footer;
