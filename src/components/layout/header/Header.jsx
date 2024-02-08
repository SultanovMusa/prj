import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import scss from "./Header.module.scss";
const Header = () => {
	const navigate = useNavigate();
	const handl = () => {
		navigate("/login");
	};
	return (
		<header>
			<div className="container">
				<div className={scss.content}>
					<nav className={scss.nav}>
						<ul>
							<Link className={scss.lis} to={"/login"}>
								Login
							</Link>
							<Link className={scss.lis} to={"/home"}>
								Home
							</Link>
							<Link className={scss.lis} to={"/registration"}>
								Registration
							</Link>
							<button onClick={handl}>
								Login
								<div className={scss.arrow_wrapper}>
									<div className={scss.arrow}></div>
								</div>
							</button>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
