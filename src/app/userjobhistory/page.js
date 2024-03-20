"use client"
import Image from "next/image";
import Header from "../components/header";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [data, setData] = useState(undefined);
    const [user_type, setusertype] = useState('');
    const [userId, setuserID] = useState('');
    const [page, setpage] = useState(1)
    const [size, setSize] = useState('')
    const [startindex, setStartIndex] = useState(0)
    const [limit, setLimit] = useState(15)
    const [prev, setPrev] = useState('')
    const [next, setNext] = useState('')
    const apiurl = process.env.apiurl


    var testValue = "";
    var id = ""

    useEffect(() => {
        // Check if localStorage is available (client-side)

        testValue = localStorage.getItem('testKey');
        setusertype(testValue);
        id = localStorage.getItem('userid');
        setuserID(id);
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
        // Set user_type with the value from localStorage when component mounts
        // setUserType(testValue);



        async function fetchData() {
            try {
                console.log("console", userId, user_type)
                const res = await axios.get(`${apiurl}/admin/userdashboard/${id}/${testValue}`, { cache: 'no-store' });
                console.log(res)
                const jsonData = await res.data
                setData(jsonData.data);
                // console.log("jsonData", jsonData)
                setSize(parseInt((jsonData.data.length) / 15) + 1)
                // if (size <= 1) {
                //     nextButton.disabled = true;
                // }
                // prevButton.disabled = true;
            } catch (error) {
                console.error(error);
                // Handle error, for example set state indicating error occurred
            }
        }

        fetchData();
    }, [testValue, id]);

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

    if (data === undefined) {
        return <div>Loading...</div>
    }
    // if (size <= 1) {
    //     nextButton.disabled = true;
    // }
    // else {
    //     console.log("jsonData1", data)
    // }



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

        </div>

    )
}
