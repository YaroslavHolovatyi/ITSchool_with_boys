import "./FuturamaCard.css";

export default function FuturamaCard({ seasonNumber, episodeNumber, src }) {
	return (
		<div className="cartoon-card">
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
{
	/*  */
}
