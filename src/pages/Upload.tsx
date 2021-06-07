import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';

function Upload() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/register');
  };

  return <div />;
}

export default Upload;
