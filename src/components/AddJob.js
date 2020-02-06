import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import faker from 'faker'


// import { withFormik, Form, Field } from 'formik';
import { Grid, Header, Container, Form, Input, Label, Dropdown, Segment, TextArea, Divider, Select, Checkbox } from 'semantic-ui-react';
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
        <Grid>
            <Grid.Column>
                <Header as='h1' color='teal' textAlign='center' padded="very">Droom</Header>
                <Container textAlign="center">
                    <Segment raised compact style={{ maxWidth: 850 }} raised padded="very" textAlign="left">
                        <Form size="large" onSubmit={values => handleSubmit(values)}>
                            <Form.Input 
                                
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
                                
                                placeholder="What are some of the benefits of working at your company?" 
                                name="benefits" 
                                label="Benefits" 
                            />
                            <Divider section />

                            <Form.Group fluid widths="equal">
                                <Form.Input 
                                    labelPosition='left' 
                                    type='text' 
                                    placeholder='Salary'
                                    action
                                >
                                    <Label >$</Label>
                                    <input />
                                    <Select compact defaultValue='Annual' options={salaryTypes}/>
                                </Form.Input>
                                <Form.Select 
                                    placeholder='Employment Type' 
                                    selection 
                                    options={employmentOptions} 
                                />
                            </Form.Group>
                            <Form.Group fluid widths="equal">
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
                                    {/* <Segment fluid >
                                        <Label size="large" labelPosition="left">
                                            Accept Remote Applicants?
                                        </Label>
                                        <Checkbox fluid slider size="large" />
                                    </Form.Group> */}
                            </Form.Group>
                            <Form.Button color='teal' fluid size='large' onSubmit={handleSubmit} content="Add Job" />
                        </Form>
                    </Segment>
                </Container>
            </Grid.Column>
        </Grid>
        
        
    )
}

    


export default AddJob



