import axios from "axios";
import { useState, useEffect } from "react";
import scss from "./HomePage.module.scss";
import { useNavigate } from "react-router-dom";

const urls =
	"https://api.elchocrud.pro/api/v1/d6d29f8b449c60ac06ea093747320260/mufa";

const HomePage = () => {
	const [data, setData] = useState({});

	const getUserId = localStorage.getItem("isAuth");

	const getRequest = async () => {
		try {
			const res = await axios.get(urls);
			const responseData = await res.data;

			if (getUserId) {
				const findUser = responseData.find((item) => item._id === +getUserId);
				setData(findUser);
			} else {
				console.log("User is not authenticated");
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getRequest();
	}, []);


	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("isAuth");
		setData({});
		navigate("/login");
	};

	return (
		<div>
			<div className={scss.ctr}>
			<span>Welcome 🌠 </span>
			<button className={scss.btn} onClick={handleLogout}>Выйти🔙</button>
			</div>
			<div className={scss.content}>
				<h3 className={scss.h3}>Email: {data.name}</h3>
				<p>Password: {data.pas}</p>

			</div>
		</div>
	);
};

export default HomePage;
