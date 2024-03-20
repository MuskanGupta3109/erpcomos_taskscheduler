"use client"

import React, { useState, useEffect } from 'react';

import { notFound } from 'next/navigation';

// import styles from "./page.module.css";
import Header from "../components/header";

import axios from "axios";


const Contact = () => {
    const [data, setData] = useState(undefined);
    const [user_type, setusertype] = useState('');
    const [userID, setuserID] = useState('');

    const [quantity, setQuantity] = useState('');
    const [id, setJobId] = useState('');
    const [page, setpage] = useState(1)
    const [size, setSize] = useState('')
    const [startindex, setStartIndex] = useState(0)
    const [limit, setLimit] = useState(15)
    const [prev, setPrev] = useState(undefined)
    const [next, setNext] = useState(undefined)

    const apiurl = process.env.apiurl
    var testValue = ""
    var userid = ""

    useEffect(() => {
        // Check if localStorage is available (client-side)

        testValue = localStorage.getItem('testKey');
        setusertype(testValue)
        userid = localStorage.getItem('userid');
        setuserID(userid)
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        setPrev(prevButton)
        setNext(nextButton)

        // setIsLoggedin(testValue);
        if (testValue == "null") {
            return window.location.href = '/'; // Redirect to the root URL
        }

    }, []);


    useEffect(() => {
        async function fetchData() {
            try {

                const res = await axios.get(`http://localhost:3000/admin/useralljobs/${testValue}`, { cache: 'no-store' });
                console.log(res)
                const jsonData = await res.data.data
                // const jsonData = await res.json();
                setData(jsonData);
                setSize(parseInt((jsonData.length) / 15) + 1)
                // console.log("jsonData", jsonData)

                // prev.disabled = true;
            } catch (error) {
                console.error(error);
                // Handle error, for example set state indicating error occurred
            }
        }

        fetchData();
    }, []);

    const fetchData1 = async (position) => {
        console.log(position)
        if (position == 'next') {

            const pagevalue = page;
            if ((page + 1) >= size) {

                nextButton.disabled = true;
            }
            setpage(page + 1)


            if (((page + 1) <= 1)) {


                prevButton.disabled = true;
            }
            else {
                prevButton.disabled = false;
            }
            setpage(page + 1)


            const Index = pagevalue * 15;
            setStartIndex(Index)
            const Limit = limit + 15
            setLimit(Limit)

        }

    }
    const fetchData2 = async (position) => {
        console.log("position", position)
        if (position == 'prev') {
            nextButton.disabled = false;
            const pagevalue = page;
            if ((page - 1) <= 1) {
                prevButton.disabled = true;
                // alert("data is completely fetched")


            }
            setpage(page - 1)
            console.log("page", page)

            const Index = (page - 2) * 15;
            setStartIndex(Index)

            const Limit = limit - 15
            setLimit(Limit)
            console.log("index", Index, Limit)

        }

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
                const res = await axios.post(`${apiurl}/admin/finish`, userData)

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
    if (data === undefined || next === '') {
        return <div>Loading...</div>
    }

    // if (size <= 1) {
    //     next.disabled = true;
    // }

    // console.log("jsonData1", data)
    return (

        <div>
            <Header usertype={user_type} />
            <div className="card mb-0">
                <div className="card-header">
                    <h3 className="card-title">Jobs List</h3>
                    <input
                        type="text"
                        id="myInput"
                        // onchange="myFunction()"
                        onChange={(e) => myFunction()}
                        placeholder="Search for product names.."
                    />
                </div>
                <div className="card-body">
                    <div className="table-responsive border-top">
                        <table className="table table-bordered table-hover text-nowrap" id="datatable-buttons">
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
                                {data.slice(startindex, limit).map((jobs, index) => (

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
                                                                {user_type === "Die cutting" && "Assign to Rewinding"}
                                                                {user_type === "Rewinding" && "Packing"}
                                                                {user_type === "Packing" && "Transfer"}
                                                                {user_type === "Transfer" && "Complete"}

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
                    <>
                        <button
                            onClick={(e) => fetchData2('prev')}
                            className="btn btn-info btn-sm"
                            id="prevButton"


                        >
                            Previous
                        </button>
                        <span>
                            Page: <span id="currentPage">{page}</span>
                        </span>
                        <span>
                            / <span id="totalpage">{size}</span>
                        </span>
                        <button
                            id="nextButton"
                            className="btn btn-info btn-sm"
                            onClick={(e) => fetchData1('next')}

                        >
                            Next
                        </button>
                    </>
                </div>
            </div>
            {/* <Header /> */}

        </div>
    );
}

export default Contact;
