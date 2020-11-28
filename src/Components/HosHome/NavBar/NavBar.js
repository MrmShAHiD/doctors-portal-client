import './NavBar.css';
import logo from '../../../Images/logo/logo.jpg';

function NavBar() {
    return (
        <div class="navBar">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand text-white" href="/"> <img style={{width:'100px'}} class="logo img-fluid" src={logo} alt=""/><i><b> BRB Hospital Ltd.</b></i></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item ">
                            <a class="nav-link text-white" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">About Us</a>
                        </li>
                        <li class="nav-item dropdown megamenu">
                            <a class="nav-link dropdown-toggle text-white" data-toggle="dropdown" href="#">Departments</a>
                            <div class="dropdown-menu">
                                <div class="p-4">
                                    <h4>Our Departments</h4>
                                    <ul class="list-unstyled">
                                        <li>Critical Care Medicine</li>
                                        <li>Sonology</li>
                                        <li>Hepatobiliary & Pancreatic Surgery</li>
                                        <li>Breast Unit</li>
                                        <li>Surgical Oncology</li>
                                        <li>Vascular Surgery</li>
                                        <li>Chest Medicine</li>
                                        <li>Ophthamology</li>
                                        <li>Dental & Maxillofacial Surgery</li>
                                        <li>Cardiac Surgery</li>
                                        <li>Interventional Cardiology</li>
                                        <li>Dietetics & Nutrition</li>
                                    </ul>
                                </div>
                                <div class="col-xl p-4">
                                    <img class="img-fluid" src="images/Photos/Illustration.png" alt=""/>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link course text-white" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link button btn-secondary rounded-pill mr-2 text-white" href="#">Get Appointment</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link button btn-success rounded-pill text-white" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;