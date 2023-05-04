

import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../Image/logo.png"




function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const [openMenu1, setOpenMenu1] = useState(false);
    const [toggelbar, setToggelbar] = useState(false);

    const clickCompany = () => {
        setOpenMenu(!openMenu);
    };
    const clickCompany1 = () => {
        setOpenMenu1(!openMenu1);
    };
    const Toggelmenu = () => {
        setToggelbar(!toggelbar);
    };


    return (
        <>

            <header className="nav-bg-b main-header navfix fixed-top menu-white">
                <div className="container-fluid m-pad">
                    <div className="menu-header">
                        <div className="dsk-logo">
                            <Link to="/">
                                <img src={logo} alt="Logo" className="mega-white-logo" style={{ width: "200px" }} />
                            </Link>
                            <Link to="/">
                                <img src={logo} alt="Logo" className="mega-darks-logo" style={{ width: "200px" }} />
                            </Link>
                        </div>
                        <div className="custom-nav" role="navigation">
                            <ul className="nav-list">
                                <li className="sbmenu">
                                    <Link to="/" className="menu-links" style={{ color: "black" }}>Home</Link>

                                </li>

                                <li className="sbmenu rpdropdown">
                                    <a href="#" className="menu-links" style={{ color: "black" }}>Company</a>
                                    <div className="nx-dropdown menu-dorpdown">
                                        <div className="sub-menu-section">
                                            <div className="sub-menu-center-block">
                                                <div className="sub-menu-column smfull">
                                                    <ul>
                                                        <Link to="/aboutus">
                                                            <li><a >About Us</a> </li>
                                                        </Link>
                                                        <Link to="/whyus">
                                                            <li><a >Why Us</a> </li>
                                                        </Link>
                                                        <Link to="/mission">
                                                            <li><a >Mission & Vision</a> </li>
                                                        </Link>
                                                        <Link to="/ourteam">
                                                            <li><a >Our Team</a> </li>
                                                        </Link>


                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="sbmenu rpdropdown">
                                    <a href="#" className="menu-links" style={{ color: "black" }}>Service</a>
                                    <div className="nx-dropdown menu-dorpdown">
                                        <div className="sub-menu-section">
                                            <div className="sub-menu-center-block">
                                                <div className="sub-menu-column smfull">
                                                    <ul>
                                                        <Link to="/webapplication">
                                                            <li><a >Web Application</a> </li>
                                                        </Link>
                                                        <Link to="/mobileapplication">
                                                            <li><a >Mobile Application</a> </li>
                                                        </Link>
                                                        <Link to="/digitalmarketing">
                                                            <li><a >Digital Marketing</a> </li>
                                                        </Link>
                                                        <Link to="/itsecurity">
                                                            <li><a >IT Security</a> </li>
                                                        </Link>



                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="sbmenu rpdropdown">
                                    <Link to="/career" className="menu-links" style={{ color: "black" }}>Careers</Link>

                                </li>
                                <li className="sbmenu rpdropdown">
                                    <Link to="/blog" className="menu-links" style={{ color: "black" }}>Blog</Link>

                                </li>
                                <li className="sbmenu rpdropdown">
                                    <Link to="/contactus" className="menu-links" style={{ color: "black" }}>Contact Us</Link>

                                </li>

                            </ul>

                            <ul className="nav-list right-end-btn">
                                <li className="hidemobile"><a className="btn-round- btn-br bg-btn2"><i className="fas fa-phone-alt"></i></a></li>
                                <li className="hidemobile"   ><Link to="/contactus" className="btn-br bg-btn3 btshad-b2 lnk" >Request A Quote <span className="circle"></span></Link> </li>
                                <li className="navm- hidedesktop" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" onClick={Toggelmenu}> {toggelbar === true ? <i class="fa fa-times" aria-hidden="true" style={{ fontSize: "35px" }} /> : <i className="fa fa-bars " aria-hidden="true" style={{ fontSize: "35px" }} />}</li>
                            </ul>
                        </div>
                    </div>



                </div>
            </header>
            <div >


                <div style={{ width: "320px" }} class="offcanvas offcanvas-start bg-white d-lg-none " data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body mt-4">
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action active bg-dark" aria-current="true">
                                Home
                            </a>
                            <div className='d-flex' onClick={clickCompany}>
                                <a href="#" class="list-group-item list-group-item-action">Company   {openMenu === true ? <i className='fa fa-angle-up float-left' /> : <i className='fa fa-angle-down float-left' />}</a>

                            </div>
                            {openMenu &&
                                <div>
                                    <Link to="/aboutus"><a class="list-group-item list-group-item-action bg-secondary text-">About</a></Link>
                                    <Link to="/whyus"><a class="list-group-item list-group-item-action bg-secondary text-">Why Us</a></Link>
                                    <Link to="/mission"><a class="list-group-item list-group-item-action bg-secondary text-">Mission & Vission</a></Link>
                                    <Link to="/ourteam"><a class="list-group-item list-group-item-action bg-secondary text-">Our Team</a></Link>
                                </div>
                            }


                            <div className='d-flex' onClick={clickCompany1}>
                                <a href="#" class="list-group-item list-group-item-action">Service  {openMenu1 === true ? <i className='fa fa-angle-up float-left' /> : <i className='fa fa-angle-down float-left' />}</a>
                            </div>
                            {openMenu1 &&
                                <div>
                                    <Link to="/webapplication"><a class="list-group-item list-group-item-action bg-secondary text-light">Web Application</a></Link>
                                    <Link to="/mobileapplication"><a class="list-group-item list-group-item-action bg-secondary text-light">Mobile Application</a></Link>
                                    <Link to="/digitalmarketing"><a class="list-group-item list-group-item-action bg-secondary text-light">Digital Marketing</a></Link>
                                    <Link to="/itsecurity"><a class="list-group-item list-group-item-action bg-secondary text-light">IT Security</a></Link>
                                </div>
                            }



                            <Link to="/career"><a class="list-group-item list-group-item-action">Careers</a></Link>
                            <Link to="/blog"><a class="list-group-item list-group-item-action">Blogs</a></Link>
                            <Link to="/contactus"><a class="list-group-item list-group-item-action">Contact Us</a></Link>
                            <Link to="/contactus"><a class="list-group-item list-group-item-action">Request A Quote</a></Link>

                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Header