import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CarruselPeople } from "../component/carruselPeople.jsx";
import { CarruselPlanets } from "../component/carruselPLanets.jsx";
import { CarruselVehicles } from "../component/carruselVehicles.jsx";




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


	useEffect(() => {
		actions.getVehicles();
	}, [actions]);
	console.log("vehiculos en el store:", store.vehicles);




	return (

		<div className="container-fluid  vistahome">
			<section>
				<h1 className="h1home">Characters</h1>
				<div className="row">
					{store.people && store.people.length > 0 ? (
						<CarruselPeople />


					) : (
						<div className="d-flex align-items-center">
							<strong role="status">Loading...Characters</strong>
							<div className="spinner-border ms-auto" aria-hidden="true"></div>
						</div>
					)}
				</div>
			</section>
			<section>
				<h1 className="h1home">Planets</h1>
				<div className="row">
					{
						store.planets && store.planets.length > 0 ? (
							<CarruselPlanets />

						) : (
							<div className="d-flex align-items-center">
								<strong role="status">Loading...Planets</strong>
								<div className="spinner-border ms-auto" aria-hidden="true"></div>
							</div>

						)}
				</div>
			</section>
			<section>
				<h1 className="h1home">Vehicles</h1>
				<div className="row">
					{
						store.vehicles && store.vehicles.length > 0 ? (
							<CarruselVehicles />

						) : (
							<div className="d-flex align-items-center">
								<strong role="status">Loading...Vehicles</strong>
								<div className="spinner-border ms-auto" aria-hidden="true"></div>
							</div>

						)}
				</div>
			</section>
		</div>
	);
};