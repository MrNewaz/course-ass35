import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import SingleCourse from '../SingleCourse/SingleCourse';
import data from '../../Data';
import { Col, Container, Row } from 'react-bootstrap';

const Courses = () => {
  const [course, setCourse] = useState([]);
  const handleClick = (x) => {
    const newCourse = [...course, x];
    setCourse(newCourse);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col xs={9}>
            <SingleCourse data={data} handleClick={handleClick} />
          </Col>
          <Col>
            <Cart course={course} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
