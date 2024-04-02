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
import { BACKEND_HOST } from '../../Constants.js';
import $ from 'jquery';
import secureLocalStorage from "react-secure-storage";
import { CSVLink, CSVDownload } from "react-csv";

// export const Detailed = () => { }
const WebinarAdmin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (secureLocalStorage.getItem('type') !== "admin") {
      navigate('/Webinar');
    }
  }, [])
  const [userData, setUserdata] = useState(null);
  const [userCount,setUserCount]=useState(0)
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
  const [toggleView2, setToggleView2] = useState(true);

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
        const response = await fetch(`${BACKEND_HOST}/Admin`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          // If the response is not ok, handle the error here
          const errorMessage = `An error occurred while fetching detail: ${response.statusText}`;
          // console.error(errorMessage);
          return;
        }
        const json = await response.json();
        setUserdata(json.users);
        setUserCount(json.count);
        
      } catch (error) {
        // If an error occurs during the fetch request, handle it here
        // console.error('An error occurred while fetching details:', error);
      }
    };
    getUserdata();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${BACKEND_HOST}/Webinar`, {
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

      })
      .catch(error => {
        // Handle any errors
        // console.error(error);
      });
  };
 
  const handleToggleView = () => {
    setToggleView(!toggleView);
  };
  const handleToggleView2 = () => {
    setToggleView2(!toggleView2);
  };
  return (
    // <div><textarea ref={Detailed} />
    //   <button onClick={handleClick}>Add</button>
    <> <div className="wrapper">
      <NavBar /></div><br />
      <br /><br /><br />
      <button className={styles.button} onClick={handleToggleView2}>
  {toggleView2? `Number of Users: ${userData && userData.length}` : `Number of premium Users: ${userCount}`}
</button>
      
      <p className={styles.Notice}>Hello {secureLocalStorage.getItem('user')},<br />This page empowers you to manage upcoming seminars and user data with ease. </p>
      <ul className={styles.Notice}><li><strong>Manage Users: </strong> The current total user count is displayed at the top of this page. To view the number of premium users specifically, click the "Number of Users" button. For detailed user management options, including a complete user list, click the "View User List" button.</li>
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
          <>
          <div className="mb-3">
          <CSVLink data={userData} enclosingCharacter={`"`} separator={";"} filename={"UsersList.csv"} className={styles.btn}>Export Data</CSVLink>
        </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h5 className={styles.HeadingStyles}>User Data</h5>
                <table className="table table-bordered " id=''>
                  <thead>
                    <tr>
                      <th className={styles.tableHeader}>Reg. No</th>
                      <th className={styles.tableHeader}>Username</th>
                      <th className={styles.tableHeader}>Email</th>
                      <th className={styles.tableHeader}>Phone No</th>
                      <th className={styles.tableHeader}>User Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData && userData.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id} </td>
                        <td>{user.name} </td>
                        <td>{user.email} </td>
                        <td>{user.phonenumber} </td>
                        <td>{user.type} </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          </>
        )}
      <br /><br /><br /><br />
      
    </>
  )
}

export default WebinarAdmin