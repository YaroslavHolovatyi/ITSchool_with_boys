import MlpInfo from "./MlpInfo";
import MlpCard from "./MlpCard";
import Mlp from "../../../data/mlp";
import "./MlpMain.css";

export default function MlpMain() {
	return (
		<div>
			<MlpInfo />
			<div className="mlp-cards">
				{Mlp.map((season) => (
					<MlpCard
						key={season.seasonNumber}
						awsdasdasdasd={season.seasonNumber}
						episodeNumber={season.episodeNumber}
						src={season.src}
					/>
				))}
			</div>
		</div>
	);
}