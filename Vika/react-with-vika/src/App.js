import "./App.css";
import BadSection from "./components/BadSection";
import HelloUser from "./components/HelloUser";
import HelloUser2 from "./components/HelloUser2";
import Section from "./components/Section";

function App() {
	return (
		<>
			{/* <HelloUser2 userName="Olga" creatorName="Creator Olga" age={25} />
			<HelloUser2 userName="Vika" creatorName="Creator Vika" age={11} />
			<HelloUser
				userName="Yaroslav"
				creatorName="Creator Yaroslav"
				age={28}
			/>
			<HelloUser userName="Oleh" creatorName="Creator Oleh" age={35} />
			<HelloUser
				userName="Simpson"
				creatorName="Creator Simpson"
				age={40}
			/>
			<HelloUser2
				userName="EVERYONE"
				creatorName="Creator EVERYONE"
				age={50}
			/> */}

			<Section>
				<p>This is the content inside the Section component.</p>
				<HelloUser
					userName="Simpson"
					creatorName="Creator Simpson"
					age={40}
				/>
				<HelloUser2
					userName="EVERYONE"
					creatorName="Creator EVERYONE"
					age={50}
				/>
			</Section>
			<BadSection>
				<p>This is the content inside the Section component.</p>
			</BadSection>
		</>
	);
}

export default App;
