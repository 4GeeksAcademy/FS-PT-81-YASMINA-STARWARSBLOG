import React from "react";
import { useParams } from "react-router-dom";
import { DetailsPeople } from "../component/detailsPeople.jsx";
import { PlanetsDetails } from "../component/planetDetails.jsx"
import { VehicleDetails } from "../component/vehicleDetails.jsx";



export const Details = () => {

    const { uid } = useParams();

    console.log("UID obtenido desde useParams:", uid);

    return (
        <><div className="details">
            <DetailsPeople uid={uid} />

        </div><div className="details">
                <PlanetsDetails uid={uid} />
            </div>
            <div className="details">
            <VehicleDetails uid={uid} />
        </div></>

    );
};