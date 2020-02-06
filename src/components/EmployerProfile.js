import React from 'react'
import { Container, Segment, Image, Header, Card } from 'semantic-ui-react';

const EmployerProfile = (props) => {

    return(
        <div className="employer-profile-container">
            <Container fluid>
                <Segment padded="very" basic >
                    <Image spaced src='https://react.semantic-ui.com/images/wireframe/square-image.png' size="small" />
                    <Header as="h2">Company Inc.</Header>
                    <Card fluid centered raised >
                        <Card.Content>
                            <Card.Description>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</Card.Description>
                        </Card.Content>
                        
                    </Card>
                </Segment>
            </Container>
        </div>
    )

}

export default EmployerProfile;