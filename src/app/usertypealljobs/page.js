"use client"

import React, { useState, useEffect } from 'react';

import { notFound } from 'next/navigation';

// import styles from "./page.module.css";
import Header from "../components/header";

import axios from "axios";


const Contact = () => {
    const [data, setData] = useState(undefined);
    const [quantity, setQuantity] = useState('');
    const [id, setJobId] = useState('');


    const apiurl = process.env.apiurl
    var testValue = localStorage.getItem('testKey');
    var userid = localStorage.getItem('userid');

    console.log('Test value from localStorage:', testValue, userid);
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


    const handleSubmit = async (e, jobsid) => {
        e.preventDefault()
        const userData = new FormData()

        userData.append('quantity', quantity)
        userData.append('jobid', jobsid)
        userData.append('userid', userid)
        // userData.append('grmnumber', grmnumber)


        if (testValue == "Die cutting") {
            try {

                console.log(jobsid)
                const res = await axios.post('http://localhost:3000/admin/assign-job-to-m2', userData)

                if (res.data.error === 1) {
                    alert("Invalid Value")
                }
                if (res.data.success === 1) {
                    alert("Successfully Assign to Rewinding")
                    window.location.href = '../usertypealljobs'

                }
                console.log(res)

            }
            catch (err) {
                console.log(err)
            }
        }
        if (testValue == "Rewinding") {
            try {

                console.log(jobsid)
                const res = await axios.post('http://localhost:3000/admin/assign-job-to-m3', userData)

                if (res.data.error === 1) {
                    alert("Invalid Value")
                }
                if (res.data.success === 1) {
                    alert("Successfully Assign to Packing")
                    window.location.href = '../usertypealljobs'

                }
                console.log(res)

            }
            catch (err) {
                console.log(err)
            }
        }
        if (testValue == "Packing") {
            try {

                console.log(jobsid)
                const res = await axios.post('http://localhost:3000/admin/assign-job-to-m4', userData)

                if (res.data.error === 1) {
                    alert("Invalid Value")
                }
                if (res.data.success === 1) {
                    alert("Successfully Assign to Transfer")
                    window.location.href = '../usertypealljobs'
                }
                console.log(res)

            }
            catch (err) {
                console.log(err)
            }
        }
        if (testValue == "Transfer") {
            try {

                console.log(jobsid)
                const res = await axios.post('http://localhost:3000/admin/finish', userData)

                if (res.data.error === 1) {
                    alert("Invalid Value")
                }
                if (res.data.success === 1) {
                    alert("Successfully finsihed!")
                    window.location.href = '../usertypealljobs'

                }
                console.log(res)

            }
            catch (err) {
                console.log(err)
            }
        }


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
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Value</th>
                                    <th>pending Quantity</th>
                                    <th>Priority</th>

                                    <th>Status</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.map((jobs, index) => (

                                    <tr key={jobs.id}>
                                        <td>{jobs.id}</td>
                                        <td className="text-primary">{JSON.parse(jobs.product).name}</td>

                                        <td>{jobs.usertype}</td>

                                        <td>{jobs.quantity}</td>
                                        <td>{jobs.price}</td>
                                        <td>{jobs.value}</td>
                                        <td>{jobs.pending}</td>
                                        <td>{jobs.priority}</td>
                                        <td>
                                            {jobs.status === 0 && (
                                                <a href="##" className="badge bg-success">
                                                    pending
                                                </a>
                                            )}
                                            {jobs.status === 1 && (
                                                <a href="##" className="badge bg-danger">
                                                    complete
                                                </a>
                                            )}
                                        </td>
                                        {/* <td>{contact.message}</td> */}
                                        <td>
                                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#exampleModalLong_${jobs.id}`} disabled={jobs.status === 1}
                                            >Assign job</button>
                                            {/* <button type="button" className="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button> */}

                                            <div className="modal fade" id={`exampleModalLong_${jobs.id}`}>
                                                <div className="modal-dialog" style={{ width: "500px" }}>
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title">Subject</h5>
                                                            <button type="button" className="close" data-dismiss="modal">
                                                                <span>×</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p>
                                                                <label>Add quantity</label><input type="number" placeholder={testValue === "Transfer" ? "EnterGNR Number" : "Enter Quantity"}
                                                                    name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
                                                            </p>

                                                            {/* <button>{usertype == "Die cutting" && (Assign to Rewinding)}</button> */}
                                                            <button onClick={(e) => handleSubmit(e, jobs.id)}>
                                                                {testValue === "Die cutting" && "Assign to Rewinding"}
                                                                {testValue === "Rewinding" && "Packing"}
                                                                {testValue === "Packing" && "Transfer"}
                                                                {testValue === "Transfer" && "Complete"}

                                                            </button>


                                                        </div>

                                                        <div className="modal-footer">
                                                            <button
                                                                type="button"
                                                                className="btn btn-secondary"
                                                                data-dismiss="modal"
                                                            >
                                                                Close
                                                            </button>
                                                            {/* <button type="button" className="btn btn-primary">
                                                                Save changes
                                                            </button> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <a href={`../contact/contactupdate/${contact._id}`} className="btn btn-success">Edit</a> */}
                                            {/* <button onClick={() => handleDelete(contact._id)} className="btn btn-danger">Delete</button> */}
                                        </td>
                                    </tr>

                                ))}

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            {/* <Header /> */}

        </>
    );
}

export default Contact;
