import React from "react";
import Logo from '../Logo';
import ghLogo from '../../assets/img/icons/gh-logo.png'
import rsLogo from '../../assets/img/icons/rs-logo.svg'


export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container _container">
        <Logo />
        <div className="footer__developer-contacts developer-contacts">
          <a className="developer-contacts__link" href="https://github.com/Ilyas022" target="_blank">
            <img className="developer-contacts__img" src={ghLogo} alt="" />
          </a>
          <a className="developer-contacts__link" href="https://github.com/Sekler09" target="_blank">
            <img className="developer-contacts__img" src={ghLogo} alt="" />
          </a>
        </div>
        <div className="develop-year">2022</div>
        <a className="course-link" href="https://rs.school/js/" target="_blank">
          <img className="course-link__img" src={rsLogo}></img>
          
        </a>
      </div>

      
    </div>
  )
}