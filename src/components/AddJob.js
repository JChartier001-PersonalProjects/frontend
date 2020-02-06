import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import faker from 'faker'


// import { withFormik, Form, Field } from 'formik';
import { Container, Form, Input, Label, Dropdown, Segment, TextArea, Divider } from 'semantic-ui-react';

const AddJob = () => {
    const [jobForm, setJobForm] = useState({});

    const handleChange = event => {
        setJobForm({...jobForm, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(jobForm)
    };


    const addressDefinitions = faker.definitions.address
    const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
            key: addressDefinitions.state_abbr[index],
            text: state,
            value: addressDefinitions.state_abbr[index],
      }))


    const empTypes = ["Full-Time","Part-Time","Flexible"]
    const employmentOptions = empTypes.map((type, index) => ({
        key: index,
        text: type,
        value: type
    }))


    const salaryTypes = [
        { key: 'Annual', text: 'Annual', value: 'Annual' },
        { key: 'Monthly', text: 'Monthly', value: 'Monthly' },
        { key: 'Biweekly', text: 'Biweekly', value: 'Biweekly' },
        { key: 'Hourly', text: 'Hourly', value: 'Hourly' },
      ]

    return (
        <Container>
            <Segment raised padded="very" textAlign="left">
                <Form onSubmit={values => handleSubmit(values)}>
                    <Form.Input 
                        fluid 
                        placeholder="Job Title (Ex. Senior Backend Developer)" 
                        name="jobTitle" 
                        label="Job Title" 
                    />
                    <Form.TextArea 
                        placeholder="What are you looking for in an applicant?"  
                        name="description" 
                        rows={4} 
                        label="Description" 
                    />
                    <Form.Input 
                        fluid 
                        placeholder="What are some of the benefits of working at your company?" 
                        name="benefits" 
                        label="Benefits" 
                    />
                    <Divider section />


                    <Form.Group widths='equal'>
                        <Form.Input 
                        label={<Dropdown defaultValue='Annual' options={salaryTypes} />}
                            labelPosition='right' 
                            type='text' 
                            placeholder='Salary'
                            
                        >
                            <Label basic>$</Label>
                            <input />
                        </Form.Input>
                        <Form.Dropdown 
                            placeholder='Employment Type' 
                            search 
                            selection 
                            options={employmentOptions} 
                        />
                        
                        <Form.Group>
                            <Form.Input 
                                placeholder="City" 
                                type="text" 
                                name="city" 
                            />
                            <Form.Dropdown 
                                placeholder='State' 
                                search 
                                selection 
                                options={stateOptions} 
                            />
                        </Form.Group>
                        
                        
                    </Form.Group>


                    <Form.Button onClick={event => handleSubmit(event)} content="Add Job" />
                </Form>
            </Segment>

        </Container>
        
    )
}

    


export default AddJob



