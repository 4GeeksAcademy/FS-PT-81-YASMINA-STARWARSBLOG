import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { CardPlanets } from "../component/cardPlanets.jsx";




export const CarruselPlanets = () => {
    const { store } = useContext(Context);
    console.log("planetas en el carrousel:", store.planets);

    if (!store.planets || store.planets.length === 0) {
        return <p>No hay personajes para mostrar.</p>;
    }

    const groups = [];
    for (let i = 0; i < store.planets.length; i += 4) {
        groups.push(store.planets.slice(i, i + 4));
        console.log("Grupos generados en el carrousel:", groups)
    }



    return (
        <div id="carouselExampleControlsNoTouchingPlanets" className="carousel slide" data-bs-touch="false">
            <div className="carousel-inner">
                {groups.map((group, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} >
                        <div className="d-flex justify-content-center">
                            {group.map((planets) => (
                                <CardPlanets key={planets.uid} planets={planets} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouchingPlanets"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouchingPlanets"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};