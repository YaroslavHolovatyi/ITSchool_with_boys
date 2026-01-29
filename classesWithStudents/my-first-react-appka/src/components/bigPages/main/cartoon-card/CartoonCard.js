export default function CartoonCard({
	src,
	cartoonName,
	seasonNumber,
	episodeNumber,
}) {
	return (
		<div className="cartoon-card">
			<div className="cartoon-card__banner">
				<img src={src} />
			</div>
			<div className="cartoon-card__seinfo">
				<h5>
					SEASON {seasonNumber} EPISODE {episodeNumber}
				</h5>
			</div>
			<div className="cartoon-card__cartoon-name">
				<h2>{cartoonName}</h2>
			</div>
		</div>
	);
}
