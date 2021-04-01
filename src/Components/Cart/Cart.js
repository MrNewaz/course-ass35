import React from 'react';

const Cart = (props) => {
  const data = props.course;
  const total = data.reduce((tot, cor) => tot + cor.price, 0);
  return (
    <div>
      <h4>Number of Courses: {data.length}</h4>
      <h3>Total price: ${total}</h3>
    </div>
  );
};

export default Cart;
