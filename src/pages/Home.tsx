import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { questionFormState } from '@/atom/question';
import { data } from '@/libs/data';
import Button from '@/components/common/Button';
import { Subject } from '@/libs/model';
import Layout from '@/components/Layout';

function Home() {
  const history = useHistory();
  const setQusetionForm = useSetRecoilState(questionFormState);

  const selectSubject = (subject: Subject) => {
    setQusetionForm(oldForm => ({
      ...oldForm,
      subject: subject.title,
    }));

    history.push(`/question/${subject.title}`);
  };

  // data에 있는 주제들을 버튼으로 생성
  const subjects = data.subject.map(subject => (
    <StyledButton
      key={subject.title}
      variant="text"
      size="large"
      onClick={() => selectSubject(subject)}
    >
      {subject.title}
    </StyledButton>
  ));

  return (
    <Layout main title="형사법률 리스크 진단" desc="변호사에게 무료로 진단 받으세요!">
      <List>{subjects}</List>
    </Layout>
  );
}

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  margin: 8px 0;
  background: white;
`;

export default Home;
