import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { DropzoneArea } from 'material-ui-dropzone';
import Layout from '@/components/Layout';

function Upload() {
  const history = useHistory();
  const onSubmit = () => {
    history.push('/register');
  };

  return (
    <Layout
      title="이 사건과 관련된 자료가 있다면 업로드해 주세요."
      desc="최대 업로드 개수는 5개 입니다."
      bigTitle
    >
      <DropzoneArea />
    </Layout>
  );
}

export default Upload;
