"use client"

import Image from "next/image";
// import styles from "./page.module.css";
import Header from "../components/header";


import { useState } from "react";

export default function Home() {
    const [user_type, setusertype] = useState('');

    const testValue = localStorage.getItem('testKey');
    console.log(testValue)
    // setusertype(testValue)
    console.log(testValue)
    if (testValue == "null") {
        return window.location.href = './'; // Redirect to the root URL
    }


    return (
        <>
            <Header usertype={testValue} />

            <section style={{ padding: "60px 100px" }}>
                <div className="item-all-cat">
                    <div className="row category-type">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="item-all-card text-dark text-center card">
                                <a href="../usertypealljobs" />
                                <div className="iteam-all-icon1">
                                    <img
                                        src="images/svgs/jobs/house-white.svg"
                                        className="imag-service"
                                        alt="Sales"
                                    />
                                </div>
                                <div className="item-all-text mt-3">
                                    <h5 className="mb-0 text-body">All Jobs</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="item-all-card text-dark text-center card">
                                {testValue === "Transfer" && (<a href="../finishedproductjob" />)}
                                {testValue !== "Transfer" && (<a href="../completejobs" />)}



                                <div className="iteam-all-icon1">
                                    <img
                                        src="images/svgs/jobs/calendar-white.svg"
                                        className="imag-service"
                                        alt="Driver"
                                    />
                                </div>
                                <div className="item-all-text mt-3">
                                    <h5 className="mb-0 text-body">Completed Jobs</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="item-all-card text-dark text-center card">
                                <a href="../pendingjobs" />
                                <div className="iteam-all-icon1">
                                    <img
                                        src="images/svgs/jobs/hourglass-white.svg"
                                        className="imag-service"
                                        alt="IT-Hardware"
                                    />
                                </div>
                                <div className="item-all-text mt-3">
                                    <h5 className="mb-0 text-body">Pending Jobs</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="item-all-card text-dark text-center card">
                                <a href="../usertypehistory" />
                                <div className="iteam-all-icon1">
                                    <img
                                        src="images/svgs/jobs/businessman-white.svg"
                                        className="imag-service"
                                        alt="Software"
                                    />
                                </div>
                                <div className="item-all-text mt-3">
                                    <h5 className="mb-0 text-body">Job History</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row category-type">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="item-all-card text-dark text-center card">
                                <a href="../userjobhistory" />
                                <div className="iteam-all-icon1">
                                    <img
                                        src="images/svgs/jobs/businessman-white.svg"
                                        className="imag-service"
                                        alt="Software"
                                    />
                                </div>
                                <div className="item-all-text mt-3">
                                    <h5 className="mb-0 text-body">User Job History</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>

    )
}
