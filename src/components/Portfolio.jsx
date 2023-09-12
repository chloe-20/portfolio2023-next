import React from "react";
import Image from "next/image";
import { portText } from "@/constants";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portfolio__inner">
        <div className="portfolio__title">PORTFOLIO <em>포트폴리오 작업물(수정예정)</em></div>
        <div className="portfolio__wrap">
          {portText.map((port, key) => (
            <article className={`portfolio__item p${key+1}`} key={key}>
              <span className="num">{port.num}.</span>
              <a href={port.code} target="_blank" className="img">
                <Image src={port.img} alt={port.name} width={420} height={262} />
              </a>
              <h3 className="title">{port.title}</h3>
              <p className="desc">{port.desc}</p>
              <a href={port.view} target="_blank" className="site">사이트 보기</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio;