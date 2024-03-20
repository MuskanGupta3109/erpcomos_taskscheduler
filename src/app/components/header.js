import Image from "next/image";
// import styles from "./page.module.css";

export default function Header({ usertype }) {


    console.log({ usertype })

    const handleSubmit = async (e) => {

        try {

            var usertype = null;
            var id = null
            localStorage.setItem('testKey', usertype);
            localStorage.setItem('userid', id);
            window.location.href = ("/")

        }
        catch (err) {

            console.log("err", err)
        }

    }

    return (

        <>
            {/* <div id="global-loader">
                <img src="images/loader.svg" className="loader-img" alt="" />
            </div> */}
            <div className="header-main">

                <div className="top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                                <div className="top-bar-right d-flex">
                                    <h1>welcome {usertype}</h1>
                                    <div className="clearfix">



                                        <ul className="socials pt-3">

                                            <li>
                                                <a className="social-icon" href="##">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="social-icon" href="##">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="social-icon" href="##">
                                                    <i className="fa fa-linkedin" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="social-icon" href="##">
                                                    <i className="fa fa-google-plus" />
                                                </a>
                                            </li>
                                            {/* <ul className="contact border-start pt-3"> */}
                                            <li className="">
                                                <button className="btn btn-danger" onClick={handleSubmit}>
                                                    <span className="text-info">
                                                        <i className="fa fa-power-off me-1" />
                                                    </span>
                                                </button>
                                            </li>



                                            {/* </ul> */}
                                        </ul>
                                    </div>



                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/*Top Bar*/}
                {/* Mobile Header */}
                <div className="sticky">
                    <div className="horizontal-header clearfix ">
                        <div className="container">
                            <a id="horizontal-navtoggle" className="animated-arrow">
                                <span />
                            </a>
                            <span className="smllogo">
                                <img
                                    src="images/cosmos.png"
                                    className="header-brand-img desktop-logo"
                                    alt="logo"
                                />
                                <img
                                    src="images/cosmos.png"
                                    className="header-brand-img dark-logo"
                                    alt="Jobslist logo"
                                />
                            </span>
                            <a href="##" className="callusbtn">
                                <i className="fa fa-bell text-body" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* /Mobile Header */}
                {/*Horizontal-main*/}
                <div className="horizontal-main clearfix">
                    <div className="horizontal-mainwrapper container clearfix">
                        <a className="desktoplogo" href="#">
                            <img
                                src="images/cosmos.png"
                                className="header-brand-img desktop-logo"
                                alt="logo"
                            />
                            <img
                                src="images/cosmos.png"
                                className="header-brand-img dark-logo"
                                alt="Jobslist logo"
                            />
                        </a>
                        {/*Nav*/}
                        <nav className="horizontalMenu clearfix d-md-flex">

                            <ul className="horizontalMenu-list">

                                <li>
                                    <a href="/">
                                        Home <span className="horizontal-arrow" />
                                    </a>

                                </li>
                                <li>
                                    <a href="about.html">About Us </a>
                                </li>
                                <li>
                                    <a href="../usertypehistory">{usertype}History</a>
                                </li>
                                <li>
                                    <a href="../pendingjobs">Pending {usertype}</a>
                                </li>
                                <li>
                                    <a href="../completejobs">Completed {usertype}</a>
                                </li>
                                <li>
                                    <a href="../usertypealljobs">ALL {usertype}</a>
                                </li>
                                <li>
                                    <a href="##">
                                        {" "}
                                        Contact Us <span className="horizontal-arrow" />
                                    </a>
                                </li>
                                {/* <li className="d-lg-none mt-5 pb-2 mt-lg-0">
                                    <span>
                                        <a
                                            className="btn btn-secondary ad-post mt-1"
                                            href="ad-posts.html"
                                        >
                                            <i className="fa fa-briefcase" /> Submit a Job
                                        </a>
                                    </span>
                                </li>
                                <li className="d-lg-none mt-0 pb-5 mt-lg-0">
                                    <span>
                                        <a
                                            className="btn btn-info ad-post mt-1"
                                            href="create-resume.html"
                                        >
                                            <i className="fa fa-edit" /> Create Resume
                                        </a>
                                    </span>
                                </li> */}
                            </ul>
                            {/* <ul className="mb-0 pe-2">
                                <li className="d-none d-lg-flex">
                                    <span>
                                        <a
                                            className="btn btn-secondary ad-post mt-1"
                                            href="ad-posts.html"
                                        >
                                            <i className="fa fa-briefcase" /> Submit a Job
                                        </a>
                                    </span>
                                </li>
                            </ul>
                            <ul className="mb-0 ps-2 create-resume-btn">
                                <li className="d-none d-lg-flex">
                                    <span>
                                        <a
                                            className="btn btn-info ad-post mt-1"
                                            href="create-resume.html"
                                        >
                                            <i className="fa fa-edit" /> Create Resume
                                        </a>
                                    </span>
                                </li>
                            </ul> */}
                        </nav>
                        {/*/Nav*/}
                    </div>
                </div>
                {/*/Horizontal-main*/}
            </div>

        </>


    )
}
