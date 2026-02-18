import Info from "./Info";
import FuturamaCard from "./FuturamaCard";
import Mlp from "../../../data/mlp";
import "./mlp-main.css";

export default function MlpMain() {
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