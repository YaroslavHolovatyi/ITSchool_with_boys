import "./card.css";

export default function Card(props) {
  return (
    // в нас карточка не дороблена
    //задача - потрібно створити нормальний вигляд карточки, а також зробити так, щоб при кліку на посилання
    //  відкривалась сторінка з вікіпедії
    <div className="animal-card">
      <div className="card-header">
        <img src={props.imageSrc} />
      </div>
      <div className="card-main">
        <div className="card-title">
          <h2>{props.title}</h2>
        </div>
        <div className="card-main-text">
          <p>Про тварину:</p>
          <p>{props.textForCard}</p>
        </div>
      </div>
      <div className="card-footer">
        <a
          href={props.wikipediaPageSrc}
          target="_blank"
          rel="noopener noreferrer"
        >
          Читати більше на Вікіпедії
        </a>
      </div>
    </div>
  );
}

// 1) добавить лінку для вікі
// 2) поділити карточку на 3 частини head main footer
// 3) head - фотка
// 1) добавить лінку для вікі
// 2) поділити карточку на 3 частини head main footer
// 3) head - фотка
// 4) main - назва і текст
// 5) footer - посилання на вікі
// 6) додайте стилі для карточки, щоб вона була більш привабливою
