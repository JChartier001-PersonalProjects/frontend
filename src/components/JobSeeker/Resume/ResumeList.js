import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import Modal from 'react-bootstrap/Modal'

import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";


const ResumeList = ({ errors, touched, values, status }) => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = e => {
        e.preventDefault();    
        //e.target.parentElement.style.display  ='none';  
    };
 
    const [resume, setResume] = useState(['PHP','ROR','Jquery']);
   
    useEffect(() => {
      status && setResume(skills => [...skills, status]);
    }, [status]);
    return (
        <section>
            <div className="section_content">
                <div className="section_top_content">
                    <h2 className="section_title">Resume</h2>
                    <div className="section_action">
                        <div><a href=''>Add Resume</a></div>
                       
                    </div>
                </div>
                <div> 
                    <p><b>Senior PHP Developer</b></p>
                    <p>LEO TECH PVT LTD (Genie Tech)</p>
                    <p>Mar 2014 – Mar 2016</p>
                    <hr></hr>
                    <p><b>PHP Developer</b></p>
                    <p>World Source Network</p>
                    <p>Apr 2012 – Aug 2013</p>
                    <hr></hr>
                </div>
            </div>
        </section>
    )
}

export default ResumeList;