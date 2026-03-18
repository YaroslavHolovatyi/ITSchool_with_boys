import "./FuturamaCard.css";

export default function FuturamaCard(props) {
	return (
		<div className="cartoon-card">
			<img
				src={props.src}
				alt={`Season ${props.seasonNumber} Episode ${props.episodeNumber}`}
			/>
			<p>
				{props.awsdasdasdasd}
				{props.episodeNumber ? (
					<span>Episode {props.episodeNumber}</span>
				) : null}
			</p>
		</div>
	);
}
