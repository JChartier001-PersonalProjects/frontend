import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from '../logo.svg'

const LoginForm = () => {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image size='large' verticalAlign='bottom' src={logo} />
          Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='teal' fluid size='large'>Login</Button>
          </Segment>
        </Form>
        <Message>
          New user? <Link to='/signup'>Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default LoginForm