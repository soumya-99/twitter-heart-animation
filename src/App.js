import React, { useState } from "react";
import Heart from "react-animated-heart";
import "./App.css";

function App() {
	const [pressed, setPressed] = useState("");
	return (
		<div className="App">
			<Heart isClick={pressed} onClick={() => setPressed(!pressed)} />
		</div>
	);
}

export default App;
