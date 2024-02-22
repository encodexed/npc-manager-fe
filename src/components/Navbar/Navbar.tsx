import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.nav__container}>
				<div className={styles.nav__left}>
					<img className={styles.logo} src='./d20.png' alt='website logo' />
					<h3>
						<Link className={styles.nav__link} to='/'>
							NPC Manager
						</Link>
					</h3>
				</div>
				<ul className={styles.nav__right}>
					<li>
						<Link className={styles.nav__link} to='/'>
							Home
						</Link>
					</li>
					<li>
						<Link className={styles.nav__link} to='/npcs'>
							NPCs
						</Link>
					</li>
					<li>
						<Link className={styles.nav__link} to='/about'>
							About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
