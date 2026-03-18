import "./App.css";
import Navbar from "./components/shared/navbar/Navbar";
<<<<<<< HEAD

import MainShow from "./students/denis sigma/js";

function App() {
  return (
    <>
      <Navbar />
      <MainShow />
    </>
  );
=======
import Main from "./components/bigPages/main/Main";
import PageSection from "./components/bigPages/main/page-sections/PageSection";
import lastEpisodes from "./data/last-episodes";
import CartoonCard from "./components/bigPages/main/cartoon-card/CartoonCard";
import FuturamaMain from "./components/bigPages/Futurama/FuturamaMain";
import InvincibleMain from "./components/bigPages/Invincible/InvincibleMain";
import MlpMain from "./components/bigPages/mlp/mlp-main";
import Jija from "./components/bigPages/jija";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HelloWorld from "./students/Nazar/Components/Hello-W";

function App() {
	return (
		<>
			<BrowserRouter>
				<nav>
					<Link to="/">Головна</Link> |{" "}
					<Link to="/futurama">Футурама</Link> |{" "}
					<Link to="/invincible">Непереможний</Link> |{" "}
					<Link to="/mlp">Мій маленький поні</Link> |{" "}
					<Link to="/jija">Денис</Link>
				</nav>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route
						path="/futurama"
						element={
							<PageSection sectionTitle="Останні ОНОВЛЕННЯ">
								<div className="last-episodes-container">
									{lastEpisodes.map((episode, index) => (
										<CartoonCard
											// для Main CartoonCard синочка
											key={index}
											src={episode.src}
											seasonNumber={episode.seasonNumber}
											episodeNumber={
												episode.episodeNumber
											}
											cartoonName={episode.cartoonName}
										/>
									))}
								</div>
							</PageSection>
						}
					/>
					<Route path="/invincible" element={<InvincibleMain />} />
					<Route path="/mlp" element={<MlpMain />} />
					<Route path="/jija" element={<Jija name="Денис" />} />
					<Route path="*" element={<h1>404 Not Found</h1>} />
				</Routes>
			</BrowserRouter>

			<HelloWorld />
			<Navbar />
			<Main />
		</>
	);
>>>>>>> 9e37de40ce525cb079200a9da6c9da0e23187c67 
}

export default App;
