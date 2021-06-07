/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { makeStyles } from '@material-ui/core/styles';
import { isEmail, isPhoneNumber } from '@/libs/utils';
import { validateHint } from '@/libs/validateHint';
import { useAnswerFormState } from '@/atoms/questionState';
import { useWriteForm } from '@/hooks/useWriteForm';
import { TextField, FormControlLabel, Checkbox, Typography } from '@material-ui/core';
// import Image from '@/components/common/Image';
import MainButton from '@/components/MainButton';
import Layout from '@/components/Layout';
import Modal from '@/components/Modal';

function Register() {
  const classes = textFieldStyles();
  const [openModal, setOpenModal] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [, setAnswerForm] = useAnswerFormState();
  const { template, sendEmail } = useWriteForm();
  const [inputs, setInputs] = useState({
    phone: '',
    email: '',
  });
  const [validate, setValidate] = useState({
    email: true,
    phone: true,
  });
  const { phone, email } = inputs;

  useEffect(() => {
    if (phone.length === 10) {
      setInputs(prev => ({
        ...prev,
        phone: phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'),
      }));
    }
    if (phone.length === 13) {
      setInputs(prev => ({
        ...prev,
        phone: phone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      }));
    }
  }, [phone, setInputs]);

  // 인풋 값 핸들링
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    const refresh = 100;
    const isEmpty = value.length === 0;

    setInputs(prev => ({
      ...prev,
      [name]: value,
    }));

    // 실시간 유효성 검사
    if (name === 'phone') {
      setTimeout(
        () =>
          check(
            'phone',
            () => value.length >= 10 && isPhoneNumber(value),
            () => setValidate(prev => ({ ...prev, phone: isEmpty })),
          ),
        refresh,
      );
    }

    if (name === 'email') {
      setTimeout(
        () =>
          check(
            'email',
            () => isEmail(value),
            () => setValidate(prev => ({ ...prev, email: isEmpty })),
          ),
        refresh,
      );
    }
  };

  /**
   * 유효성 검사
   */
  const check = (name: 'phone' | 'email', validation: () => boolean, cb: () => void) => {
    if (!validation()) {
      setValidate(prev => ({ ...prev, [name]: false }));
      cb();
      return;
    }
    setValidate(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // 이메일을 보냄
    // sendEmail({
    //   ...template,
    //   phone,
    //   email,
    // });

    // 이메일을 성공적으로 보냈다면 모달 오픈
    setOpenModal(true);

    // 답변 초기화
    setAnswerForm([]);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Layout title="수고하셨습니다" desc="연락처를 입력해 주시면 빠르게 연락드리겠습니다!" bigTitle>
      {/* <Illust src="http://antiwhitepig.cafe24.com/wp-content/uploads/2021/04/q-mail.png" /> */}
      <form>
        <TextField
          name="phone"
          className={classes.root}
          inputProps={{ className: classes.input }}
          required
          fullWidth
          variant="filled"
          label="전화번호"
          placeholder="전화번호를 입력해주세요."
          helperText={!validate.phone && validateHint.phone}
          error={!validate.phone}
          value={inputs.phone}
          onChange={handleChange}
        />
        <TextField
          name="email"
          className={classes.root}
          inputProps={{ className: classes.input }}
          fullWidth
          variant="filled"
          label="이메일"
          helperText={
            // 만약 이메일을 입력하지 않았으면 '이메일은 기입...' 나오고
            // 입력했는데, 유효성 검사에서 틀리면 에러 메세지 나옴
            // 유효성 검사까지 맞다면 helperText 없어짐
            !email
              ? '이메일은 기입하지 않으셔도 제출 가능합니다.'
              : !validate.email
              ? validateHint.email
              : ''
          }
          error={!validate.email}
          value={inputs.email}
          onChange={handleChange}
        />
      </form>
      <FormControlLabel
        label="개인정보 수집 및 이용에 동의합니다."
        control={<Checkbox color="primary" checked={agreed} onChange={() => setAgreed(!agreed)} />}
      />
      <SubmitButton onClick={handleSubmit} disabled={!(agreed && inputs.phone && validate.phone)}>
        제출
      </SubmitButton>
      <Typography color="textSecondary" variant="caption">
        수집하는 개인정보 항목은 '연락처', '이메일'로 개인정보의 수집 및 이용 목적은 법률상담을
        목적으로만 사용합니다.
        <br />
        개인정보의 보유 및 이용 기간은 동의 일로부터 상담 시까지이며, 삭제 요청 시 당사자는
        개인정보를 재생이 불가능한 방법으로 즉시 파기합니다.
      </Typography>
      {openModal ? <Modal open={openModal} onClose={handleClose} /> : null}
    </Layout>
  );
}

// const Illust = styled(Image)`
//   margin: 32px auto 40px;
//   width: 80%;
//   height: 200px;
//   opacity: 0.8;

//   @media (max-width: 576px) {
//     max-height: 160px;
//   }
// `;

const textFieldStyles = makeStyles({
  root: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: 'white',
  },
});

const SubmitButton = styled(MainButton)`
  margin-bottom: 16px;
`;

export default Register;
