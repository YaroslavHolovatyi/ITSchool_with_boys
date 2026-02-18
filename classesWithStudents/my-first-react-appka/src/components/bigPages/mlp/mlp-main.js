import FuturamaCard from "../Futurama/FuturamaCard";
import Mlp from "../../../data/mlp";
import MlpInfo from "./mlp-info";
import "./mlp-main.css";

export default function MlpMain() {
	return (
		<div>
			<div className="futurama-cards">
				{Mlp.map((season) => (
					<FuturamaCard
						key={season.seasonNumber}
						seasonNumber={season.seasonNumber}
						episodeNumber={season.episodeNumber}
						src={season.src}
					/>
				))}
			</div>
			<MlpInfo />
		</div>
	);
}
