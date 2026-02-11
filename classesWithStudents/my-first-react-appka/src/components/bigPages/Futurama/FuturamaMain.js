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
						seasonNumber={season.seasonNumber}
						episodeNumber={season.episodeNumber}
						src={season.src}
					/>
				))}
			</div>
		</div>
	);
}
