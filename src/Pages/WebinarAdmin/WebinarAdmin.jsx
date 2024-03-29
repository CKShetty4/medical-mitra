import React, { useEffect, useState, useRef } from 'react'
import styles from "./WebinarAdmin.module.css"
import Button from "../../components/Button/Button"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import NavBar from '../../components/NavBar/NavBar'

import $ from 'jquery';

// export const Detailed = () => { }
const WebinarAdmin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('type')==="user"||localStorage.getItem('type')==="premium") {
      navigate('/Webinar');
    }
  }, [])
  const [userData, setUserdata] = useState(null);
  const [Title, setTitle] = useState('');
  const [selectedUserType, setSelectedUserType] = useState('');
  const [description, setdescription] = useState('');
  const [LinkURL, setLinkURL] = useState('');
  const [date, setdate] = useState('');
  const [time, settime] = useState('');
  const TitleRef = useRef('');
  const descriptionRef = useRef('');
  const LinkURLRef = useRef('');
  const dateRef = useRef('');
  const timeRef = useRef('');
  const userTypeRef = useRef('');
  const [remainingCharacters, setRemainingCharacters] = useState(10000);
  const [descriptionValue, setDescriptionValue] = useState('');
  const [toggleView, setToggleView] = useState(true);

  useEffect(() => {
    const maxchar = 10000;
    const len = descriptionValue.length;

    if (len > maxchar) {
      setRemainingCharacters(-1);
    } else {
      setRemainingCharacters(maxchar - len);
    }
  }, [descriptionValue]);
  useEffect(() => {
    const getUserdata = async () => {
      try {
        // const response = await fetch('http://139.59.44.85:5000/Admin', {
          const response = await fetch('http://192.168.97.188:5000/Admin', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });


        if (!response.ok) {
          // If the response is not ok, handle the error here
          const errorMessage = `An error occurred while fetching products: ${response.statusText}`;
          console.error(errorMessage);
          return;
        }

        const json = await response.json();
        setUserdata(json.users);
      } catch (error) {
        // If an error occurs during the fetch request, handle it here
        console.error('An error occurred while fetching products:', error);
      }
    };
    getUserdata();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://192.168.97.188:5000/Webinar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Title: TitleRef.current ? TitleRef.current.value : '',
        description: descriptionRef.current ? descriptionRef.current.value : '',
        LinkURL: LinkURLRef.current ? LinkURLRef.current.value : '',
        date: dateRef.current ? dateRef.current.value : '',
        time: timeRef.current ? timeRef.current.value : '',
        userType: userTypeRef.current ? userTypeRef.current.value : ''
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        // Handle the response from the backend
        console.log(data);
        console.log('Title:', TitleRef, 'description: ', description);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  };
  const handleToggleView = () => {
    setToggleView(!toggleView);
  };
  return (
    // <div><textarea ref={Detailed} />
    //   <button onClick={handleClick}>Add</button>
    <> <div className="wrapper">
      <NavBar /></div><br />
      <br /><br /><br />
      <h5 className={styles.HeadingStyles2}>
        Number of Users: {userData && userData.length}
      </h5>
      <p className={styles.Notice}>Hello {localStorage.getItem('user')},<br />This page empowers you to manage upcoming seminars and user data with ease. </p>
 <ul className={styles.Notice}><li><strong>Manage Users: </strong> The current user count is displayed above, and click on the button labeled "View User List" to access the user list for further management options.</li>
<li><strong>Host a Seminar: </strong> Toggle the button labeled "Host Webinar," to switch back to the seminar hosting interface.</li>
<li><strong>Designed for Efficiency: </strong>
This streamlined admin interface prioritizes your time by allowing you to quickly manage seminars and users.</li></ul> 
<p className={styles.Notice}>
Need Help?
Our friendly support team is here to assist you. If you have any questions or require further guidance, don't hesitate to contact us at dev.ckshetty@gmail.com or harshithr2004@gmail.com.</p>
      <br />
      <button className={styles.button} onClick={handleToggleView}>
        {toggleView ? 'View User List' : 'Host Webinar'}
      </button>
      <br /><br />
      {toggleView ? (
        <div className={styles.contact_form}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} lg={12} className={styles.center_paper}>
              <Paper elevation={8} className={styles.grid_content} p={100}>
                <div className={styles.Arranging}>
                  <div className="Form">
                    <form action="" onSubmit={handleSubmit}>
                      <div className={styles.form_control}>
                        <label htmlFor="Title">Title</label>
                        <input ref={TitleRef} onChange={(e) => setTitle(e.target.value)} placeholder='Title' type="text" name="Title" />
                      </div>
                      <div className={styles.form_control}>
                        <label htmlFor="description">Description</label>
                        <textarea
                          placeholder='Description'
                          ref={descriptionRef}
                          onChange={(e) => setDescriptionValue(e.target.value)}
                          name="Description"
                        />
                        <span
                          id='remainingC'
                          className={`${styles.remainingC} ${remainingCharacters <= 0 ? styles.remainingCZero : ''}`}
                        >{`Remaining characters: ${remainingCharacters}`}</span>
                      </div>
                      <div className={styles.form_control}>
                        <label required htmlFor="Link">Link for the Webinar</label>
                        <input type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" ref={LinkURLRef} onChange={(e) => setLinkURL(e.target.value)} />
                      </div>
                      <div className={styles.form_control}>
                        <label required htmlFor="Date">Date</label>
                        <input type="date" ref={dateRef} onChange={(e) => setdate(e.target.value)} placeholder='date' name="date" />
                      </div>
                      <div className={styles.form_control}>
                        <label required htmlFor="time">Time</label>
                        <input type="time" ref={timeRef} onChange={(e) => settime(e.target.value)} placeholder='time' name="time" />
                      </div>
                      <div className={styles.form_control}>
                        <label required htmlFor="UserType">User Type</label>
                        <select
                          id="UserType"
                          name="UserType"
                          value={selectedUserType}
                          onChange={(e) => setSelectedUserType(e.target.value)}
                          ref={userTypeRef}
                        >
                          <option value="">Select User Type</option>
                          <option value="Premium Users">Premium Users</option>
                          <option value="Lite Users">Lite Users</option>
                        </select>
                      </div>
                      <div style={{
                        display: 'flex', justifyContent: 'left', padding: '0 12%'
                      }}>
                        <Button text="SUBMIT" /></div>
                    </form>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
        )
        :
        (
          <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h5 className={styles.HeadingStyles}>User Data</h5>
                  <table className="table table-bordered ">
                    <thead>
                      <tr>
                        <th className={styles.tableHeader}>Sr. No</th>
                        <th className={styles.tableHeader}>Username</th>
                        <th className={styles.tableHeader}>Email</th>
                        <th className={styles.tableHeader}>Phone No</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData && userData.map((user, index) => (
                        <tr key={user.id}>
                          <td>{index + 1} </td>
                          <td>{user.name} </td>
                          <td>{user.email} </td>
                          <td>{user.phonenumber} </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        )}
      <br /><br /><br /><br />
      
    </>
  )
}

export default WebinarAdmin