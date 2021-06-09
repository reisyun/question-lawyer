import React from 'react';
import { useHistory } from 'react-router-dom';
import { DropzoneArea } from 'material-ui-dropzone';
import Layout from '@/components/Layout';
import MainButton from '@/components/MainButton';

function Upload() {
  const history = useHistory();
  const onClick = () => {
    history.push('/register');
  };

  return (
    <Layout
      title="이 사건과 관련된 자료가 있다면 업로드 해주세요"
      desc="파일 한개당 최대 사이즈는 (1e+n)MB입니다."
    >
      <DropzoneArea
        dropzoneText="이곳에 파일을 놓아보세요!"
        showFileNames
        filesLimit={999}
        // 1e+7 = 10MB
        maxFileSize={10000000}
      />
      <MainButton onClick={onClick}>다음</MainButton>
    </Layout>
  );
}

export default Upload;
