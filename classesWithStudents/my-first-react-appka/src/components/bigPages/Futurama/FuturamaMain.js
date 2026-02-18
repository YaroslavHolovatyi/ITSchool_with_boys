import Info from "./Info";
import FuturamaCard from "./FuturamaCard";
import futurama from "../../../data/futurama";
import "./FuturamaMain.css";

export default function FuturamaMain() {
	return (
		<div>
			<Info />
			<div className="futurama-cards">
				{futurama.map((season) => (
					<FuturamaCard
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

function plus(a, b) {
	return a + b;
}

plus(2, 3);

function stupidPlus() {
	return 2 + 3;
}

stupidPlus();
