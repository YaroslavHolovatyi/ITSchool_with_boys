export default function CartoonCard(copss) {
	// porps = properties =властивості, властивості є у об'єкта.
	return (
		<div className="cartoon-card">
			<div className="cartoon-card__banner">
				<img src={copss.src} />
			</div>
			<div className="cartoon-card__seinfo">
				<h5>
					SEASON {copss.seasonNumber} EPISODE {copss.episodeNumber}
				</h5>
			</div>
			<div className="cartoon-card__cartoon-name">
				<h2>{copss.cartoonName}</h2>
			</div>
		</div>
	);
}
