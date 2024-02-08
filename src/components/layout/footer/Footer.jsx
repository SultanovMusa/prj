import scss from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
	return (
		<footer className={scss.footer}>
			<div >
				<div className={scss.car}>
					<p>Copyright 💸 2024. All rights are reserved</p>
					<p>Built with 🖤 by Mufa.06.02.2024🗓️</p>

					<Link  className={scss.link} href="https://github.com/SultanovMusa">
						<FaGithubSquare />
					</Link>
					<Link className={scss.link} href="https://www.instagram.com/sultanov_11_/">
						<FaInstagram />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
