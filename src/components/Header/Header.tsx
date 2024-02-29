import Navbar from "../Navbar/Navbar";
import Splash from "../Splash/Splash";

const Header = ({ showNavbar }: { showNavbar: boolean }) => {
	return (
		<header>
			{showNavbar && <Navbar />}
			<Splash />
		</header>
	);
};

export default Header;
