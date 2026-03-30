import react from "react";
export default function MainShow() {
  return (
    <>
      <main>
        <ImageComponent />
      </main>
    </>
  );
}

function ImageComponent() {
  return (
    <div className="nazarharoshiy">
      <img src="czar.jpg" alt="Image" />
    </div>
  );
}
