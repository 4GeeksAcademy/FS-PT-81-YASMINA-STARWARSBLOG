import React, { useContext } from "react";
import { Link, } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaRegHeart } from "react-icons/fa";




export const CardVehicles = ({ vehicles }) => {
    const { actions } = useContext(Context);


    return (
        <div className="col-sm-2 col-md-2 col-lg-2 mb-3 d-flex">
            <div className="card">
                <figure className="mb-0">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
                        alt={vehicles.name}
                        className="card-img-top" />
                    <figcaption className="text-warning bg-dark" >{vehicles.name}</figcaption>
                </figure>
                <div className="bg-black">
                    <Link to={`/details/vehicle/${vehicles.uid}`} className="btn btn-primary learn  ">
                        Learn More
                    </Link>
                    <button className="btn btn-outline-secondary heart "
                        onClick={() => actions.addFavorite({ uid: vehicles.uid, name: vehicles.name })}
                    >
                        <FaRegHeart />
                    </button>
                </div>
            </div>
        </div>
    );
};