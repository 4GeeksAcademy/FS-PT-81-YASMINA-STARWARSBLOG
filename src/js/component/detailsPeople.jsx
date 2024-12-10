import React, { useContext, useEffect, } from "react";
import { Context } from "../store/appContext";



export const DetailsPeople = ({ uid }) => {
    const { store, actions } = useContext(Context);
    console.log(`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`);
    const character = store.characterDetails;

    useEffect(() => {

        if (uid && (!character || character.uid !== uid)) {
            console.log("Ejecutando useeffect con uid:", uid);
            actions.getCharacterDetails(uid);
        }
    }, []);

    if (!character || Object.keys(character).length === 0) {
        return <p>Loading details character</p>;
    }



    return (
        <div className="detalles">
            <div className=" d-flex">
                <figure>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                     alt={character.name}
                     className="img d-flex justyfi-" />
                    <figcaption>
                        {character.name}
                    </figcaption>
                </figure>
                <ul className="caracteristicas">
                    <li>birth year:{character?.birth_year}</li>
                    <li>eye color:{character?.eye_color}</li>
                    <li>films:{character?.films}</li>
                    <li>gender:{character?.gender}</li>
                    <li>hair color:{character?.hair_color}</li>
                    <li>height:{character?.height}</li>
                    <li>name:{character?.name}</li>
                    <li>skincolor:{character?.skin_color}</li>
                    
                </ul>
            </div>

        </div>

    );

}