import "./MlpCard.css";

export default function MlpCard({ src, seasonNumber, episodeNumber }) {
    return (
        <div className="cartoon-card">
            <img
                src={src}
                alt={`Season ${seasonNumber} Episode ${episodeNumber}`}
            />
            <p>
                {seasonNumber}
                {episodeNumber ? <span> Episode {episodeNumber}</span> : null}
            </p>
        </div>
    );
}
//! Де структур изація