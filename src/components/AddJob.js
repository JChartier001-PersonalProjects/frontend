import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import faker from 'faker'


// import { withFormik, Form, Field } from 'formik';
import { Container, Form, Button, Label, Segment, Divider, Select } from 'semantic-ui-react';
import { findByLabelText } from '@testing-library/react';

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
        <Container text>
            <Segment raised compact padded="very" textAlign="left">
                <Form size="large" onSubmit={values => handleSubmit(values)}>
                    <Form.Input 
                        
                        placeholder="Job Title (Ex. Senior Backend Developer)" 
                        name="jobTitle" 
                        label="Job Title" 
                        onChange={handleChange}
                    />
                    <Form.TextArea 
                        placeholder="What are you looking for in an applicant?"  
                        name="description" 
                        rows={4} 
                        label="Description" 
                        onChange={handleChange}
                    />
                    <Form.Input 
                        
                        placeholder="What are some of the benefits of working at your company?" 
                        name="benefits" 
                        label="Benefits" 
                        onChange={handleChange}
                    />
                    <Divider section />

                    <Form.Group fluid widths="equal">
                        <Form.Input 
                            labelPosition='left' 
                            type='text' 
                            placeholder='Salary'
                            name="salary"
                            action
                            onChange={handleChange}
                        >
                            <Label >$</Label>
                            <input />
                            <Select name="salaryType" compact defaultValue='Annual' options={salaryTypes} onChange={handleChange}/>
                        </Form.Input>
                        <Form.Select 
                            placeholder='Employment Type' 
                            name="employmentType"
                            selection 
                            options={employmentOptions} 
                            defaultValue="Full-Time"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group fluid widths="equal">
                        <Form.Input 
                                placeholder="City" 
                                type="text" 
                                name="city" 
                                onChange={handleChange}
                            />
                            <Form.Dropdown 
                                placeholder='State' 
                                name="state"
                                selection 
                                options={stateOptions} 
                                onChange={handleChange}
                            />

                    </Form.Group>
                    <Button positive fluid size='large' onSubmit={handleSubmit} content="Add Job" />
                </Form>
            </Segment>
        </Container>
        
        
    )
}

    


export default AddJob



