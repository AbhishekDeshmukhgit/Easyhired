import React from 'react';
import {Button, Card, Container} from 'react-bootstrap'
import {useParams} from 'react-router-dom'

function UserDetails() {
  let { userId } = useParams();
  console.log(userId)
  return (
    <Container className='justify-content-center text-center d-flex'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{userId}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default UserDetails;