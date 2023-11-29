
import "./FotoProfil.css";
import foto from '../images/sss.jpg';

function Profil() {
  return (
    <div className="Profil">
      <div class="box">
        <div class="content">
            <img src={foto} />
        </div>
    </div>
    </div>
  );
}

export default Profil;