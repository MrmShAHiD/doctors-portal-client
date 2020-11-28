import BusinessInfo from "../BusinessInfo/BusinessInfo";
import HeaderMain from "../HeaderMain/HeaderMain";
import NavBar from "../NavBar/NavBar";
import './Header.css';

function Header() {
    return (
        <div className="header-container">
            <NavBar/>
            <HeaderMain/>
            <BusinessInfo/>
        </div>
    );
};

export default Header;