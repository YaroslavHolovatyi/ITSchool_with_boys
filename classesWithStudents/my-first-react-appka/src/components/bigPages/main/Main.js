import "./Main.css";
import PageSection from "./page-sections/PageSection";
import lastEpisodes from "../../../data/last-episodes";
import CartoonCard from "./cartoon-card/CartoonCard";

function Main() {
	return (
		<>
			<PageSection sectionTitle="Останні ОНОВЛЕННЯ">
				<div className="last-episodes-container">
					{lastEpisodes.map((episode, index) => (
						<CartoonCard
							key={index}
							src={episode.src}
							seasonNumber={episode.seasonNumber}
							episodeNumber={episode.episodeNumber}
							cartoonName={episode.cartoonName}
						/>
					))}
				</div>
			</PageSection>
			<PageSection sectionTitle="Актуально ЗАРАЗ"></PageSection>
			<PageSection sectionTitle="Мультсеріали УКРАЇНСЬКОЮ"></PageSection>
			<PageSection sectionTitle="Наш БЛОГ"></PageSection>
		</>
	);
}

export default Main;
