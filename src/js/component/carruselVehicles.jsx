import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { CardVehicles} from "../component/cardVehicles.jsx";



export const CarruselVehicles = () => {
    const { store } = useContext(Context);
    console.log("vehiculos en el carrousel:", store.vehicles);

    if (!store.vehicles || store.vehicles.length === 0) {
        return <p>No hay vehiculos para mostrar.</p>;
    }

    const groups = [];
    for (let i = 0; i < store.vehicles.length; i += 5) {
        groups.push(store.vehicles.slice(i, i + 5));
        console.log("Grupos generados en el carrousel:", groups)
    }



    return (
        <div id="carouselExampleControlsNoTouchingVehicles" className="carousel slide" data-bs-touch="false">
            <div className="carousel-inner">
                {groups.map((group, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} >
                        <div className="d-flex justify-content-center">
                            {group.map((vehicles) => (
                                <CardVehicles key={vehicles.uid} vehicles={vehicles} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouchingVehicles"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" 
                type="button"
                data-bs-target="#carouselExampleControlsNoTouchingVehicles"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};
