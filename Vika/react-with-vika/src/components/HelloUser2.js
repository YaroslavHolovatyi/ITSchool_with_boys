import SectionChildren from "./SectionChildren";

export default function HelloUser2({ userName, creatorName, age }) {
	let obj = { pryvit: "Hello", svit: "World" };
	let { pryvit, svit } = obj;

	return (
		<>
			<h1>Hello, {userName}!</h1>
			<h2>Hello, {creatorName}.</h2>
			<h4>I am {age} years old</h4>
			<p>{pryvit}</p>
			<p>{svit}</p>
			<SectionChildren>
				<p>Here we have content for out Section Children</p>
				<img
					src="image1.jpg"
					alt="Description"
					style={{ width: "100px", height: "100px" }}
				/>
			</SectionChildren>
		</>
	);
}
