import Info1 from "./Info1";
import InvincibleCard from "./InvincibleCard";
import invincible from "../../../data/invincible";
import "./InvincibleMain.css";


export default function InvincibleMain() {
	return (
		<div>
			<Info1 />
			<div className="invincible-cards">
				{invincible.map((season) => (
					<InvincibleCard
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