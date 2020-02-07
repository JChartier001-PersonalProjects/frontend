import React, {useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from '../../utils.js'


const ResumeList = ({ errors, touched, values, status, employee }) => {

     // Set employee in local storage.
     localStorage.setItem('employee', JSON.stringify(employee));

     let employeeResumes = '';

    if ('resume' in employee) {
      employeeResumes = employee.resume;
    }

    const [resumes, setResume] = useState(employeeResumes ? [employeeResumes] : []);

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = e => {
        e.preventDefault();    
    };
 
    useEffect(() => {
      status && setResume(resumes => [...resumes, status]);

      console.log(resumes);
    }, [status]);
  
    const deleteResume = id => {
     
        if (window.confirm("Are you sure your want to delete")) {   
            axiosWithAuth()
            .delete(`https://droom1.herokuapp.com/api/resume/${id}`)
            .then(res => {
            console.log("Delete Resume", res);
            setResume(resumes.filter(resume => resume.id !== id));
            })
            // do stuff with whatever gets returned
            .catch(err => {
            console.log("Error:", err.response);          
            });  
        }    
    }


    return (
        <section>
            <div className="section_content">
                <div className="section_top_content">
                    <h2 className="section_title">Resume</h2>
                    <div className="section_action">
                        <div><button className="btn btn-success btn-lg" onClick={handleShow}>Add Resume</button></div>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Add Resume</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {touched.company_name && errors.company_name && <div className="alert"><strong>Danger!</strong> {errors.company_name}</div>}
                   <label><strong>Company Name</strong></label>
                    <Field
                    type="text"
                    name="company_name"
                    placeholder="Ex: Microsoft"
                    value={values.company_name}
                    />
                   
                    {touched.title && errors.title && <div className="alert"><strong>Danger!</strong> {errors.title}</div>}
                    <label><strong>Title</strong></label>
                    <Field
                    type="text"
                    name="title"
                    placeholder="Ex: PHP Developer"
                    value={values.title}
                    />

                    {touched.years && errors.years && <div className="alert"><strong>Danger!</strong> {errors.years}</div>}
                    <label><strong>Years</strong></label>
                    <Field
                    type="text"
                    name="years"
                    placeholder="Years"
                    value={values.years}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleClose}>
                    Close
                    </button>
                    <button type="submit" className='btn btn-primary'>
                    Save Changes
                    </button>
                </Modal.Footer>
                </Form>
                </Modal>
                {resumes.length > 0 ? (
                    resumes.map(resume => (
                    <div key={resume.id}>
                        <div className="content-list">
                            <div className="educations">
                                <p><b>{resume.company_name}</b></p>
                                <p>{resume.title}</p>
                                <p>{resume.years} Years</p>
                            </div>    
                            <div>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteResume(resume.id)}>Delete</button>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                        ))
                    ) : (
                    <div>    
                        <span><b>No Resumes</b></span>
                    </div>
                )}

            </div>
        </section>
    )
}

// higher order component
const FormikMyForm = withFormik({
    mapPropsToValues( values ) {
      return {
        company_name: values.company_name || "",
        title: values.title || "",  
        years: values.years || ""     
      };
    },
  
    validationSchema: Yup.object().shape({
        company_name: Yup.string().required( 'Please enter company name' ),
        title: Yup.string().required( 'Please enter title' ),
        years: Yup.string().required( 'Please enter years')
    }),
  
    handleSubmit(values, { setStatus, resetForm }) {
        const employee = JSON.parse(localStorage.getItem('employee'));
        values.emp_id = employee.id;
       
        axiosWithAuth()
         .post("https://droom1.herokuapp.com/api/resume", values)
         
          .then(res => {
            console.log("Success Resume", res);
            setStatus(res.data);
            resetForm();
          })
          // do stuff with whatever gets returned
          .catch(err => {
            console.log("Error:", err.response);          
          });
    }
  })(ResumeList);

export default FormikMyForm;