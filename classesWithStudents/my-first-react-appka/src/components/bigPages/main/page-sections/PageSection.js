export default function PageSection(props) {
	return (
		<section className="page-section">
			<h2 className="page-section__name">{props.sectionTitle}</h2>
			{props.children}
		</section>
	);
}
