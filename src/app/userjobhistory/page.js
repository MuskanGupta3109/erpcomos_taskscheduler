"use client"
import Image from "next/image";
import Header from "../components/header";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [data, setData] = useState(undefined);
    const [user_type, setUserType] = useState('');

    const testValue = localStorage.getItem('testKey');
    var id = localStorage.getItem('userid');

    console.log('Test value from localStorage:', testValue, id);
    if (testValue == "null") {
        window.location.href = './'; // Redirect to the root URL if testValue is null
        return; // Exit useEffect to prevent further execution
    }
    if (testValue == "Transfer") {
        window.location.href = '../finishedproductjob'; // Redirect to the root URL if testValue is null
        return; // Exit useEffect to prevent further execution
    }


    useEffect(() => {
        // Set user_type with the value from localStorage when component mounts
        setUserType(testValue);



        async function fetchData() {
            try {
                const res = await axios.get(`http://localhost:3000/admin/userdashboard/${id}/${testValue}`, { cache: 'no-store' });
                console.log(res)
                const jsonData = await res.data
                setData(jsonData.data);
                console.log("jsonData", jsonData)
            } catch (error) {
                console.error(error);
                // Handle error, for example set state indicating error occurred
            }
        }

        fetchData();
    }, [testValue, id]);

    if (data === undefined) {
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
                                    <th>Complete Quantity</th>
                                    <th>Date</th>

                                    <th>Priority</th>

                                    {/* <th>Status</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((jobs, index) => (
                                    jobs.complete.map((job, jobIndex) => (
                                        <tr key={`${jobs.data.id}-${jobIndex}`}>
                                            <td>{jobs.data.id}</td>
                                            <td>{JSON.parse(jobs.data.product).name}</td>


                                            <td>{jobs.data.usertype}</td>
                                            <td>{jobs.data.quantity}</td>
                                            <td className="font-weight-semibold fs-16">{job.complete}</td>
                                            <td className="font-weight-semibold fs-16">{job.date}</td>

                                            <td>{jobs.data.priority}</td>
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
