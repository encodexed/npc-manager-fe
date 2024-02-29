// import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
	return (
		<>
			<Header showNavbar={false} />
			<h1 className={styles.heading}>NPC Manager</h1>
			<h3 className={styles.subheading}>
				Your friendly Dungeons & Dragons databasing system
			</h3>
		</>
	);
};

export default LandingPage;
