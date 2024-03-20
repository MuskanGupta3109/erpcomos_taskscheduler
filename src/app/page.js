"use client"

import Image from "next/image";
import styles from "./page.module.css";
import axios from 'axios'
import { useState } from "react";



function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user_type, setUsertype] = useState('');

  const apiurl = process.env.apiurl;
  const baseurl = process.env.baseurl;



  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = new FormData()

    userData.append('email', email)
    userData.append('password', password)
    userData.append('user_type', user_type)

    try {
      // const res=await axios.post('http://localhost:6000/api/register',JSON.stringify(data))
      const res = await axios.post('http://localhost:3000/admin/verify_login', userData)
      var token = res.data.token;
      console.log(res.data)
      var usertype = res.data.user_type
      var id = res.data.user.id
      console.log(res.data.token, res.data.user.id)
      // Store token in localStorage
      // localStorage.setItem('token', token);
      // const token1 = localStorage.getItem('token');
      // console.log('Token from localStorage:', token1);
      // localStorage.setItem('token', token);
      localStorage.setItem('testKey', usertype);
      localStorage.setItem('userid', id);


      // Retrieve the test value from localStorage
      const testValue = localStorage.getItem('testKey');
      const userid = localStorage.getItem('userid');

      console.log('Test value from localStorage:', testValue, userid);
      // Retrieve token from localStorage
      // const storedToken = localStorage.getItem('token');
      // console.log('Token from localStorage:', storedToken);
      // setTimeout(() => {
      //   // Retrieve token from localStorage
      //   const storedToken = localStorage.getItem('token');
      //   console.log('Token from localStorage:', storedToken);
      // }, 10000); // Adjust this delay as needed

      window.location.href = ("./dashboard")


      if (res.status === 200) {
        setUsertype('')
        setEmail('')
        setPassword('')
        // setCPassword('')
        // window.location.href = ("./dashboard")
      }


    }
    catch (err) {
      if (err.response.status === 401) {
        alert("User not Found")

      }
      if (err.response.status === 400) {
        alert("All fields are required")

      }
      if (err.response.status === 402) {
        alert("Incorrect email or password")

      }
      console.log("err", err)
    }

    console.log(user_type, password, email)
  }


  return (


    <table style={{ width: "100%", height: "100%", position: "absolute", margin: 0, padding: 0, bottom: 0, top: 0, right: 0, left: 0, verticalAlign: "middle" }}>
      <tbody>
        <tr>
          <td>
            <section className="sptb">

              <div className="container customerpage">
                <div className="row">
                  <div className="single-page">
                    <div className="col-lg-5 col-xl-4 col-md-7 d-block mx-auto">
                      <div className="wrapper wrapper2 border">
                        <div className="p-4 mb-5">
                          <h4 className="text-start font-weight-semibold fs-16">
                            &nbsp;
                          </h4>
                          <div className="btn-list d-sm-flex text-center justify-content-center">
                            <img src="images/cosmos.png" alt=""></img>
                          </div>
                        </div>

                        <form id="login" className="card-body" tabIndex={500} onSubmit={handleSubmit}>
                          <div className="mail">
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label>Mail or Username</label>
                          </div>
                          <div className="passwd">
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label>Password</label>
                          </div>
                          <div className="passwd">
                            <input type="text" name="usertype" value={user_type} onChange={(e) => setUsertype(e.target.value)} />
                            <label>User Type</label>
                          </div>
                          <div className="submit">


                            <button type="submit" className="btn btn-danger btn-block">Sign me in</button>
                          </div>
                          <p className="mb-2">
                            <a href="forgot.html">Forgot Password</a>
                          </p>
                          <p className="text-dark mb-0">
                            Don&apos;t have account?
                            <a href="register.html" className="text-primary ms-1">
                              Sign UP
                            </a>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </td>
        </tr>
      </tbody>
    </table>




  );
}
export default Home