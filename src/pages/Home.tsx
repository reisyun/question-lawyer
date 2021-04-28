import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { questionFormState } from '@/atom/question';
import { data } from '@/libs/data';
import Content from '@/components/Content';
import Button from '@/components/common/Button';
import { Subject } from '@/libs/model';

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
      variant="outline"
      size="large"
      onClick={() => selectSubject(subject)}
    >
      {subject.title}
    </StyledButton>
  ));

  return (
    <Content title="변호사가 직접만든 무료 법률 진단">
      <Wrapper>{subjects}</Wrapper>
    </Content>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  margin: 8px 0;
`;

export default Home;
