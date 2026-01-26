import "./Link.css";

export default function Link(props) {
	return (
		<a href={props.href} className="nav__link">
			{props.cartoonName}
		</a>
	);
}
