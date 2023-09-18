import React from "react";

import Navbar from "./Navbar.jsx"
import Card from "./Card.jsx"
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<div className= "container"></div>

			<div className="row">
			<Jumbotron/>
			</div>
			
			<div className="container text-center">
				<div className="row">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			</div>

		<Footer/>
		</>
	); };

export default Home;
