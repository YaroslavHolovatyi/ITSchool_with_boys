export default function Jija(prosp) {
	return (
		<div>
			<h1>Це сторінка Жижі</h1>
			{prosp.name && <h2>Привіт, {prosp.name}!</h2>}
			<p>Тут буде інформація про Жижу</p>
		</div>
	);
}
