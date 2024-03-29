import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Proutes = ({ children }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const userCredentials = localStorage.getItem("isAuth");
	const isLocalBoolean = !!userCredentials;
	console.log(isLocalBoolean);
	useEffect(() => {
		if (isLocalBoolean && (pathname === "/login" || pathname === "/registr")) {
			navigate("/home");
		} else if (!isLocalBoolean && pathname === "/home") {
			navigate("/login");
		}
	}, [pathname, isLocalBoolean, navigate]);

	return children;
};

export default Proutes;

