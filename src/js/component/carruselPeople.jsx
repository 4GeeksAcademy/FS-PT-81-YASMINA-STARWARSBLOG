import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { CardPeople } from "./cardPeople.jsx";



export const CarruselPeople = () => {
    const { store } = useContext(Context);
    console.log("personajes en el carrousel:", store.people);

    if (!store.people || store.people.length === 0) {
        return <p>No hay personajes para mostrar.</p>;
    }

    const groups = [];
    for (let i = 0; i < store.people.length; i += 5) {
        groups.push(store.people.slice(i, i + 5));
        console.log("Grupos generados en el carrousel:", groups)
    }



    return (
        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
            <div className="carousel-inner">
                {groups.map((group, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} >
                        <div className="d-flex justify-content-center">
                            {group.map((people) => (
                                <CardPeople key={people.uid} character={people} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};


