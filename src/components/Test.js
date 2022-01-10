import React from 'react';
import { pure } from 'recompose';

function Test(props) {
  console.log('child renders');
  
  console.log(props.prop)
  return (
        <h1>hii{props.prop}</h1>
  );
}

export default pure(Test);
