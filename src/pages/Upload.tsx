import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { DropzoneArea } from 'material-ui-dropzone';
import { useFileState } from '@/atoms/answerState';
import { isMobile } from '@/libs/utils';
import { Button } from '@material-ui/core';
import Layout from '@/components/Layout';
import MainButton from '@/components/MainButton';

function Upload() {
  const history = useHistory();
  const [files, setFiles] = useFileState();

  const onClick = () => {
    history.push('/register');
  };

  const onChange = (fileData: File[]) => {
    setFiles(fileData);
  };

  return (
    <Layout
      title="이 사건과 관련된 자료가 있다면 업로드 해주세요"
      desc="파일의 최대 사이즈는 10MB입니다."
    >
      <DropzoneArea
        dropzoneText={isMobile ? '파일을 선택해주세요' : '이곳에 파일을 놓아보세요!'}
        showFileNames
        onChange={onChange}
        filesLimit={999}
        // 1e+7 = 10MB
        maxFileSize={10000000}
      />
      <Navigation>
        <NextButton disabled={!files.length} onClick={onClick}>
          다음
        </NextButton>
        <Button color="primary" onClick={onClick}>
          건너뛰기
        </Button>
      </Navigation>
    </Layout>
  );
}

const NextButton = styled(MainButton)`
  margin-bottom: 16px;
`;

const Navigation = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Upload;
