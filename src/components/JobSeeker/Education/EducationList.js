import React, {useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from '../../utils.js'

const EducationList = ({ errors, touched, values, status, employee }) => {

    // Set employee in local storage.
    localStorage.setItem('employee', JSON.stringify(employee));

    let employeeEducations = '';

   if ('education' in employee) {
    employeeEducations = employee.education;
   }

   const [educations, setEducation] = useState(employeeEducations ? [employeeEducations] : []);
    
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = e => {
        e.preventDefault();     
    };

    useEffect(() => {
      status && setEducation(educations => [...educations, status]);

      console.log(educations);
    }, [status]);
  
    const deleteEducation = id => {
        if (window.confirm("Are you sure your want to delete")) {    
            axiosWithAuth()
            .delete(`https://droom1.herokuapp.com/api/education/${id}`)
            .then(res => {
            console.log("Delete Education", res);
            setEducation(educations.filter(education => education.id !== id));
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
                    <h2 className="section_title">Education</h2>
                    <div className="section_action">
                        <div><button className="btn btn-success btn-lg" onClick={handleShow}>Add Education</button></div>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Add Education</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {touched.school_name && errors.school_name && <div className="alert"><strong>Danger!</strong> {errors.school_name}</div>}
                   <label><strong>School Name</strong></label>
                    <Field
                    type="text"
                    name="school_name"
                    placeholder="Ex: Boston University"
                    value={values.school_name}
                    />
                   
                    {touched.degree_earned && errors.degree_earned && <div className="alert"><strong>Danger!</strong> {errors.degree_earned}</div>}
                    <label><strong>Degree Earned</strong></label>
                    <Field
                    type="text"
                    name="degree_earned"
                    placeholder="Ex: Bachelor"
                    value={values.degree_earned}
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

                {educations.length > 0 ? (
                    educations.map(education => (
                    <div key={education.id}>
                        <div className="content-list">
                            <div className="educations">
                                <p><b>{education.school_name}</b></p>
                                <p>{education.degree_earned}</p>
                            </div>    
                            <div>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteEducation(education.id)}>Delete</button>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                        ))
                    ) : (
                    <div>    
                        <span><b>No Educations</b></span>
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
        school_name: values.school_name || "",
        degree_earned: values.degree_earned || "",       
      };
    },
  
    validationSchema: Yup.object().shape({
        school_name: Yup.string().required( 'Please enter school name' ),

      degree_earned: Yup.string().required( 'Please enter degree earned' )     
    }),
  
    handleSubmit(values, { setStatus, resetForm }) {
        const employee = JSON.parse(localStorage.getItem('employee'));
        values.emp_id = employee.id;
       
        axiosWithAuth()
         .post("https://droom1.herokuapp.com/api/education", values)
         
          .then(res => {
            console.log("Success Education", res);
            setStatus(res.data);
            resetForm();
          })
          // do stuff with whatever gets returned
          .catch(err => {
            console.log("Error:", err.response);          
          });
    }
  })(EducationList);

export default FormikMyForm;