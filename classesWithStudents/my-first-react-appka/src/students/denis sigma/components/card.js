export default function Card(props) {
  return (
    <div className="animal-card">
      <img src={props.imageSrc} />
      <p>
        {props.title}
        Про тварину
        {props.textAbout}(<span>{props.wikipediaPageSrc}</span>) // а як я
        посилання відкриватиму?
      </p>
    </div>
  );
}
