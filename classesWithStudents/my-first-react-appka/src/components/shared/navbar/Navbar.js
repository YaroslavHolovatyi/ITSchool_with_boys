import Link from "../../buttons/navbarButtons/Link";
import "./Navbar.css";
import navbarButtons from "../../../data/navbar-buttons";

function Navbar() {
	return (
		<nav className="nav">
			<div className="nav__logo">
				<img src="logo.png" alt="Stolen Logo" className="nav__img" />
			</div>
			<div className="nav__links">
				{navbarButtons.map((button) => (
					<Link href={button.href} cartoonName={button.cartoonName} />
				))}

				{/* ПОГАНЕ ВИКОРИСТАННЯ МОЖЛИВОСТЕЙ РЕАКТУ (Антипаттерн - повторення
				коду) */}

				{/* <Link
					href="https://simpsonsua.tv/simpsony/"
					cartoonName="Сімпсони"
				/>
				<Link
					href="https://simpsonsua.tv/allfuturama/"
					cartoonName="Футурама"
				/>
				<Link
					href="https://simpsonsua.tv/simyanyn/"
					cartoonName="Сім'яни"
				/>
				<Link
					href="https://simpsonsua.tv/pivdennyi-park/"
					cartoonName="Південний Парк"
				/>
				<Link
					href="https://simpsonsua.tv/rik-ta-morti/"
					cartoonName="Рік та Морті"
				/>
				<Link
					href="https://simpsonsua.tv/multserialy-ukrainskoyu/"
					cartoonName="Інші Мульти" 
				/>*/}
			</div>
			<div className="nav__enter">
				<button className="nav__button">Увійти</button>
			</div>
		</nav>
	);
}

export default Navbar;
