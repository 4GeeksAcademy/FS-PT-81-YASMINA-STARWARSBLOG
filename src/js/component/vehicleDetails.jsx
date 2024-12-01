import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const VehicleDetails = () => {
    const {uid} = useParams();
    const { store, actions } = useContext(Context);
    const vehicle = store.vehicleDetails;


    useEffect(() => {

        if (uid && (!vehicle || vehicle.uid !== uid)) {
            console.log("Ejecutando vehicle con useeffect con uid:", uid);
            actions.getVehicleDetails(uid);
        }
    }, []);

    if (!vehicle || Object.keys(vehicle).length === 0) {
        return <p>Loading details vehicle</p>;
    }


 
   
    return (
        <div className="card detallesvehicle">
            <div className=" card d-flex">
                <figure>
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} 
                      alt ={vehicle.name} 
                     className="card-img-top" />
                    <figcaption>
                        {vehicle.name}
                    </figcaption>
                </figure>
                <ul>
                    <li>cargo_capacity:{vehicle?.cargo_capacity}</li>
                    <li>consumables:{vehicle?.consumables}</li>
                    <li>cost_in_credits:{vehicle?.cost_in_credits}</li>
                    <li>created:{vehicle?.created}</li>
                    <li>crew:{vehicle?.crew}</li>
                    <li>passengers:{vehicle?.passengers}</li>
                    <li>length:{vehicle?.length}</li>
                    <li>manufacturer:{vehicle?.manufacturer}</li>
                    <li>name:{vehicle?.name}</li>
                    <li>model:{vehicle?.model}</li>
                </ul>
            </div>

        </div>

    );

}