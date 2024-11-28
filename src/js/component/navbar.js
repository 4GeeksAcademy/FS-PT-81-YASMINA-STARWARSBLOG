import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext"
import { DropdownFav } from "../component/modalFav.jsx";




export const Navbar = () => {
	const { store } = useContext(Context);
		return (
			<nav className="navbar navbar-light starnav">
				<Link to="/">
				<span className="navbar-brand mb-0 h1 starnav">
				<img className="logostar" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="logo star wars" />
				</span>
			    </Link>
				<div className="ml-auto">
					<Link to="/demo">
						<DropdownFav />
					</Link>
				</div>
			</nav>
		);
	};
		