import "./InvincibleCard.css";

export default function InvincibleCard({ seasonNumber, episodeNumber, src }) {
	return (
		<div className="cartoon1-card">
			<img
				src={src}
				alt={`Season ${seasonNumber} Episode ${episodeNumber}`}
			/>
			<p>
				{seasonNumber}
				{episodeNumber ? <span>Episode {episodeNumber}</span> : null}
			</p>
		</div>
	);
}
