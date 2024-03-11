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

    useEffect(() => {
        async function fetchData() {
            try {

                const res = await axios.get(`http://localhost:3000/admin/completejob/${testValue}`, { cache: 'no-store' });
                console.log(res)
                const jsonData = await res.data
                // const jsonData = await res.json();
                setData(jsonData.data);
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
            <Header />
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
                                    <th>Category</th>
                                    <th>Quantity</th>
                                    <th>pending Quantity</th>
                                    <th>Priority</th>

                                    {/* <th>Status</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((jobs, index) => (
                                    <tr key={jobs.data1.id}>
                                        <td className="text-primary">{jobs.data1.id}</td>
                                        <td>{jobs.data1.usertype}</td>
                                        <td>{jobs.data1.quantity}</td>
                                        <td className="font-weight-semibold fs-16">{jobs.data1.complete}</td>
                                        <td>{jobs.data1.priority}</td>

                                        {/* <td>
                                            {jobs.data1.status === 0 && (
                                                <a href="##" className="badge bg-success">
                                                    complete
                                                </a>
                                            )}
                                        </td> */}
                                    </tr>
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