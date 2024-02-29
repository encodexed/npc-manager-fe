import styles from "./Splash.module.scss";
import imageURL from "../../assets/manager-splash.jpg";

const Splash = () => {
	return <img className={styles.splash} src={imageURL} alt='Splash image' />;
};

export default Splash;
