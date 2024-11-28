
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { FaTrash } from "react-icons/fa6";

export const DropdownFav = () => {
    const { store, actions } = useContext(Context);

    return (

        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites ({store.favorites.length})
            </button>
            <ul className="dropdown-menu">
                {store.favorites.length > 0 ? (
                    store.favorites.map((fav, index) => (
                        <li key={index} className="dropdown-item d-flex justify-content-between">
                            <span>{fav.name}</span>
                            <button className="btn btn-sm btn-danger" onClick={() => actions.deleteFavorite(fav.uid)}>
                                <i><FaTrash /></i>
                            </button>
                        </li>
                    ))
                ) : (
                    <li>no favorites added</li>
                )}

            </ul>
        </div>
    );
};