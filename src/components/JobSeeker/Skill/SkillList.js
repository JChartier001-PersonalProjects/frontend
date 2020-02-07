import React, {useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from '../../utils.js'

const SkillList = ({ errors, touched, values, status, employee }) => {

    // Set employee in local storage.
    localStorage.setItem('employee', JSON.stringify(employee));

    let employeeSkills = '';

    if ('skills' in employee) {
      employeeSkills = employee.skills;
    }
    
    const [skills, setSkill] = useState(employeeSkills ? [employeeSkills] : []);
     
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true)};

    const handleChange = e => {     
        e.preventDefault();    
        //e.target.parentElement.style.display  ='none';  
    };
   
    useEffect(() => {
      status && setSkill(skills => [...skills, status]);
    }, [status]);

    const deleteSkill = id => {
   
      if (window.confirm("Are you sure your want to delete")) {

          axiosWithAuth()
          .delete(`https://droom1.herokuapp.com/api/skills/${id}`)
          .then(res => {
            console.log("Delete Skill", res);
            setSkill(skills.filter(skill => skill.id !== id));
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
                    {touched.skill_name && errors.skill_name && <div class="alert"><strong>Danger!</strong> {errors.skill_name}</div>}
                  
                    <Field
                        type="text"
                        name="skill_name"
                        placeholder="Skill (ex: Data Analysis)"
                        value={values.skill_name}
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
                {skills.length > 0  ? (
                    skills.map(skill => (
                    <div key={skill.id}>
                        <div className="content-list">  
                            <span className="skills"><b>{skill.skill_name}</b></span>
                            <div>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteSkill(skill.id)}>Delete</button>
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
    mapPropsToValues({ skill_name}) {
      return {
        skill_name: skill_name || "",       
      };
    },
  
    validationSchema: Yup.object().shape({
        skill_name: Yup.string().max(30, 'Please enter no more than 30 characters')
      .required( 'Please enter your  skill' )     
    }),
  
    handleSubmit(values, { setStatus, resetForm }) {

      const employee = JSON.parse(localStorage.getItem('employee'));
      values.emp_id = employee.id;
     
      axiosWithAuth()
       .post("https://droom1.herokuapp.com/api/skills", values)
        //.get("https://droom1.herokuapp.com/api/skills", values)
        //.post("https://droom1.herokuapp.com/api/employee", {user_id: '1', name: 'Tan', portfolio_link: 'Testing'})
        //.get("https://droom1.herokuapp.com/api/employee")
        // just put in a url you want data from
        .then(res => {
          console.log("Success Skill", res);
          setStatus(res.data);
          resetForm();
        })
        // do stuff with whatever gets returned
        .catch(err => {
          console.log("Error:", err.response);          
        });
      // if there's an error, handle it
    }
  })(SkillList);

export default FormikMyForm;