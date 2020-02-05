import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import Modal from 'react-bootstrap/Modal'

import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";



const SkillList = ({ errors, touched, values, status }) => {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = e => {
        e.preventDefault();    
        //e.target.parentElement.style.display  ='none';  
    };
 
    const [skills, setSkill] = useState(['PHP','ROR','Jquery']);
   
    useEffect(() => {
      status && setSkill(skills => [...skills, status]);
    }, [status]);
    
   
    return (
        <section>
            <div className="section_content">
                <div className="section_top_content">
                    <h2 className="section_title">Skills &amp; Endorsements</h2>
                    <div className="section_action">
                        <div><button className="btn btn-success btn-lg" onClick={handleShow}>Add Skill</button></div>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Add Skill</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                
                    {touched.skill_name && errors.skill_name && <div class="alert"><span class="closebtn" onClick={handleChange}>&times;</span> 
                    <strong>Danger!</strong> {errors.skill_name}</div>}
                  
                    <Field
                        type="text"
                        name="skill_name"
                        placeholder="skill"
                        value={values.skill}
                        />

                    <Field
                    type="hidden"
                    name="emp_id"
                    placeholder="8"
                    value={values.emp_id}

                    />

                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary"  onClick={handleClose}>
                    Close
                    </button>
                    <button className='btn btn-primary' type="submit">
                    Save Changes
                    </button>
                </Modal.Footer>
                </Form>
                </Modal>                
                
                <div>
                {skills.length > 0 ? (
                    skills.map(skill => (
                    <div>
                        <div className="skill-list">    
                            <span className="skills"><b>{skill}</b></span>
                            <div>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                            <div>
                            
                        </div>
                        </div>
                        <hr></hr>
                    </div>
                        ))
                    ) : (
                    <div>    
                        <span><b>No Skills</b></span>
                    </div>
                )}
                </div>
                
            </div>
        </section>
    )
}

// higher order component
const FormikMyForm = withFormik({
    mapPropsToValues({ skill_name }) {
      return {
        skill_name: skill_name || "",
              
      };
    },
  
    validationSchema: Yup.object().shape({
        skill_name: Yup.string().max(30, 'Please enter no more than 30 characters')
      .required( 'Please enter your  skill' )     
    }),
  
    handleSubmit(values, { setStatus, resetForm }) {
      console.log("Submitting form:", values);
      var res = {skill_name: "tanveer",
      status: 201,
      statusText:""};
      console.log("Response form:", res);
      //setStatus();
      setStatus([values.skill_name]);
     
     /*
      axios
        .post("https://droom1.herokuapp.com/api/skills", values)
        // just put in a url you want data from
        .then(res => {
          console.log("Success:", res);
          setStatus(res.data);
          resetForm();
        })
        // do stuff with whatever gets returned
        .catch(err => {
          console.log("Error:", err.response);          
         
        });
      // if there's an error, handle it
     
      */
    
       
    
    
    }
  })(SkillList);

export default FormikMyForm;