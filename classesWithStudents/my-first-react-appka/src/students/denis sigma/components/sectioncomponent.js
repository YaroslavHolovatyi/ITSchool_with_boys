//todo + потрібно підготувати пропси якими ми отримуватимемо дані для мапу

//  todo + імпортувати card
// import що from звідки
import Card from "./card";

export default function SectionForImages(props) {
  return (
    <div>
      <div className="component-card">
        {props.dbs.map(
          (
            db, // props показує що ми можемо тут отримати масив (масив бо використовується map) з данимидля карточок
          ) => (
            <Card
              imageSrc={db.imageSrc}
              title={db.title}
              textAbout={db.textAbout}
              wikipediaPageSrc={db.wikipediaPageSrc}
            />
          ),
        )}
      </div>
    </div>
  );
}
