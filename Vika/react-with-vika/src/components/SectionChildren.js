export default function SectionChildren(props) {
	return (
		<>
			<h1>Hello From Section Children Component</h1>
			<p>This is a child component of Section component.</p>
			<div>{props.children}</div>
			<p>Above there are content from props.children </p>
		</>
	);
}
