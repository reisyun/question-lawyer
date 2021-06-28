/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@material-ui/core';

function NotFound() {
  const history = useHistory();

  return (
    <Layout title="404" desc="페이지를 찾을 수 없습니다." bigTitle>
      <Center>
        <Button
          variant="outlined"
          onClick={() => {
            history.push('/');
          }}
        >
          홈으로 돌아가기
        </Button>
      </Center>
    </Layout>
  );
}

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default NotFound;
