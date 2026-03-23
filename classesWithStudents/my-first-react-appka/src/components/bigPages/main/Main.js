import "./Main.css";
import PageSection from "./page-sections/PageSection";
import lastEpisodes from "../../../data/last-episodes";
import FuturamaMain from "../Futurama/FuturamaMain";
import CartoonCard from "./cartoon-card/CartoonCard";
import InvincibleMain from "../Invincible/InvincibleMain";
import MlpMain from "../mlp/mlp-main";
import Jija from "../jija";

function Main() {
  //Для CartoonCard Main це БАТЯ
  return (
    <>
      {/* <main>
				<div className="main-content">
					<FuturamaMain />
					<InvincibleMain/>
				</div>
			</main> */}

      <Jija name="Денис" />
    </>
  );
}

export default Main;
