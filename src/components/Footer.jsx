import React from "react";

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <h2 className="footer__text">
          <span>CHLOE CHOI</span>
          <span>PORTFOLIO_VITE</span>
        </h2>
        <div className="footer__info">
          <div className="left">
            <div className="title">
              <a href="#">sign up</a>
            </div>
            <p>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
          </div>
          <div className="right">
            <h3>social</h3>
            <ul>
              <li>
                <a href="https://github.com/chloe-20">github</a>
                <em>깃헙에 들어오시면 모든 소스를 볼 수 있습니다.</em>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">&copy; 2023 CHLOE_CHOI</div>
      </div>
    </footer>
  )
}

export default Footer;