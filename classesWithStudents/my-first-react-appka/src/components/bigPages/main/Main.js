import "./Main.css";
import PageSection from "./page-sections/PageSection";
import lastEpisodes from "../../../data/last-episodes";
import FuturamaMain from "../Futurama/FuturamaMain";
import CartoonCard from "./cartoon-card/CartoonCard";
import InvincibleMain from "../Invincible/InvincibleMain";
<<<<<<< HEAD
import MlpMain from "../mlp/mlp-main";
import Jija from "../jija";
=======
import MlpMain from "../mlp/MlpMain";
>>>>>>> daac7b5da86e03ac36e6ead993ca7f0a5ca3d14e

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
