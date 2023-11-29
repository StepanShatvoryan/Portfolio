import TextAni from "./TextAnimation";
import "./home.css";

function Home() {
  
  return (
    <div id="home" className="home">
      <div className="home-conteiner">
        <div className="home-text">
          <TextAni />
        </div>
        <div className="home-images-1"></div>
      </div>
    </div>
  );
}

export default Home;
