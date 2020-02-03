import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Button, Form, Grid, Header, Message, Segment, Popup } from 'semantic-ui-react'
import logo from '../logo.svg'

const options = [
  { text: 'Employer', value: 'employer' },
  { text: 'Job-seeker', value: 'jobseeker' }
]

const SignUp = () => {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image size='large' verticalAlign='bottom' src={logo} />
          Create New Account
        </Header>
        <Form size='large'>
          <Segment stacked textAlign='left'>
            <Form.Input
              fluid
              label="E-mail"
            />
            <Form.Input
              fluid
              label="Password"
              type="password"
            />
            <Form.Select
              fluid
              label={
                <label>
                  Role 
                  <Popup
                    on='click'
                    pinned
                    content={
                      <>
                        <p><strong>Employer:</strong> select this if you are an employer and looking to post a job and fill open positions</p>
                        <p><strong>Job-seeker:</strong> select this if you are looking for a role and want to browse job postings</p>
                      </>
                    }
                    trigger={<a href="#">  (more info)</a>}
                  />
                </label>}
              options={options}
              placeholder='Select a role'
            />
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Button color='teal' fluid size='large'>Sign Up</Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <Link to='/login'>Log In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default SignUp