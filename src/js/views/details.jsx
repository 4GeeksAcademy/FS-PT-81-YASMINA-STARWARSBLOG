import React from "react";
import { useParams } from "react-router-dom";
import { DetailsPeople } from "../component/detailsPeople.jsx";
import { PlanetsDetails } from "../component/planetDetails.jsx"
import { VehicleDetails } from "../component/vehicleDetails.jsx";



export const Details = () => {

    const { uid, type } = useParams();

    console.log("UID obtenido desde useParams:", uid);

    return (
        <>
            <div className="details">
                {type == "people" &&
                    <DetailsPeople uid={uid} />
                }
                {type == "planet" &&
                    <PlanetsDetails uid={uid} />
                }
                {type == "vehicle" &&
                    <VehicleDetails uid={uid} />
                }

            </div>
        </>

    );
};