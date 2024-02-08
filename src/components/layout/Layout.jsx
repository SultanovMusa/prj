import Card from "../pages/card/Card";
import HomePages from "../pages/home/HomePages";
import Login from "../pages/login/Login";
import Registraton from "../pages/registration/Registraton";
import Welcome from "../pages/welcome/Welcome";
import Footer from "./footer/Footer";
import Header from "./header/Header";
// import scss from "./Layout.module.scss";
import { Route, Routes } from "react-router";

const Layout = () => {
	return (
		<div className="container">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="/login" element={<Login />} />
					<Route path="/home" element={<HomePages />} />
					<Route path="/registration" element={<Registraton />} />
					<Route path="*" element={<Card />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
