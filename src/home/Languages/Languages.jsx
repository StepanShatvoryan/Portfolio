import "./Languages.css";
import foto from "../../images/unnamed.png";
import foto2 from "../../images/download.jpg";
import foto3 from "../../images/javascript-logo.png";
import foto4 from "../../images/images.jpg";
import foto5 from "../../images/nodejs-overview.png";
import foto6 from "../../images/Kak-dobavit-Git-Remote.png";
import foto7 from "../../images/figma-img.jpg";

function Languages() {
  return (
    <div id="languages" className="languages">
      <div className="languages-container">
        <div className="languages-text">
          <h2 data-text="Tech Stack" className="tech-stack">
            𝓣𝓮𝓬𝓱 𝓢𝓽𝓪𝓬𝓴
          </h2>
          <h4
            data-text="Languages, Frameworks and Libraries"
            className="tech-stack"
          >
            𝓛𝓪𝓷𝓰𝓾𝓪𝓰𝓮𝓼, 𝓕𝓻𝓪𝓶𝓮𝔀𝓸𝓻𝓴𝓼 𝓪𝓷𝓭 𝓛𝓲𝓫𝓻𝓪𝓻𝓲𝓮𝓼
          </h4>
        </div>

        <div className="languages-cards">
          <div className="languages-cards-ht2p">
            <div className="pill">
              <div className="languages-cards-html pill__main">
                <img className="imges" src={foto} />
              </div>
              <div className="pill__shadow"></div>
            </div>

            <div className="pill">
              <div className="languages-cards-css pill__main">
                <img className="imges" src={foto2} />
              </div>
              <div className="pill__shadow"></div>
            </div>

            <div className="pill">
              <div className="languages-cards-js pill__main">
                <img className="imges" src={foto3} />
              </div>
              <div className="pill__shadow"></div>
            </div>

            <div className="pill">
              <div className="languages-cards-react pill__main">
                <img className="imges" src={foto4} />
              </div>
              <div className="pill__shadow"></div>
            </div>

          </div>

          <h2 className="text-too">𝒯𝑜𝑜𝓁𝓈</h2>

          <div className="languages-cards-fg">
            <div className="pill">
              <div className="languages-cards-git pill__main">
                <img src={foto6} />
              </div>
              <div className="pill__shadow"></div>
            </div>
            <div className="pill shoftes">
              <div className="languages-cards-fig pill__main">
                <img src={foto7} />
              </div>
              <div className="pill__shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Languages;
