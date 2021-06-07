import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { Logo } from '@/assets/icons';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';

import Icon from '@/components/common/Icon';

function Info() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/choice');
  };

  return <InfoWrap>형사 전문 변호사에게 직접 물어보세요!</InfoWrap>;
}

const InfoWrap = styled.main``;

export default Info;
