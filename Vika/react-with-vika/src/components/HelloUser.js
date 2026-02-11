export default function HelloUser(props) {
	let obj = { pryvit: "Hello", svit: "World" };
	let { pryvit, svit } = obj;

	return (
		<>
			<h1>Hello, {props.userName}!</h1>
			<h2>Hello, {props.creatorName}.</h2>
			<h4>I am {props.age} years old</h4>
			<p>{pryvit}</p>
			<p>{svit}</p>
		</>
	);
}
