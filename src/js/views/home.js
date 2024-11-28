import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardPeople } from "../component/cardPeople.jsx";
import { CardPlanets } from "../component/cardPlanets.jsx";




export const Home = () => {

	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getPeople();
	}, [actions]);
	console.log("personajes en el store:", store.people);


	useEffect(() => {
		actions.getPlanets();
	}, [actions]);
	console.log("planetas en el store:", store.planets);


	return (

		<div className="container-fluid  vistahome">
			<section>
				<h1>Characters</h1>
				<div className="row">
					{
						store.people.length > 0 ? (
							store.people.map((character) => (
								<CardPeople
									key={character.uid}
									character={character}
								/>
							))
						) : (
							<p>loading characters....</p>
						)}
				</div>
			</section>
			<section>
				<h2>Planets</h2>
				<div className="row">
					{
						store.planets && store.planets.length > 0 ?(
                        store.planets.map((planet) => ( 
						<CardPlanets 
						key={planet.uid} 
						planets={planet} 
						/>
						))
					) : ( 
						<p>loading planets....</p>
					)}
				</div>
			</section>
		</div>
	);
};