"use client"

import Image from "next/image";
// import styles from "./page.module.css";
import Header from "../components/header";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [data, setData] = useState(undefined);
    const apiurl = process.env.apiurl
    const testValue = localStorage.getItem('testKey');
    console.log('Test value from localStorage:', testValue);

    // if (testValue == "") {
    //     // return window.location.href('./')

    // }
    if (testValue == "null") {
        return window.location.href = './'; // Redirect to the root URL
    }

    useEffect(() => {
        async function fetchData() {
            try {

                const res = await axios.get(`http://localhost:3000/admin/useralljobs/${testValue}`, { cache: 'no-store' });
                console.log(res)
                const jsonData = await res.data.data
                // const jsonData = await res.json();
                setData(jsonData);
                console.log("jsonData", jsonData)
            } catch (error) {
                console.error(error);
                // Handle error, for example set state indicating error occurred
            }
        }

        fetchData();
    }, []);
    if (data == undefined) {
        return <div>Loading...</div>
    }

    console.log("jsonData1", data)

    return (
        <>
            <Header usertype={testValue} />
            <div className="card mb-0">
                <div className="card-header">
                    <h3 className="card-title">Jobs List</h3>
                </div>
                <div className="card-body">
                    <div className="table-responsive border-top">
                        <table className="table table-bordered table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th>Job ID</th>
                                    <th>Product</th>
                                    <th>Category</th>
                                    <th>Total Quantity</th>
                                    <th>complete Quantity</th>
                                    <th>user id</th>

                                    <th>Priority</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((jobs, index) => (
                                    JSON.parse(jobs.history).map((job, jobIndex) => (
                                        <tr key={`${jobs.id}-${jobIndex}`}>
                                            <td className="text-primary">{jobs.id}</td>
                                            <td className="text-primary">{JSON.parse(jobs.product).name}</td>

                                            <td>{jobs.usertype}</td>
                                            <td>{jobs.quantity}</td>
                                            <td className="font-weight-semibold fs-16">{job.complete}</td>
                                            <td className="font-weight-semibold fs-16">{job.userid}</td>
                                            <td>{jobs.priority}</td>
                                            <td>{job.date}</td>
                                            <td>
                                                {jobs.status === 0 && (
                                                    <a href="##" className="badge bg-success">
                                                        complete
                                                    </a>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <ul className="pagination">
                        <li className="page-item page-prev disabled">
                            <a className="page-link" href="##" tabIndex={-1}>
                                Prev
                            </a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link" href="##">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="##">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="##">
                                3
                            </a>
                        </li>
                        <li className="page-item page-next">
                            <a className="page-link" href="##">
                                Next
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </>

    )
}