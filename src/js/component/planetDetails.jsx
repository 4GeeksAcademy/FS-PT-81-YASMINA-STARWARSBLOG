import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const PlanetsDetails = () => {
    const {uid} = useParams();
    const { store, actions } = useContext(Context);
    const planet = store.planetDetails;


    useEffect(() => {

        if (uid && (!planet || planet.uid !== uid)) {
            console.log("Ejecutando planet con useeffect con uid:", uid);
            actions.getPlanetDetails(uid);
        }
    }, []);

    if (!planet || Object.keys(planet).length === 0) {
        return <p>Loading details planet</p>;
    }


    return (
        <div className="card detallesplanetas">
            <div className=" card d-flex">
                <figure>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} 
                      alt ={planet.name} 
                     className="card-img-top" />
                    <figcaption>
                        {planet.name}
                    </figcaption>
                </figure>
                <ul>
                    <li>diameter:{planet?.diameter}</li>
                    <li>rotation_period:{planet?.rotation_period}</li>
                    <li>orbital_period:{planet?.orbital_period}</li>
                    <li>gravity:{planet?.gravity}</li>
                    <li>population:{planet?.population}</li>
                    <li>climate:{planet?.climate}</li>
                    <li>terrain:{planet?.terrain}</li>
                    <li>surface_wate:{planet?.surface_wate}</li>
                    <li>name:{planet?.name}</li>
                </ul>
            </div>

        </div>

    );

}