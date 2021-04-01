import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const SingleCourse = (props) => {
  const data = props.data;
  const click = props.handleClick;
  return (
    <Container>
      <Row>
        {data.map((course, index) => (
          <Col key={index} xs={4} className='mx-4'>
            <Card style={{ width: '18rem' }} className='m-2'>
              <Card.Header>{course.name}</Card.Header>

              <Card.Body>
                <Card.Text>Price: ${course.price}</Card.Text>
              </Card.Body>

              <Button variant='warning' onClick={() => click(course)}>
                Purchase
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SingleCourse;
